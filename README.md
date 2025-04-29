# Personal Website

This repository contains the source code for my personal portfolio website, built using **Next.js** and **Tailwind CSS**.  

It showcases my background, technical skills, coding projects, and ways to connect with me.

The website features animated sections, a custom dark mode toggle, and a responsive layout optimized for modern browsers and devices.


### 👉 **[joshtn.com](https://joshtn.com/)**

## Features

- **Next.js 14** App Router structure
- **Tailwind CSS** custom styling with dark mode support
- **Dark mode** using React state and localStorage
- **Animated scroll transitions** using Framer Motion
- **Responsive navigation bar** with dynamic scroll styling
- **Web3Forms**-powered contact form with form validation and success handling
- Fully responsive design for mobile, tablet, and desktop

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS, Framer Motion
- **Form Handling:** Web3Forms API
- **Animations:** Framer Motion
- **Deployment:** Node.js server with Nginx reverse proxy and SSL
- **Hosting:** DigitalOcean Droplet (Ubuntu)

## Core Structure

| File | Description |
|:-----|:------------|
| `layout.js` | Sets global metadata, imports Google fonts (Outfit, Ovo), and configures base HTML body layout |
| `page.js` | Main home page logic; manages dark mode state and page composition |
| `assets.js` | Centralized asset management for images, icons, and reusable data like skills and tools |
| `Navbar.jsx` | Top navigation bar with scroll behavior, dark mode toggle, and responsive hamburger menu |
| `Header.jsx` | Hero section introducing my profile with animated entrance |
| `About.jsx` | Bio and technology/tool highlights, animated section transitions |
| `Projects.jsx` | Section to highlight software and machine learning projects |
| `Contact.jsx` | Contact form submission to Web3Forms, live user feedback during submission |
| `Footer.jsx` | Footer with branding, copyright, and social media |

## Contact

Feel free to reach out via [LinkedIn](https://www.linkedin.com/in/joshua-thomas-nelson/)

Or email me directly at [contact@joshtn.com](mailto:contact@joshtn.com)

## Credits

Design inspiration was drawn from the video [How To Make Portfolio Website Using Next JS | Build Modern Portfolio Site In React JS 2025](https://www.youtube.com/watch?v=Y2kGqbzvAn4) by **GreatStack**.
