import React, { useState, useEffect, useRef } from 'react';

const NoteEditor = ({ note, onUpdate }) => {
  const [content, setContent] = useState(note.content);
  const [title, setTitle] = useState(note.title);
  const textareaRef = useRef(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (note.title !== title || note.content !== content) {
        onUpdate({
          ...note,
          title,
          content,
          updatedAt: new Date().toISOString(),
        });
      }
    }, 500);
    return () => clearTimeout(handler);
  }, [title, content, note, onUpdate]);

  const handleKeyDown = (e) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    console.log('Key Down Event:', { key: e.key, code: e.code, ctrlKey: e.ctrlKey, shiftKey: e.shiftKey, altKey: e.altKey, metaKey: e.metaKey });

    const { selectionStart, selectionEnd, value } = textarea;
    const lineStart = value.lastIndexOf('\n', selectionStart - 1) + 1;
    const lineEnd = value.indexOf('\n', selectionStart);
    const currentLineEnd = lineEnd === -1 ? value.length : lineEnd;
    const currentLine = value.substring(lineStart, currentLineEnd);

    // Modified shortcut for Ctrl + M = 〇
    if (e.ctrlKey && e.key === 'm') { // Changed condition to Ctrl + m
      e.preventDefault();
      const newValue = value.substring(0, selectionStart) + '〇' + value.substring(selectionEnd);
      setContent(newValue);
      // Position cursor after the inserted character
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
      }, 0);
      return;
    }

    // Modified shortcut for auto-closing full-width bracket
    if (e.ctrlKey && e.key === '[') { // Changed condition back to Ctrl + [
      e.preventDefault();
      const newValue = value.substring(0, selectionStart) + '「」' + value.substring(selectionEnd);
      setContent(newValue);
      // Position cursor between the brackets
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
      }, 0);
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault(); // We will handle all Enter cases manually

      const trimmedLine = currentLine.trim();
      if (trimmedLine === '１．') {
        const newValue = value.substring(0, lineStart) + '1. ' + value.substring(currentLineEnd);
        setContent(newValue);
        setTimeout(() => { textarea.selectionStart = textarea.selectionEnd = lineStart + 3; }, 0);
        return;
      }
      if (trimmedLine === '・') {
        const newValue = value.substring(0, lineStart) + '- ' + value.substring(currentLineEnd);
        setContent(newValue);
        setTimeout(() => { textarea.selectionStart = textarea.selectionEnd = lineStart + 2; }, 0);
        return;
      }

      const listMatch = currentLine.match(/^(\s*)((?:- |\* |\d+\. ))(.*)/);

      if (listMatch) {
        const indent = listMatch[1];
        const marker = listMatch[2];
        const lineContent = listMatch[3];

        if (lineContent.length === 0) { // Case 1: Enter on an empty list item
          if (indent.length > 0) { // Outdent if indented
            const newIndent = indent.substring(2);
            let newLine = `${newIndent}- `;
            const lines = value.substring(0, lineStart).split('\n');
            for (let i = lines.length - 1; i >= 0; i--) {
              const prevLine = lines[i];
              if (prevLine.trim() === '') continue;

              const prevLineIndentMatch = prevLine.match(/^(\s*)/);
              if (prevLineIndentMatch && prevLineIndentMatch[1].length === newIndent.length) {
                const prevLineNumberMatch = prevLine.match(/^(\s*)(\d+)\. /);
                if (prevLineNumberMatch) {
                  newLine = `${newIndent}${parseInt(prevLineNumberMatch[2], 10) + 1}. `;
                }
                break;
              }
            }
            const newValue = value.substring(0, lineStart) + newLine + value.substring(currentLineEnd);
            setContent(newValue);
            setTimeout(() => { textarea.selectionStart = textarea.selectionEnd = selectionStart - indent.length + newLine.length; }, 0);
          } else { // Remove list marker if not indented
            const newValue = value.substring(0, lineStart) + value.substring(currentLineEnd);
            setContent(newValue);
            setTimeout(() => { textarea.selectionStart = textarea.selectionEnd = lineStart; }, 0);
          }
        } else { // Case 2: Enter on a non-empty list item (split/continue)
          let newMarker = marker;
          if (marker.match(/\d+\. /)) {
            const currentNum = parseInt(marker, 10);
            newMarker = `${currentNum + 1}. `;
          }
          const textAfterCursor = currentLine.substring(selectionStart - lineStart);
          const newText = `\n${indent}${newMarker}${textAfterCursor}`;
          const newValue = value.substring(0, selectionStart) + newText;
          setContent(newValue);
          setTimeout(() => { textarea.selectionStart = textarea.selectionEnd = selectionStart + newText.length - textAfterCursor.length; }, 0);
        }
        return;
      }

      // Default Enter behavior (just insert a newline)
      const newValue = value.substring(0, selectionStart) + '\n' + value.substring(selectionEnd);
      setContent(newValue);
      setTimeout(() => { textarea.selectionStart = textarea.selectionEnd = selectionStart + 1; }, 0);
    }

    if (e.key === 'Tab') {
        e.preventDefault();
        const numberMatch = currentLine.match(/^(\s*)(\d+)\. (.*)/);
        if (!e.shiftKey && numberMatch) {
            const indent = numberMatch[1];
            const content = numberMatch[3];
            const newLine = `${indent}  - ${content}`;
            const newValue = value.substring(0, lineStart) + newLine + value.substring(currentLineEnd);
            setContent(newValue);
            setTimeout(() => { textarea.selectionStart = textarea.selectionEnd = selectionStart + 2; }, 0);
        } else if (e.shiftKey) {
            const newLine = currentLine.startsWith('  ') ? currentLine.substring(2) : currentLine;
            const lenDiff = currentLine.length - newLine.length;
            const newValue = value.substring(0, lineStart) + newLine + value.substring(currentLineEnd);
            setContent(newValue);
            setTimeout(() => { textarea.selectionStart = textarea.selectionEnd = selectionStart - lenDiff; }, 0);
        } else {
            const newValue = value.substring(0, selectionStart) + '  ' + value.substring(end);
            setContent(newValue);
            setTimeout(() => { textarea.selectionStart = textarea.selectionEnd = selectionStart + 2; }, 0);
        }
        return;
    }

    if (e.ctrlKey) {
      let prefix = '';
      let handled = false;
      switch (e.key) {
        case '1': prefix = '# '; handled = true; break;
        case '2': prefix = '## '; handled = true; break;
        case '3': prefix = '### '; handled = true; break;
        case '7': prefix = '- '; handled = true; break;
        case '8': prefix = '1. '; handled = true; break;
        default: break;
      }
      if (handled) {
        e.preventDefault();
        const cleanedLine = currentLine.replace(/^(#+\s|- |\* |\d+\.\s)/, '');
        const newLine = prefix + cleanedLine;
        const newValue = value.substring(0, lineStart) + newLine + value.substring(currentLineEnd);
        setContent(newValue);
        const lengthDiff = newLine.length - currentLine.length;
        setTimeout(() => {
          textarea.selectionStart = selectionStart + lengthDiff;
          textarea.selectionEnd = selectionEnd + lengthDiff;
        }, 0);
      }
    }
  };

  return (
    <div style={styles.noteEditor}>
        <div style={styles.noteEditorHeader}>
            <input 
              type="text" 
              style={styles.noteEditorTitleInput} 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="タイトル"
            />
            <div style={styles.noteEditorTags}>
                {note.tags.map(tag => <span key={tag} style={styles.noteEditorTag}>#{tag}</span>)}
            </div>
        </div>
        <div style={styles.noteEditorContent}>
            <textarea 
              ref={textareaRef}
              style={styles.noteEditorTextarea} 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="ノートを入力..."
            />
        </div>
        <div style={styles.noteEditorMeta}>
            最終更新: {new Date(note.updatedAt).toLocaleString()} | 文字数: {content.length}
        </div>
    </div>
  );
};

const styles = {
    noteEditor: {
        flex: 1,
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        height: '100%',
    },
    noteEditorHeader: {
        padding: '20px 32px',
        borderBottom: '1px solid #e0e0e0',
        flexShrink: 0,
    },
    noteEditorTitleInput: {
        fontSize: 28,
        fontWeight: 600,
        border: 'none',
        outline: 'none',
        width: '100%',
        marginBottom: 12,
    },
    noteEditorTags: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
    },
    noteEditorTag: {
        padding: '4px 12px',
        background: '#f0f0f0',
        borderRadius: 12,
        fontSize: 12,
        color: '#666',
    },
    noteEditorContent: {
        flex: 1,
        padding: 32,
        overflowY: 'auto',
    },
    noteEditorTextarea: {
        width: '100%',
        height: '100%',
        border: 'none',
        outline: 'none',
        fontSize: 15,
        lineHeight: 1.6,
        color: '#333',
        resize: 'none',
    },
    noteEditorMeta: {
        padding: '16px 32px',
        borderTop: '1px solid #e0e0e0',
        fontSize: 13,
        color: '#999',
        flexShrink: 0,
    },
};

export default NoteEditor;