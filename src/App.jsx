import React, { useState, useCallback, useEffect } from 'react';
import Header from './componemts_ver2.2/Header';
import MemoSidebar from './componemts_ver2.2/memo/MemoSidebar';
import NoteList from './componemts_ver2.2/memo/NoteList';
import NoteEditor from './componemts_ver2.2/memo/NoteEditor';
import { useNotes } from './hooks/useNotes';

const MIN_WIDTH = 100;

const App = () => {
  const {
    notes,
    activeNote,
    activeNoteId,
    setActiveNoteId,
    updateNote,
    createNewNote,
  } = useNotes();

  // Resizing logic remains in the component as it's UI-related
  const [sidebarWidth, setSidebarWidth] = useState(240);
  const [noteListWidth, setNoteListWidth] = useState(320);
  const [isResizingSidebar, setIsResizingSidebar] = useState(false);
  const [isResizingNoteList, setIsResizingNoteList] = useState(false);

  const handleMouseDownSidebar = (e) => {
    e.preventDefault();
    setIsResizingSidebar(true);
  };

  const handleMouseDownNoteList = (e) => {
    e.preventDefault();
    setIsResizingNoteList(true);
  };

  const handleMouseUp = useCallback(() => {
    setIsResizingSidebar(false);
    setIsResizingNoteList(false);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isResizingSidebar) {
      const newWidth = e.clientX;
      if (newWidth > MIN_WIDTH) setSidebarWidth(newWidth);
    }
    if (isResizingNoteList) {
      const newWidth = e.clientX - sidebarWidth;
      if (newWidth > MIN_WIDTH) setNoteListWidth(newWidth);
    }
  }, [isResizingSidebar, isResizingNoteList, sidebarWidth]);

  useEffect(() => {
    if (isResizingSidebar || isResizingNoteList) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizingSidebar, isResizingNoteList, handleMouseMove, handleMouseUp]);

  return (
    <div>
      <Header title="InkNest" onNewPageClick={createNewNote} />
      <div style={styles.layout}>
        <div style={{ width: sidebarWidth, minWidth: MIN_WIDTH }}>
          <MemoSidebar />
        </div>
        
        <div style={styles.resizer} onMouseDown={handleMouseDownSidebar} />

        <div style={{ width: noteListWidth, minWidth: MIN_WIDTH }}>
          <NoteList 
            notes={notes} 
            activeNoteId={activeNoteId}
            onSelectNote={setActiveNoteId} // Pass the setter directly
          />
        </div>

        <div style={styles.resizer} onMouseDown={handleMouseDownNoteList} />

        <div style={styles.editorContainer}>
          {activeNote ? (
            <NoteEditor 
              key={activeNote.id}
              note={activeNote} 
              onUpdate={updateNote} 
            />
          ) : (
            <div>Select a note to edit or create a new one.</div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  layout: {
    display: 'flex',
    height: 'calc(100vh - 56px)', // Re-add the height calculation
    overflow: 'hidden',
  },
  resizer: {
    width: '5px',
    cursor: 'col-resize',
    background: '#e0e0e0',
    zIndex: 100,
  },
  editorContainer: {
    flex: 1,
    display: 'flex',
    minWidth: MIN_WIDTH,
  },
};

export default App;