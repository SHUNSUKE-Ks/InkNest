import React, { useState, useCallback, useEffect } from 'react';
import MemoSidebar from './MemoSidebar';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';

const MIN_WIDTH = 100;

const MemoScreen = () => {
  const [notes, setNotes] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);

  const [sidebarWidth, setSidebarWidth] = useState(240);
  const [noteListWidth, setNoteListWidth] = useState(320);

  const [isResizingSidebar, setIsResizingSidebar] = useState(false);
  const [isResizingNoteList, setIsResizingNoteList] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedNotes = await window.electronAPI.getNotes();
      setNotes(fetchedNotes);
      if (fetchedNotes.length > 0) {
        setActiveNoteId(fetchedNotes[0].id);
      }
    };
    fetchNotes();
  }, []);

  const handleSelectNote = (id) => {
    setActiveNoteId(id);
  };

  const handleUpdateNote = (updatedNote) => {
    const newNotes = notes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(newNotes);
    window.electronAPI.saveNotes(newNotes);
  };

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

  const activeNote = notes.find(note => note.id === activeNoteId);

  return (
    <div style={styles.layout}>
      <div style={{ width: sidebarWidth, minWidth: MIN_WIDTH }}>
        <MemoSidebar />
      </div>
      
      <div style={styles.resizer} onMouseDown={handleMouseDownSidebar} />

      <div style={{ width: noteListWidth, minWidth: MIN_WIDTH }}>
        <NoteList 
          notes={notes} 
          activeNoteId={activeNoteId}
          onSelectNote={handleSelectNote} 
        />
      </div>

      <div style={styles.resizer} onMouseDown={handleMouseDownNoteList} />

      <div style={styles.editorContainer}>
        {activeNote ? (
          <NoteEditor 
            key={activeNote.id} // Important for re-mounting the component on note change
            note={activeNote} 
            onUpdate={handleUpdateNote} 
          />
        ) : (
          <div>Select a note to edit.</div>
        )}
      </div>
    </div>
  );
};

const styles = {
  layout: {
    display: 'flex',
    height: 'calc(100vh - 56px)',
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

export default MemoScreen;
