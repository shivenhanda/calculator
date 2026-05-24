# calculator

> A full-stack calculator application built with React, NodeJS and ExpressJS.

## 📝 Description

This project is a full-stack calculator application designed to provide a clear, web-based interface for performing mathematical operations. It implements a decoupled architecture to separate user interaction from the application server logic.

## ✨ Key Features

- **⚛️ React and Vite Frontend** — A web client interface built with React and bundled using Vite for quick local development.
- **🌐 Node.js and Express.js Backend** — A backend API structure built on Express.js to process incoming requests.
- **📂 Decoupled Codebase** — Organized into distinct frontend and backend directories to ensure clean separation of concerns.

## 🎯 Use Cases

- Deploying a template for a full-stack JavaScript application with separate frontend and backend directories.
- Utilizing a basic React and Express boilerplate to perform and serve calculator operations.

## 🛠️ Tech Stack

- 🚀 **Express.js**
-  **Node.js**
-  **Express.js**
- ⚡ **React Vite**

## ⚡ Quick Start

```bash

# 1. Clone the repository
git clone https://github.com/shivenhanda/calculator.git

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

## 📦 Key Dependencies

```
cors: ^2.8.5
dotenv: ^17.2.3
express: ^5.2.1
expressjs: ^1.0.1
nodemon: ^3.1.11
```

## 🚀 Available Scripts

- **test** — `npm run test`

## 📁 Project Structure

```
.
├── backend
│   ├── calculation.js
│   ├── calculationdegree.js
│   ├── package.json
│   └── script.js
└── frontend
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── CalculatorResult.jsx
    │   ├── assets
    │   │   └── favicon.png
    │   ├── index.css
    │   └── main.jsx
    └── vite.config.js
```

## 🛠️ Development Setup

### Node.js / JavaScript
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` (or `yarn` / `pnpm install` / `bun install`)
3. Start the dev server: see the **Quick Start** above

## 👥 Contributing

Contributions are welcome! Here's the standard flow:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/shivenhanda/calculator.git`
3. **Branch**: `git checkout -b feature/your-feature`
4. **Commit**: `git commit -m 'feat: add some feature'`
5. **Push**: `git push origin feature/your-feature`
6. **Open** a pull request
