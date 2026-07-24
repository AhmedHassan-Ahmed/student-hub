# 🎓 Student Hub

Student Hub is a responsive academic productivity web application built to help students organize their study life in one place.

The project provides tools for managing tasks, study notes, academic resources, profile information, and a dashboard that summarizes stored student data.

This project was built collaboratively by our team using React, Vite, Tailwind CSS, React Router, and browser Local Storage.

---

## ✨ Features

### 🏠 Landing Page

The landing page introduces Student Hub and provides users with an overview of the platform and its main academic productivity features.

### 📊 Dashboard

The dashboard gives students a quick overview of their academic activity.

It uses data from other parts of the application, including tasks stored in `localStorage`, to provide useful information and summaries.

### ✅ Task Management

Students can:

- Create new tasks
- Add task titles and descriptions
- Set due dates
- Assign Low, Medium, or High priorities
- Mark tasks as completed
- Delete tasks
- Filter tasks by status
- Filter tasks by priority
- Filter tasks by due date
- View task completion progress
- Group tasks by date
- Display friendly date labels such as Today, Yesterday, and Tomorrow
- Export tasks to CSV
- Import tasks from CSV
- Store tasks locally in the browser

The task interface is fully responsive:

- Desktop → Table layout
- Tablet → Scrollable table
- Mobile → Task card layout

Task deletion also includes animations for a smoother user experience.

### 📝 Study Notes

Students can create and organize study notes.

Each note can contain:

- Title
- Content
- Tags
- Creation date

The Notes page supports:

- Creating notes
- Viewing full note content
- Deleting notes
- Multiple tags
- Animated note dialogs
- Animated note deletion
- Responsive note cards
- Local Storage persistence

### 📚 Resources

The Resources page provides a dedicated area for students to add and delete and organize useful academic resources.

### 👤 Profile

The Profile page provides an area for student information and profile-related data.

Profile information can also be used by other parts of the application where needed.

### 🌙 Light & Dark Themes

Student Hub supports both light and dark themes.

The theme system was developed collaboratively across the project to maintain consistent:

- Backgrounds
- Text colors
- Cards
- Navigation
- Forms
- Tables
- Dialogs
- Borders
- Buttons
- Hover states
- Responsive layouts

---

## 💾 Local Storage

Student Hub currently uses browser `localStorage` for persistent client-side data.

This allows tasks, notes, profile information, and other supported data to remain available after refreshing the page.

For example, task data is stored under:

```js
localStorage.getItem("Tasks")
```

The Dashboard can use this stored task information to display task-related statistics and summaries.

Because Local Storage belongs to the user's browser, the application currently does not require a backend or database for these features.

---

## 📱 Responsive Design

Student Hub was designed to work across different screen sizes.

The interface adapts for:

- Desktop computers
- Laptops
- Tablets
- Mobile devices

Components such as navigation, task tables, task cards, note cards, dialogs, forms, and page layouts use responsive Tailwind CSS utilities.

---

## 🛠️ Technologies

The project uses:

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Framer Motion
- React Icons
- Lucide React
- UUID
- Browser Local Storage
- Vercel

---

## 👥 Team & Contributions

Student Hub was developed collaboratively by:

### Ahmed Hassan

Main contributions:

- Tasks page
- Notes page
- Notes-related functionality
- Tasks page functionality

### Meram Amr


Main contributions:

- Resources page
- Profile page
- Profile-related functionality
- Academic resources page functionality

### Ghofran Mohamed

Main contributions:

- Landing page
- Dashboard page
- Sidebar and Dashboard interface
- Dashboard functionality and integration with application data

---

## 🤝 Team Collaboration

Although different team members focused on specific pages, Student Hub was a collaborative project.

We worked together on shared aspects of the application, including:

- Theme design
- Light and dark modes
- Colors
- UI consistency
- Responsive design
- Navigation
- Component integration
- Application structure
- Connecting data between pages
- Testing and improving the overall user experience

The Dashboard integrates information from other parts of the application, particularly task data stored in Local Storage, while the Profile system provides student-related information used within the application.

This cooperation helped ensure that individually developed pages work together as one consistent Student Hub experience.

---

## 🚀 Running the Project

Clone the repository:

```bash
git clone https://github.com/AhmedHassan-Ahmed/student-hub
```

Move into the project directory:

```bash
cd student-hub
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Or create a production build:

```bash
npm run build
```

---

## 🌐 Deployment

Student Hub is deployed using Vercel.

The project includes configuration for React Router routes so pages such as `/tasks`, `/notes`, `/dashboard`, `/resource`, and `/profile` can work correctly when accessed or refreshed directly in production.

---

## 📂 Main Pages

```text
/
├── Landing Page
├── Dashboard
├── Resources
├── Tasks
├── Notes
└── Profile
```

---

## ❤️ Acknowledgements

Special thanks to every member of the team for their work and cooperation throughout the development of Student Hub.

**Ahmed Hassan — Meram Amr — Ghofran Mohamed**

Each member contributed different parts of the application while also helping with shared design decisions, themes, colors, integration, and improvements.

Student Hub is the result of our combined work and collaboration.
