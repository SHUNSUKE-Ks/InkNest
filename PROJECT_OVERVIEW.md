# Project Overview: InkNest

This document outlines the current state of the InkNest project, including its folder structure, implemented features, and planned future enhancements.

## 1. Current Folder Structure

```
C:/Users/enjoy/React_AppLists/InkNest/
├───.env
├───.gitignore
├───CHANGELOG.md
├───index.html
├───package-lock.json
├───package.json
├───vite.config.js
├───.git/...
├───AppDocs/
│   ├───Layout.html
│   ├───LineClone.yaml
│   └───README.md
├───public/
│   ├───icons/
│   │   ├───InkNest_Logo_192x192.png
│   │   └───InkNest_Logo_512x512.png
│   └───apple-touch-icon.png
└───src/
    ├───App.jsx
    ├───firebase.js
    ├───main.jsx
    ├───components/
    │   ├───ChatManager.jsx
    │   ├───Auth/
    │   │   └───LoginScreen.jsx
    │   ├───Chat/
    │   │   ├───ChatScreen.jsx
    │   │   ├───MessageInput.jsx
    │   │   ├───UserSelectionBar.jsx
    │   │   └───MessageDisplay/
    │   │       └───MessageList.jsx
    │   ├───ChatSelect/
    │   │   ├───ChatSelectScreen.jsx
    │   │   ├───CreateRoomButton.jsx
    │   │   ├───RoomItem.jsx
    │   │   └───RoomList.jsx
    │   ├───NovelTalkSystem/
    │   │   ├───NovelTalk.css
    │   │   └───NovelTalkDisplay.jsx
    │   └───UserManagement/
    │       ├───AddUserForm.jsx
    │       └───UserList.jsx
    ├───data/
    │   ├───constants.js
    │   └───mockData.json
    ├───MenuDB/
    │   └───08_Setting/
    │       ├───KeyMap.css
    │       └───KeyMap.jsx
    ├───services/
    │   ├───authService.js
    │   ├───chatService.js
    │   └───userService.js
    ├───styles/
    │   ├───App.css
    │   ├───ChatScreen.css
    │   ├───ChatSelectScreen.css
    │   ├───LoginScreen.css
    │   ├───MessageInput.css
    │   ├───MessageList.css
    │   ├───RoomItem.css
    │   ├───RoomList.css
    │   ├───UserManagement.css
    │   └───UserSelectionBar.css
    └───utils/
        ├───dateUtils.js
        └───messageUtils.js
```

## 2. Implemented Features

The following features have been implemented:

*   **Project Renaming:** `package.json` name changed from `line-clone` to `InkNest`.
*   **PWA Integration:** Configured Progressive Web App capabilities using `vite-plugin-pwa`, including manifest and icon setup.
*   **NovelTalkDisplay Component:**
    *   Implemented a game backlog-style chat display UI.
    *   Messages are displayed in a 20 characters x 3 lines block.
    *   Auto-scrolls to the latest message upon new message arrival.
*   **Message Editing:**
    *   One-click editing of posted messages.
    *   `updateMessage` function added to `chatService.js`.
*   **Emoji Selection:**
    *   Clicking an avatar icon displays an emoji picker, allowing emojis to be added to messages.
*   **Message Character Limit:**
    *   Textarea for editing messages is limited to 60 characters (20 chars x 3 lines).
*   **Multi-select and Bulk Delete:**
    *   Long-pressing a message activates a delete mode.
    *   Checkboxes appear next to all messages for multi-selection.
    *   Clicking the trash can icon performs bulk deletion of selected messages.
    *   `deleteMessage` function added to `chatService.js`.
    *   Delete mode is exited by clicking outside the message area (excluding delete icon/checkbox).
*   **Add Textbox Button:**
    *   A `+` button is available below the editing textarea to add a new empty message (placeholder functionality for now).
*   **Narration Blank Icon:**
    *   A dummy "Narration" user with a blank icon (with a black border) is added to the user list for narrative purposes.
*   **KeyMap Settings (Basic UI):**
    *   A keyboard icon in the chat header toggles the KeyMap settings screen.
    *   Basic UI for displaying key mappings (action, main key, alt key) in a table format.
    *   Input fields for editing key mappings.

## 3. Features to be Implemented

The following features are planned for future implementation:

*   **KeyMap Enhancements:**
    *   **KeyMap Sheet Management:** Implement functionality to manage multiple keymap presets (e.g., save, load, switch between different keymap configurations).
    *   **Screen-Specific Shortcut Settings:** Allow key mappings to be defined and applied based on the current screen or context within the application.
    *   **KeyMap Application Logic:** Develop the core logic to actually apply and respond to the defined key shortcuts across the application. This involves setting up global key event listeners and dispatching actions based on the configured keymaps.
*   **Text Input State (Keyboard Behavior - Deferred):**
    *   Address the issue where the virtual keyboard on Android devices closes when interacting with icons while typing. This is a complex UI/UX challenge that may require significant architectural changes. (Currently deferred due to complexity).

## 4. Implementation Steps for Future Features

Here's a proposed plan for implementing the remaining KeyMap enhancements:

1.  **KeyMap Data Persistence:**
    *   Decide on a storage mechanism for keymap presets (e.g., Firebase Firestore, LocalStorage).
    *   Modify `KeyMap.jsx` to load and save `editableKeyMaps` from/to this storage.
    *   Implement functions in `services/keyMapService.js` (new file) for data operations.
2.  **KeyMap Preset Management UI:**
    *   Add UI elements to `KeyMap.jsx` for creating new presets, selecting existing ones, renaming, and deleting.
    *   Implement state management within `KeyMap.jsx` to handle active presets.
3.  **Global Key Event Listener:**
    *   In `App.jsx` or a higher-level component, set up a global keyboard event listener (`keydown`).
    *   This listener will check the pressed keys against the active keymap.
4.  **Contextual KeyMap Application:**
    *   Implement a mechanism to determine the current "screen context" (e.g., "デフォルト", "テキスト入力中").
    *   Pass this context down to the global key event listener or a dedicated keymap manager.
    *   The keymap manager will then select the appropriate keymap preset for the current context.
5.  **Action Dispatching:**
    *   When a key combination matches a defined shortcut, dispatch a corresponding action.
    *   For example, if "Ctrl+Enter" is mapped to "投稿", the keymap manager will trigger the `sendMessage` function. This will require careful consideration of how actions are exposed and called from the keymap manager.
6.  **Refine "Add Textbox" Functionality:**
    *   Integrate the `handleAddTextBox` function in `NovelTalkDisplay.jsx` with the actual message insertion logic, ensuring correct ordering if messages are inserted mid-conversation.

---
