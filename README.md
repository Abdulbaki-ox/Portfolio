# Abdulbaki Salawu — Portfolio

A personal portfolio site built with **React + Vite**, automatically deployed to **Azure Static Web Apps** via **GitHub Actions**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite 5 |
| Styling | Vanilla CSS (CSS Variables) |
| Hosting | Azure Static Web Apps |
| CI/CD | GitHub Actions |

---

## Local Development

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → opens at http://localhost:5173

# 4. Build for production
npm run build
# → output in /dist
```

---

## Deployment — Azure Static Web Apps + GitHub Actions

### Step 1 — Create the Azure Resource

1. Go to the [Azure Portal](https://portal.azure.com)
2. Search for **Static Web Apps** → click **Create**
3. Fill in:
   - **Subscription**: your subscription
   - **Resource Group**: create new → e.g. `rg-portfolio`
   - **Name**: `abdulbaki-portfolio`
   - **Plan type**: Free
   - **Region**: pick closest (e.g. West Europe)
   - **Source**: GitHub
4. Authenticate with GitHub and select your **repo** and **branch** (`main`)
5. **Build Details**:
   - Build Preset: `Vite`
   - App location: `/`
   - Output location: `dist`
6. Click **Review + Create** → **Create**

> Azure will automatically open a PR in your repo adding its own workflow file.  
> You can **close that PR** — this repo already has the workflow configured in `.github/workflows/azure-static-web-apps.yml`.

---

### Step 2 — Add the Deployment Token as a GitHub Secret

1. In the Azure Portal, open your Static Web App resource
2. Go to **Settings → Deployment tokens**
3. Copy the token
4. In your GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: paste the token
5. Click **Add secret**

---

### Step 3 — Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

The GitHub Actions workflow will trigger automatically and deploy your site.

---

## CI/CD Pipeline Overview

```
Push to main
    │
    ▼
GitHub Actions workflow triggered
    │
    ├─ actions/checkout@v4      — Clone repo
    ├─ actions/setup-node@v4    — Node 20 + npm cache
    ├─ npm ci                   — Install dependencies
    ├─ npm run build             — Vite production build → /dist
    └─ Azure/static-web-apps-deploy@v1 — Upload /dist to Azure
                │
                ▼
        Live at: https://<your-site>.azurestaticapps.net
```

Pull requests automatically get a **preview/staging environment** URL.  
When the PR is closed, the staging environment is torn down.

---

## Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml   ← CI/CD pipeline
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── SectionTitle.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Customisation

To update content, edit the data arrays inside each component:

| What to change | File |
|---|---|
| Hero roles / tagline | `src/components/Hero.jsx` |
| About stats | `src/components/About.jsx` |
| Work experience | `src/components/Experience.jsx` |
| Skills | `src/components/Skills.jsx` |
| Education & certs | `src/components/Education.jsx` |
| Contact details | `src/components/Contact.jsx` |
| Colour scheme | `src/index.css` (CSS variables at `:root`) |
