import React from 'react';

const MemoSidebar = ({ sidebarState }) => {
  return (
    <div style={{...styles.sidebar, ...(sidebarState === 'collapsed' && styles.sidebarCollapsed)}}>
        <div style={{...styles.sidebarItem, ...styles.sidebarItemActive}}>
            <svg style={styles.sidebarIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            <span style={{...styles.sidebarLabel, ...(sidebarState === 'collapsed' && styles.sidebarLabelCollapsed)}}>すべてのノート</span>
        </div>
        {/* Other sidebar items can be added here */}
    </div>
  );
};

const styles = {
    sidebar: {
        width: '100%', // Width is controlled by parent
        background: '#fafafa',
        borderRight: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 180ms cubic-bezier(.22, .9, .24, 1)',
        position: 'relative',
        zIndex: 50,
    },
    sidebarCollapsed: {
        // Style for collapsed state if needed, though width is main driver
    },
    sidebarItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        gap: '12px',
        cursor: 'pointer',
        color: '#666',
        fontSize: 14,
    },
    sidebarItemActive: {
        background: '#e3f2fd',
        color: '#1976d2',
    },
    sidebarIcon: {
        width: 20,
        height: 20,
        flexShrink: 0,
    },
    sidebarLabel: {
        opacity: 1,
        transition: 'opacity 180ms',
    },
    sidebarLabelCollapsed: {
        opacity: 0,
        pointerEvents: 'none',
    },
};

export default MemoSidebar;