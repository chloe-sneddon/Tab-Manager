# Tab Manager – Requirements Document

## Overview
Tab Manager is a VS Code extension that introduces **tab group functionality** tied to **Git branches** and **project-wide workspaces**. It improves developer productivity by allowing users to create, save, and manage sets of open files as named tab groups, with branch-specific and project-wide scopes.

---

## 1. Core Requirements

### Must-Haves (MVP)
- **Branch-Specific Tab Groups**
  - Automatically detect the active Git branch.
  - Allow creating and naming tab groups tied to the current branch.
  - Display branch-specific tab groups in an **above-tab bar UI**.
  - Store tab group configuration in memory (session-based).

- **Project-Wide Tab Groups**
  - Create and name tab groups that are not tied to a branch.
  - Display project-wide tab groups in a **left sidebar view**.
  - Persist project-wide groups to disk (workspace storage).

- **Basic Tab Group Operations**
  - Add currently open files to an existing tab group.
  - Open a tab group (opens all files in that group).
  - Remove a file from a tab group.
  - Files can belong to multiple tab groups.

- **Save/Promote Branch Groups**
  - Option to save a branch-specific tab group to the project-wide list.

- **UI Integration**
  - Minimal UI components in the tab bar and activity bar.
  - Context menu commands for adding/removing files to groups.

---

### Should-Haves
- **Persistent Branch Groups**
  - Save branch-specific tab groups so they persist across sessions.
- **Drag-and-Drop UI**
  - Rearrange files inside a tab group via drag-and-drop.
- **Multi-Select Add**
  - Add multiple open files to a group at once.
- **Quick Access Command Palette Support**
  - Create/open/delete groups from the command palette.
- **Branch Switch Auto-Load**
  - Automatically open the branch-specific group when switching branches.

---

### Nice-to-Haves
- **Cloud/Sync Support**
  - Sync project-wide tab groups across devices via Settings Sync or custom cloud storage.
- **Auto-Save Group Changes**
  - Detect when a file is opened/closed and auto-update the group.
- **Recent Files View**
  - Quick access to recently closed files in a group.
- **Filter/Sort Tab Groups**
  - Sort alphabetically, by last used, or custom order.
- **Keyboard Shortcuts**
  - Assign hotkeys to quickly open/close tab groups.
- **Export/Import Groups**
  - Share tab group setups between projects.

---

## 2. Phased Release Plan

### Phase 1 – MVP (Ship Fast)
- Branch-specific groups (in-memory only)
- Project-wide groups (workspace storage)
- Add/remove files from groups
- Open group (opens all files in it)
- Promote branch group → project-wide group
- Basic UI (tab bar + sidebar)
- Command palette commands for core actions

**Goal:** Validate the concept and basic UX with minimal persistence.

---

### Phase 2 – Persistence & UX Improvements
- Persist branch-specific groups across sessions
- Branch switch → auto-load branch group
- Multi-select add to groups
- Drag-and-drop ordering inside groups
- Better sidebar UI for managing groups

**Goal:** Improve usability and stability for daily use.

---

### Phase 3 – Advanced Features
- Auto-save group changes in real-time
- Cloud sync for project-wide groups
- Filtering/sorting options
- Keyboard shortcuts for groups
- Export/import group configurations

**Goal:** Make the extension powerful for power-users and collaborative setups.

---

### Phase 4 – Quality of Life & Polish
- Recent files for each group
- Enhanced UI styling & animations
- Configurable group icons/colors
- Performance optimization for large projects

**Goal:** Refine the product to feel polished, responsive, and customizable.
