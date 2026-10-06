# Today (daily to-do app): Learning Roadmap

You write the code. I explain, guide, and review. Each step is tiny and ends with something you can **see working**.

**How we'll work on every step:**
1. I tell you *what* we're doing and *why*.
2. You type the code yourself (no copy-paste where possible, typing is how it sticks).
3. You run it and check the "Done when" line.
4. I review what you wrote and we fix anything.
5. You tick the box here.

---

## What the design tells us we're building

From `design/App.dc.html`:

- **Home screen**: greeting + today's date, overall progress bar, "add task" form, and 3 columns (Personal / Work / School) showing tasks.
- **List screen**: one category in detail, with a schedule sorted by time, a "Completed" section, "Clear completed", and a **Notes** box.
- **Slide-out menu**: Home + the 3 lists, each with a "tasks left" badge.
- **Task actions**: add (title, category, optional time), tick/untick, delete, hide completed.

**Data we'll need to store** (this becomes our database later):

| Thing | Fields |
|---|---|
| Task | id, category, title, time (optional), done |
| Category | id, name, color (fixed: personal / work / school) |
| Notes | one text note per category |

**Decisions we'll make later:** 3 fixed categories (as designed) versus user-created ones, and whether tasks belong to a specific *day*. The design has no dates, so we start simple.

---

## The strategy

**Frontend first with fake data, then backend, then connect them.**
Reason: the design is already done, so you get visible progress fast. You learn React and TypeScript with instant feedback. When we build the backend, you'll already know exactly what data the screen needs.

```
Phase 0  Set up your tools
Phase 1  React + TypeScript basics, project setup
Phase 2  Build the UI as static pieces
Phase 3  Make it interactive (state)
Phase 4  Second screen + navigation + menu
Phase 5  Spring Boot basics (Java)
Phase 6  Database + the real API
Phase 7  Connect frontend to backend
Phase 8  Polish, tests, next steps
```

---

## Phase 0: Set up your tools

- [x] 0.1 Check what's installed (`node -v`, `java -version`, `git --version`). *Learn: what the terminal is and how to ask a tool for its version.*
- [x] 0.2 **Upgrade Node.js** to the current LTS (yours is v6, far too old). *Learn: what Node is and why a browser app needs it for tooling.*
- [x] 0.3 JDK 17 is already installed, and that's all Spring Boot 3 needs. *Learn: JDK vs JRE vs JVM.*
- [x] 0.4 Install **VS Code** (for React) and **IntelliJ IDEA Community** (for Java).
- [ ] 0.5 Install **Git** and make your first commit of this folder. *Learn: why version control exists, and what a commit is.*
- [ ] 0.6 Install **Postman** (or use `curl`) for testing the API later.

**Done when:** all three version commands print a version and `git log` shows one commit.

---

## Phase 1: React + TypeScript setup

- [ ] 1.1 Learn the picture: browser ↔ React app ↔ API ↔ database. *(a short explanation from me, no code)*
- [ ] 1.2 Create the project with **Vite** (`react-ts` template) in a `frontend/` folder.
- [ ] 1.3 Tour of the generated files: `package.json`, `index.html`, `main.tsx`, `App.tsx`. What does each do?
- [ ] 1.4 Run the dev server and see the page in the browser.
- [ ] 1.5 Delete the demo content so we have a clean `App.tsx`.
- [ ] 1.6 Mini TypeScript lesson: `string`, `number`, `boolean`, arrays, `type`. We write a few lines in a scratch file.
- [ ] 1.7 Mini React lesson: a component is just a function that returns UI (JSX). Write a `<Hello />` component.
- [ ] 1.8 Props: pass data into a component.

**Done when:** you see your own `<Hello name="Jaden" />` on the page.

---

## Phase 2: Build the UI (static, no clicking yet)

Build **small components**, each from a piece of the design. Hard-code the data first.

