# Google AI Studio – Frontend UI Clone

[![Netlify Status](https://api.netlify.com/api/v1/badges/529c08ba-53e3-42de-83b3-23668c39fcc5/deploy-status)](https://app.netlify.com/projects/ai-studio-saravanarajan/deploys)

This is a frontend-only clone of **Google AI Studio**, built using **React + Vite + Tailwind CSS**.

> 🔗 **Live Demo**: [https://ai-studio-saravanarajan.netlify.app/](https://ai-studio-saravanarajan.netlify.app/)

---

## 🚀 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

---

## 🧩 Features Implemented

- ✅ Reusable layout with shared sidebar, top nav, and right panel
- ✅ Dynamic right panel content based on page (Chat, Stream, etc.)
- ✅ Responsive and clean UI styled to match Google AI Studio
- ✅ Fully functional routing (Chat, Stream, etc.)
- ✅ Stream page as default landing page

---

## 🖼️ Screenshots

### 📍 Chat Page  
![Chat Page](public/screenshots/chat-page.png)

### 📍 Stream Page  
![Stream Page](public/screenshots/stream-page.png)

---

## 📂 Project Structure
src/
├── components/ # Shared UI components
├── context/ # Context API state (active section)
├── layouts/ # Shared AppLayout
├── pages/ # Route-based pages (Chat, Stream)
├── App.jsx # Route setup
└── main.jsx # Entry point
public/
└── screenshots/ # Screenshots used in README

---

## 🚀 Getting Started

```bash
npm install
npm run dev

npm run build
