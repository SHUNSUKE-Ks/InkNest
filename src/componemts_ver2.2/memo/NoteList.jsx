import React from 'react';

const NoteList = ({ notes, activeNoteId, onSelectNote }) => {
  return (
    <div style={styles.noteList}>
        <div style={styles.noteListHeader}>
            <div style={styles.noteListTitle}>すべてのノート</div>
            <div style={styles.noteListSort}>更新日順 ▼</div>
        </div>
        <div style={styles.noteListItems}>
            {notes.map(note => (
                <div 
                  key={note.id}
                  style={{
                    ...styles.noteListItem, 
                    ...(note.id === activeNoteId && styles.noteListItemActive)
                  }}
                  onClick={() => onSelectNote(note.id)}
                >
                    <div style={styles.noteListItemTitle}>{note.title}</div>
                    <div style={styles.noteListItemExcerpt}>{note.content.substring(0, 100)}</div>
                    <div style={styles.noteListItemMeta}>{new Date(note.updatedAt).toLocaleString()}</div>
                </div>
            ))}
        </div>
    </div>
  );
};

const styles = {
    noteList: {
        width: '100%',
        background: '#fff',
        borderRight: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        height: '100%',
    },
    noteListHeader: {
        padding: 16,
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexShrink: 0,
    },
    noteListTitle: {
        fontSize: 18,
        fontWeight: 600,
        flex: 1,
    },
    noteListSort: {
        fontSize: 13,
        color: '#666',
        cursor: 'pointer',
    },
    noteListItems: {
        flex: 1,
        overflowY: 'auto',
    },
    noteListItem: {
        padding: 16,
        borderBottom: '1px solid #f0f0f0',
        cursor: 'pointer',
    },
    noteListItemActive: {
        background: '#e3f2fd',
    },
    noteListItemTitle: {
        fontSize: 15,
        fontWeight: 500,
        marginBottom: 4,
        color: '#333',
    },
    noteListItemExcerpt: {
        fontSize: 13,
        color: '#666',
        lineHeight: 1.4,
        marginBottom: 8,
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    },
    noteListItemMeta: {
        fontSize: 12,
        color: '#999',
    },
};

export default NoteList;