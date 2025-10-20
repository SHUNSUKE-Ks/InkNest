import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);

  // Check if the Electron API is available
  const isElectron = !!window.electronAPI;

  useEffect(() => {
    const fetchNotes = async () => {
      if (isElectron && typeof window.electronAPI.getNotes === 'function') {
        try {
          const fetchedNotes = await window.electronAPI.getNotes();
          setNotes(fetchedNotes);
          if (fetchedNotes.length > 0) {
            setActiveNoteId(fetchedNotes[0].id);
          }
        } catch (error) {
          console.error("Error fetching notes from Electron API:", error);
        }
      } else {
        // Provide mock data for browser environment
        console.warn("Electron API not found or getNotes is not a function. Using mock data.");
        const mockNotes = [
          { id: '1', title: 'Mock Note', content: 'This is a mock note for browser viewing.', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), tags: [] }
        ];
        setNotes(mockNotes);
        if (mockNotes.length > 0) {
          setActiveNoteId(mockNotes[0].id);
        }
      }
    };
    fetchNotes();
  }, [isElectron]);

  const saveNotesToBackend = useCallback((notesToSave) => {
    if (isElectron && typeof window.electronAPI.saveNotes === 'function') {
      try {
        window.electronAPI.saveNotes(notesToSave);
      } catch (error) {
        console.error("Error saving notes to Electron API:", error);
      }
    } else {
      console.log("Mock save (not persistent):", notesToSave);
    }
  }, [isElectron]);

  const updateNote = (updatedNote) => {
    const newNotes = notes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(newNotes);
    saveNotesToBackend(newNotes);
  };

  const createNewNote = () => {
    const newNote = {
      id: uuidv4(),
      title: "新しいノート",
      content: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: [],
    };
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
    setActiveNoteId(newNote.id);
    saveNotesToBackend(newNotes);
  };

  const activeNote = notes.find(note => note.id === activeNoteId);

  return {
    notes,
    activeNote,
    activeNoteId,
    setActiveNoteId,
    updateNote,
    createNewNote,
  };
};