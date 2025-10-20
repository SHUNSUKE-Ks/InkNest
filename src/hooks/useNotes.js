import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState(null);

  const isElectron = !!window.electronAPI;

  useEffect(() => {
    const fetchNotes = async () => {
      if (isElectron && typeof window.electronAPI.getNotes === 'function') {
        // Electron implementation
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
        // localStorage implementation for browser/PWA
        try {
          const savedNotes = localStorage.getItem('inknest_notes');
          if (savedNotes) {
            const parsedNotes = JSON.parse(savedNotes);
            setNotes(parsedNotes);
            if (parsedNotes.length > 0) {
              setActiveNoteId(parsedNotes[0].id);
            }
          }
        } catch (error) {
          console.error("Failed to load or parse notes from localStorage:", error);
        }
      }
    };
    fetchNotes();
  }, [isElectron]);

  const saveNotesToBackend = useCallback((notesToSave) => {
    if (isElectron && typeof window.electronAPI.saveNotes === 'function') {
      // Electron implementation
      try {
        window.electronAPI.saveNotes(notesToSave);
      } catch (error) {
        console.error("Error saving notes to Electron API:", error);
      }
    } else {
      // localStorage implementation for browser/PWA
      try {
        localStorage.setItem('inknest_notes', JSON.stringify(notesToSave));
      } catch (error) {
        console.error("Failed to save notes to localStorage:", error);
      }
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