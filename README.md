# Ekta Maurya — Full Stack Developer Portfolio

A modern, high-performance personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**, designed for **Ekta Maurya** (Full Stack / MERN Developer).

---

## 🌟 Key Features

- **Dark-Mode Aesthetic**: Refined deep slate background (`#090d16`), cyan and indigo gradients, glassmorphism cards.
- **Hero Section**: Dynamic availability indicator, clear value proposition, and quick action buttons.
- **About Me**: Professional summary, key strengths, and quick-fact cards.
- **Interactive Skills Matrix**: Categorized tab filtering (Frontend, Backend, Databases, Tools, Architecture) with skill meters.
- **Dual Timeline**: Work experience (QSpiders Trainee) & Academic journey (MCA @ PSIT Kanpur & B.Sc. @ Microtek).
- **Featured Projects**:
  - *MERN Task Management App* (Full CRUD, REST APIs, MongoDB, Express, React, Node)
  - *Food Delivery System* (Dynamic menu rendering, responsive mobile-first architecture)
- **Interactive Contact Section**: Direct 1-click copy for email (`mauryae440@gmail.com`) and phone (`+91-9305776992`), along with a message form.
- **Printable Resume Modal**: Built-in resume viewer with print & save to PDF functionality.
- **Vercel Optimized**: Pre-configured `vercel.json` with client-side SPA routing and production asset caching.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide React
- **Configuration**: PostCSS, Autoprefixer, Vercel SPA Config

---

## 🚀 How to Run Locally

```bash
# Navigate to the project
cd ekta-portfolio

# Install dependencies (already installed)
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🌐 How to Deploy to Vercel

### Method 1: Deploy via GitHub (Recommended — Automatic CI/CD)

1. Create a new repository on your GitHub account ([github.com/new](https://github.com/new)) named **`portfolio`** (or `ekta-portfolio`).
2. Run the following commands in this directory:
   ```bash
   git remote add origin https://github.com/ekta9032/portfolio.git
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
4. Click **"Add New..."** -> **"Project"**.
5. Select the **`portfolio`** repository.
6. Vercel will automatically detect **Vite** framework settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
7. Click **"Deploy"**. Your portfolio will be live with an SSL certificate and free domain (e.g., `https://ekta-portfolio.vercel.app`)!

---

### Method 2: Deploy directly from Terminal using Vercel CLI

You can also deploy directly without GitHub using `npx vercel`:

```bash
npx vercel
```
- When prompted:
  - `Set up and deploy?`: `y`
  - `Which scope?`: Select your Vercel account
  - `Link to existing project?`: `n`
  - `Project name`: `ekta-portfolio`
  - `In which directory is your code located?`: `./`
  - `Want to modify these settings?`: `n`

To deploy directly to production:
```bash
npx vercel --prod
```
