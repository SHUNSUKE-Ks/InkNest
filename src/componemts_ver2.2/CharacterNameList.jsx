import React, { useState, useEffect } from "react";
import { Plus, Edit2, X, GripVertical } from "lucide-react";

const CharacterNameList = ({
  characters = [],
  onCharacterClick,
  onAddCharacter,
  onUpdateCharacter,
  onDeleteCharacter,
  onReorderCharacters,
  textareaRef
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [dialogName, setDialogName] = useState("");
  const [editingCharacter, setEditingCharacter] = useState(null);
  const [deletingCharacter, setDeletingCharacter] = useState(null);

  // キーボードショートカット（通常モード時のみ）
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isEditMode) return;

      if (e.altKey && e.key >= "0" && e.key <= "9") {
        e.preventDefault();
        const index = e.key === "0" ? "narration" : parseInt(e.key) - 1;

        if (index === "narration") {
          insertTextAtCursor("ナレーション");
        } else if (characters[index]) {
          insertTextAtCursor(characters[index].name);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [characters, isEditMode]);

  // カーソル位置にテキスト挿入
  const insertTextAtCursor = (text) => {
    if (!textareaRef?.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;

    const newValue = value.substring(0, start) + text + value.substring(end);
    textarea.value = newValue;
    textarea.selectionStart = textarea.selectionEnd = start + text.length;
    textarea.focus();
  };

  // カードクリック
  const handleCardClick = (character) => {
    if (isEditMode) return;
    if (onCharacterClick) {
      onCharacterClick(character.name);
    } else {
      insertTextAtCursor(character.name);
    }
  };

  // ドラッグ&ドロップ
  const handleDragStart = (e, index) => {
    if (!isEditMode) return;
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, index) => {
    if (!isEditMode) return;
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newCharacters = [...characters];
    const draggedItem = newCharacters[draggedIndex];
    newCharacters.splice(draggedIndex, 1);
    newCharacters.splice(index, 0, draggedItem);

    if (onReorderCharacters) {
      onReorderCharacters(newCharacters);
    }
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  // 追加
  const handleAddClick = () => {
    setDialogName("");
    setShowAddDialog(true);
  };

  const handleAddConfirm = () => {
    if (dialogName.trim() && onAddCharacter) {
      onAddCharacter(dialogName.trim());
    }
    setShowAddDialog(false);
    setDialogName("");
  };

  // 編集
  const handleEditClick = (e, character) => {
    e.stopPropagation();
    setEditingCharacter(character);
    setDialogName(character.name);
    setShowEditDialog(true);
  };

  const handleEditConfirm = () => {
    if (dialogName.trim() && editingCharacter && onUpdateCharacter) {
      onUpdateCharacter(editingCharacter.id, dialogName.trim());
    }
    setShowEditDialog(false);
    setEditingCharacter(null);
    setDialogName("");
  };

  // 削除
  const handleDeleteClick = (e, character) => {
    e.stopPropagation();
    setDeletingCharacter(character);
    setShowDeleteDialog(true);
  };

  const handleDeleteConfirm = () => {
    if (deletingCharacter && onDeleteCharacter) {
      onDeleteCharacter(deletingCharacter.id);
    }
    setShowDeleteDialog(false);
    setDeletingCharacter(null);
  };

  // ダイアログ
  const Dialog = ({ show, title, onClose, onConfirm, children }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl p-6 w-80">
          <h3 className="text-lg font-bold mb-4">{title}</h3>
          {children}
          <div className="flex justify-end gap-2 mt-4">
            <button onClick={onClose} className="px-4 py-2 border rounded hover:bg-gray-100">
              キャンセル
            </button>
            <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              OK
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full border-b bg-white p-2">
      <div className="flex items-center gap-2 overflow-x-auto">
        {characters.map((character, index) => (
          <div
            key={character.id}
            draggable={isEditMode}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
            onClick={() => handleCardClick(character)}
            className={`
              relative flex items-center gap-1 px-3 py-2 border rounded whitespace-nowrap
              min-w-24 justify-center
              ${
                isEditMode
                  ? "cursor-move bg-yellow-50 border-yellow-300"
                  : "cursor-pointer hover:bg-gray-100 border-gray-300"
              }
              ${draggedIndex === index ? "opacity-50" : ""}
            `}>
            {isEditMode && (
              <>
                <GripVertical size={16} className="text-gray-400 absolute left-1" />
                <span className="ml-4">{character.name}</span>
                <button onClick={(e) => handleEditClick(e, character)} className="ml-1 p-1 hover:text-blue-600 rounded">
                  <Edit2 size={14} />
                </button>
                <button onClick={(e) => handleDeleteClick(e, character)} className="p-1 hover:text-red-600 rounded">
                  <X size={14} />
                </button>
              </>
            )}
            {!isEditMode && character.name}
          </div>
        ))}

        <button
          onClick={handleAddClick}
          className="flex items-center gap-1 px-3 py-2 border rounded hover:bg-gray-100 border-gray-300">
          <Plus size={16} />
          <span>追加</span>
        </button>

        <button
          onClick={() => setIsEditMode(!isEditMode)}
          className={`
            ml-auto px-4 py-2 rounded font-medium
            ${isEditMode ? "bg-green-500 text-white hover:bg-green-600" : "bg-gray-200 hover:bg-gray-300"}
          `}>
          {isEditMode ? "完了" : "編集"}
        </button>
      </div>

      {/* 追加ダイアログ */}
      <Dialog
        show={showAddDialog}
        title="新しいキャラクター追加"
        onClose={() => setShowAddDialog(false)}
        onConfirm={handleAddConfirm}>
        <div>
          <label className="block text-sm font-medium mb-2">名前:</label>
          <input
            type="text"
            value={dialogName}
            onChange={(e) => setDialogName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddConfirm()}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
        </div>
      </Dialog>

      {/* 編集ダイアログ */}
      <Dialog
        show={showEditDialog}
        title="キャラクター名を編集"
        onClose={() => setShowEditDialog(false)}
        onConfirm={handleEditConfirm}>
        <div>
          <label className="block text-sm font-medium mb-2">名前:</label>
          <input
            type="text"
            value={dialogName}
            onChange={(e) => setDialogName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEditConfirm()}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
        </div>
      </Dialog>

      {/* 削除確認ダイアログ */}
      <Dialog
        show={showDeleteDialog}
        title="確認"
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={handleDeleteConfirm}>
        <p className="text-gray-700">「{deletingCharacter?.name}」を削除しますか？</p>
      </Dialog>
    </div>
  );
};

// デモ用
export default function App() {
  const [characters, setCharacters] = useState([
    { id: 1, name: "太郎" },
    { id: 2, name: "花子" },
    { id: 3, name: "次郎" }
  ]);
  const textareaRef = React.useRef(null);

  const handleAddCharacter = (name) => {
    const newId = Math.max(...characters.map((c) => c.id), 0) + 1;
    setCharacters([...characters, { id: newId, name }]);
  };

  const handleUpdateCharacter = (id, newName) => {
    setCharacters(characters.map((c) => (c.id === id ? { ...c, name: newName } : c)));
  };

  const handleDeleteCharacter = (id) => {
    setCharacters(characters.filter((c) => c.id !== id));
  };

  const handleReorderCharacters = (newCharacters) => {
    setCharacters(newCharacters);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">CharacterNameList Component</h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
          <CharacterNameList
            characters={characters}
            onAddCharacter={handleAddCharacter}
            onUpdateCharacter={handleUpdateCharacter}
            onDeleteCharacter={handleDeleteCharacter}
            onReorderCharacters={handleReorderCharacters}
            textareaRef={textareaRef}
          />

          <div className="p-4">
            <label className="block text-sm font-medium mb-2">テキストエリア:</label>
            <textarea
              ref={textareaRef}
              className="w-full h-40 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="キャラクター名をクリックするとここに挿入されます。&#10;Alt+1~9: 対応するキャラクター&#10;Alt+0: ナレーション"
            />
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded p-4">
          <h2 className="font-bold mb-2">使い方:</h2>
          <ul className="text-sm space-y-1">
            <li>• キャラクター名をクリックでテキストエリアに挿入</li>
            <li>• 「編集」ボタンで編集モードに切り替え</li>
            <li>• 編集モードでドラッグして並べ替え</li>
            <li>• Alt+1~9: 対応するキャラクター挿入</li>
            <li>• Alt+0: ナレーション挿入</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