- [ ] 2.1 Define the `Task` and `Category` types in `types.ts`. *Learn: types describe the shape of your data.*
- [ ] 2.2 Create fake `tasks` and `categories` arrays (copy the design's sample data).
- [ ] 2.3 Add global styles: the fonts (Bricolage Grotesque + Figtree) and the colors from the design. *Learn: CSS variables.*
- [ ] 2.4 `Header` component: the "Today" bar.
- [ ] 2.5 `Greeting` component: "Good morning, Jaden" + date. *Learn: `new Date()` and conditionals.*
- [ ] 2.6 `TaskItem` component: one row (checkbox look, title, time).
- [ ] 2.7 Render a **list** of `TaskItem`s with `.map()`. *Learn: why every list item needs a `key`.*
- [ ] 2.8 `CategoryColumn` component: title, "N left" pill, thin progress bar, list of tasks.
- [ ] 2.9 Show the 3 columns side by side (CSS grid). *Learn: responsive layout.*
- [ ] 2.10 `ProgressSummary`: "X of Y done" + the segmented bar. *Learn: derived values (calculating from data, not storing).*
- [ ] 2.11 `AddTaskForm`: input, category pills, time input, Add button (looks only).

**Done when:** the Home screen looks like the design, with fake data.

---

## Phase 3: Make it interactive

- [ ] 3.1 Learn `useState`: React's memory. Make a counter button first.
- [ ] 3.2 Move `tasks` into state in `App.tsx`.
- [ ] 3.3 **Toggle done**: click the checkbox and the task updates. *Learn: never edit state directly, always make a new copy.*
- [ ] 3.4 **Delete a task**.
- [ ] 3.5 Make the progress numbers and bars update automatically.
- [ ] 3.6 **Controlled inputs**: the form's text box and time box are driven by state.
- [ ] 3.7 **Add a task**: submit the form and the task appears. Ignore empty titles.
- [ ] 3.8 The category pills choose which column the new task lands in.
- [ ] 3.9 "Hide completed" checkbox.
- [ ] 3.10 Sort tasks: undone first, then by time. Tasks with no time go last.
- [ ] 3.11 Empty states ("Nothing here yet…").
- [ ] 3.12 Refactor: pass functions down as props (`onToggle`, `onDelete`). *Learn: "lifting state up".*

**Done when:** Home is fully usable. Refreshing the page resets it, and that's expected for now.

---

## Phase 4: Second screen, menu, navigation

- [ ] 4.1 Add a `view` state (`'home'` or a category id). Navigate by switching views. *(Simple version first.)*
- [ ] 4.2 "Open" button on each column → goes to that list's screen.
- [ ] 4.3 Build the `ListPage`: title, summary line, progress bar, form (no category pills here).
- [ ] 4.4 "Schedule" section with the time column on the left.
- [ ] 4.5 "Completed (N)" collapsible section + "Clear completed".
- [ ] 4.6 Notes box: one note per category, kept in state.
- [ ] 4.7 Slide-out `Menu`: open/close, overlay, "tasks left" badges.
- [ ] 4.8 Show the current page name in the header ("breadcrumb").
- [ ] 4.9 **Upgrade to React Router** so each page has a real URL (`/`, `/list/work`). *Learn: why URLs matter (back button, bookmarks).*
- [ ] 4.10 Folder cleanup: `components/`, `pages/`, `types/`.

**Done when:** the whole design works in the browser with in-memory data.

---

## Phase 5: Spring Boot basics

- [ ] 5.1 Learn the picture: what a **REST API** is (URLs + GET/POST/PUT/DELETE + JSON).
- [ ] 5.2 Generate a project at **start.spring.io** (Maven, Java 17, Spring Web). Put it in `backend/`.
- [ ] 5.3 Tour of the files: `pom.xml`, the `@SpringBootApplication` class, `application.properties`.
- [ ] 5.4 Run it. See it start on port 8080.
- [ ] 5.5 Your first endpoint: `GET /api/hello` returns text. Test in the browser.
- [ ] 5.6 Return JSON: create a small `Task` Java class and return one from an endpoint. *Learn: classes, fields, getters. Java's version of the TypeScript `type`.*
- [ ] 5.7 Return a **list** of fake tasks from `GET /api/tasks`.
- [ ] 5.8 Learn the layers: **Controller → Service → Repository**. What each one is for.
- [ ] 5.9 Move the logic into a `TaskService`. *Learn: dependency injection, in plain words.*

**Done when:** `http://localhost:8080/api/tasks` shows JSON in your browser.

---

## Phase 6: Database + the real API

- [ ] 6.1 Learn what a database is, what a table is, and what SQL does. A 10-minute intro.
- [ ] 6.2 Add **Spring Data JPA + H2** (in-memory DB, zero install). *Learn: why we start with H2.*
- [ ] 6.3 Turn `Task` into an **`@Entity`**. See the table get created.
- [ ] 6.4 Create `TaskRepository`. *Learn: Spring writes the SQL for you.*
- [ ] 6.5 `GET /api/tasks`: read from the database.
- [ ] 6.6 `POST /api/tasks`: create a task. Test with Postman.
- [ ] 6.7 `PUT /api/tasks/{id}`: update (toggle done).
- [ ] 6.8 `DELETE /api/tasks/{id}`.
- [ ] 6.9 `DELETE /api/lists/{cat}/completed`: "Clear completed".
- [ ] 6.10 Notes: `GET` and `PUT /api/notes/{category}`.
- [ ] 6.11 **DTOs and validation**: don't accept an empty title. Return proper error codes (400, 404). *Learn: never trust incoming data.*
- [ ] 6.12 Seed the database with the design's sample tasks on startup.
- [ ] 6.13 **CORS**: allow the React app to call this API. *Learn: what the browser is protecting you from.*
- [ ] 6.14 Swap H2 for **PostgreSQL**, so data survives restarts.

**Done when:** you can create, read, update, and delete everything from Postman, and data survives a restart.

---

## Phase 7: Connect frontend ↔ backend

- [ ] 7.1 Learn `fetch` and `async/await` using one simple request.
- [ ] 7.2 `useEffect`: load tasks from the API when the page opens.
- [ ] 7.3 Create an `api.ts` file, so all backend calls live in one place.
- [ ] 7.4 Show **loading** and **error** states.
- [ ] 7.5 Wire up **add**, **toggle**, **delete**, **clear completed**.
- [ ] 7.6 Wire up **notes** (save after the user stops typing, "debounce").
- [ ] 7.7 Remove the fake data from the frontend.
- [ ] 7.8 Optimistic updates: the UI reacts instantly and rolls back on failure. *(stretch)*

**Done when:** you add a task, refresh the browser, and it's still there.

---

## Phase 8: Polish and level up

- [ ] 8.1 Accessibility check (keyboard use, labels, focus). The design is already good here, so we keep it that way.
- [ ] 8.2 Write a few **frontend tests** (Vitest + Testing Library).
- [ ] 8.3 Write a few **backend tests** (JUnit + MockMvc).
- [ ] 8.4 Environment config (API URL, DB password) via env variables.
- [ ] 8.5 A proper `README.md` for your own project.
- [ ] 8.6 Push to **GitHub**.
- [ ] 8.7 *(stretch)* Dates: tasks for specific days.
- [ ] 8.8 *(stretch)* User accounts and login (Spring Security).
- [ ] 8.9 *(stretch)* Deploy it.

---

## Final folder structure (where we're headed)

```
daily-todo-app/
├── design/          # the HTML mockups (reference only)
├── frontend/        # React + TypeScript (Vite)
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── api.ts
│       └── types.ts
├── backend/         # Spring Boot (Java)
│   └── src/main/java/.../
│       ├── controller/
│       ├── service/
│       ├── repository/
│       └── model/
└── ROADMAP.md
```

---

## Rules of the road

- **If a step feels too big, tell me and we split it further.**
- **Ask "why?" as often as you like.** That's the point of this.
- **Errors are normal.** Reading an error message is a skill we'll practice on purpose.
- **Commit to Git after every working step.** It's your save button.
