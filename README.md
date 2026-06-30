readme_content = """# GPCE Institutional Portal

A high-performance, professional web portal built for government academic institutions. This project leverages a data-driven architecture to provide a consistent, secure, and accessible user experience with a "Prestige" aesthetic.

## 🚀 Key Features

* **Institutional Branding:** Custom Deep Charcoal (`#0f1822`) and Gold (`#dda536`) design system optimized for professional, trustworthy, government-style presentation.
* **Data-Driven Architecture:** Navigation links, faculty data, and college configuration are centralized in `data/mockData.js`, making site-wide updates instant.
* **Component-Based UI:** Features a library of reusable, production-ready components:
    * `PageHero`: Consistent header component for all sub-pages.
    * `FacultyCard`: Standardized, responsive staff profiles.
    * `Dropdown`: Dynamic navigation with hover-states and active-path detection.
    * `ScrollToTop`: Professional UX interaction for long pages.
* **Performance:** Built with Next.js 15+ and Tailwind CSS v4, utilizing `next/image` for optimized loading and preventing layout shifts.
* **Responsive:** Mobile-first approach with a custom sidebar for mobile navigation.

## 🛠 Tech Stack

| Tool | Purpose |
| :--- | :--- |
| **Next.js 15+** | React Framework for production |
| **Tailwind CSS** | Styling and responsive design system |
| **Lucide React** | Scalable, high-quality vector icons |
| **Node.js** | JavaScript runtime environment |

## 📂 Project Structure

```text
├── app/              # Next.js App Router (Pages & Layouts)
├── components/       # Reusable UI components
│   ├── global/       # Navbar, Footer, PageHero, Dropdown
│   ├── ui/           # FacultyCard, Buttons, etc.
├── data/             # Centralized Mock Data & Configuration
├── public/           # Static Assets (Images, Logos)
└── styles/           # Global Tailwind CSS configurations├── components/       # Reusable UI components
│   ├── global/       # Navbar, Footer, PageHero, Dropdown
│   ├── ui/           # FacultyCard, Buttons, etc.
├── data/             # Centralized Mock Data / Config
├── public/           # Assets (Images, Logos)
└── styles/           # Global Tailwind CSS configurations
🚀 Getting StartedClone the repository:Bashgit clone https://github.com/yourusername/gpce-portal.git
cd gpce-portal
Install dependencies:Bashnpm install
Run the development server:Bashnpm run dev
Open in Browser:Visit http://localhost:3000 to see your portal in action.⚙️ Customization GuideTo update the website content, you only need to modify one file: data/mockData.js.Navigation: Update the navLinks array to add/remove pages or dropdowns.Contact Info: Edit the collegeConfig object to update phone numbers, emails, and site metadata.Team: Add new staff members to the team array; the /faculty page will automatically detect and render them in the correct section.🏗 Maintenance NotesAdding New Pages: Create the file in app/, import the PageHero component, and add a link to the navLinks in mockData.js.Performance: All images use the Next.js Image component with fill and object-cover to prevent Layout Shift (CLS). Ensure all new assets are optimized before uploading.Styling: Brand colors are defined in tailwind.config.js. Please maintain the contrast ratios to ensure accessibility compliance.📝 LicenseThis project is built for [College Name]. Unauthorized distribution is prohibited.Designed & Developed by [Your Name]Does this README cover everything you need, or would you like to add a section about "Deployment" specifically for Vercel?