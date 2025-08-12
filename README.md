# Tab Manager – VS Code Extension

## Overview
**Tab Manager** is a VS Code extension that makes managing your open files effortless. It introduces **tab groups** that can be tied to **specific Git branches** or used **project-wide**, helping you switch contexts without losing track of your work.

Whether you’re jumping between feature branches or organizing project modules, Tab Manager keeps your workspace tidy and instantly restorable.

---

## Features

### Branch-Specific Tab Groups
- Create and manage tab groups tied to the current Git branch.
- Automatically switch groups when changing branches.
- Temporary session-based or persistent storage options.

### Project-Wide Tab Groups
- Organize files into named tab groups that are always available for the project.
- Access them in a dedicated sidebar view.

### Cross-Group Files
- Files can belong to multiple tab groups.

### Promotion & Conversion
- Save branch-specific groups as permanent project-wide groups.

---

## Getting Started

### Installation
1. Open VS Code.
2. Go to **Extensions** (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3. Search for `"Tab Manager"`.
4. Click **Install**.

### Basic Usage
1. Open the files you want in a group.
2. Use the **Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`) → **Tab Manager: Create Group**.
3. Choose **Branch-Specific** or **Project-Wide**.
4. Access groups from:
   - **Above-tab bar UI** (branch groups).
   - **Left sidebar view** (project-wide groups).

---

## Commands

| Command | Description |
| --- | --- |
| `Tab Manager: Create Group` | Create a new tab group. |
| `Tab Manager: Add Current File to Group` | Add the active file to a group. |
| `Tab Manager: Open Group` | Open all files in a group. |
| `Tab Manager: Remove File from Group` | Remove the active file from a group. |
| `Tab Manager: Promote Branch Group` | Save a branch-specific group as a project-wide group. |

---

## Feature Roadmap

### Phase 1 – MVP ✅
- [ ] Branch-specific groups (in-memory only)
- [ ] Project-wide groups (workspace storage)
- [ ] Add/remove files from groups
- [ ] Open group (opens all files in it)
- [ ] Promote branch group → project-wide group
- [ ] Basic UI (tab bar + sidebar)
- [ ] Command palette commands for core actions

### Phase 2 – Persistence & UX
- [ ] Persist branch-specific groups across sessions
- [ ] Auto-load branch group on branch switch
- [ ] Multi-select add to groups
- [ ] Drag-and-drop ordering
- [ ] Enhanced sidebar UI

### Phase 3 – Advanced Features
- [ ] Auto-save group changes
- [ ] Cloud sync for project-wide groups
- [ ] Filtering/sorting
- [ ] Keyboard shortcuts for groups
- [ ] Export/import group configs

### Phase 4 – Polish
- [ ] Recent files for each group
- [ ] Custom group icons/colors
- [ ] UI animations & performance tuning

---

## About
Hi my name is Chloe! Working as a backend software developer I noticed some functionality that would help my start-up-style work place run better. Jumping between branches frequently and working all the way through api calls had me thinking about a better organization for debugging and working in my project. With such a large code base it is easy to spend more than a couple minutes looking for the right file that you want. It was for these reasons and the hope for some professional development that drove me to create Tab-Manager. Hope it helps!

---
## License
MIT License.
