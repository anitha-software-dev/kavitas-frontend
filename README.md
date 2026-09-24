# Kavita's Beauty Bay — Frontend

A modern, responsive, and luxury-themed web application for **Kavita's Beauty Bay**, a premier beauty salon operating across Swansea and Port Talbot, South Wales. Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**, the application showcases salon services, transparent pricing, client transformations, verified City & Guilds credentials, and direct multi-channel booking via WhatsApp and phone.

---

## 🌟 Features

- **Luxury Hero & Visual Branding**: Immersive dark blue/cyan aesthetic with floating micro-particles, dynamic badges, responsive call-to-actions, and ambient glow effects.
- **Interactive Service Showcase**: Highlighting signature offerings (Eyebrows, Lashes, Facials, Nails, Waxing, Tinting, and the authentic Japanese Head Spa) with starting prices, service tags, and instant booking buttons.
- **Transparent Pricing Menu**: Tabbed navigation on desktop and accordion view on mobile covering 8 treatment categories with quick booking links and gift voucher enquiry.
- **Loyalty Rewards Program**: Interactive 3D showcase of the salon's physical loyalty rewards card, membership benefits, and a 10-stamp visual milestone tracker.
- **Visual Transformation Gallery**: High-resolution gallery displaying salon facilities, treatment results, nail art, and an embedded parlour video with interactive lightbox modal support.
- **Client Testimonials**: Automated and interactive client feedback carousel with star ratings, client quotes, and manual navigation.
- **Founder Story & Verified Credentials**: Detailed background of founder Kavita Rani (10+ years experience, 2,500+ happy clients), operating hours, and an interactive zoomable view of her official City & Guilds Level 2 Beauty Therapy qualification.
- **Multi-Branch Location Switcher**: Interactive branch switcher with dynamic Google Maps iframe embeds for:
  - **High Street Arcade**, Swansea SA1 1LE
  - **Quadrant Gate**, Swansea SA1 3QE
  - **Aberafan Shopping Centre**, Port Talbot SA13 1PB (Walk-ins welcome)
- **Direct Multi-Channel Contact & Booking**:
  - Direct WhatsApp click-to-chat integration (`wa.me`)
  - Direct phone calling (`tel:`)
  - Floating WhatsApp quick-action button with ping animation
  - Interactive contact form with floating input labels and client-side confirmation feedback
- **Customer Alerts**: Timed promotional alert modal notifying customers of upcoming price adjustments and new services.
- **Responsive & Accessible Design**: Mobile-first architecture, smooth scroll progress indicator, custom cursor interaction, and cross-device responsiveness.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Core Framework** | React 19 (`react`, `react-dom`) |
| **Build Tool & Bundler** | Vite 8 |
| **Styling & Design** | Tailwind CSS v4 (`@tailwindcss/vite`), Custom CSS Variables, Glassmorphism |
| **Animations & Transitions** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Routing** | React Router DOM v7 (`BrowserRouter`) |
| **Code Quality** | ESLint 10 with React Hooks and React Refresh plugins |

---

## 📁 Project Structure

```text
Kavitas-Frontend/
├── public/
│   ├── assets/
│   │   └── images/              # Optimized salon photography, logos & media assets
│   ├── favicon.svg              # Brand favicon
│   └── icons.svg                # SVG icons
├── src/
│   ├── components/
│   │   ├── Cursor.jsx           # Custom interactive cursor & follower
│   │   ├── FloatingSocials.jsx  # Floating social media links
│   │   ├── Footer.jsx           # Global multi-column footer
│   │   ├── Navbar.jsx           # Responsive sticky navigation bar
│   │   ├── Popup.jsx            # Promotional price alert modal
│   │   ├── ScrollProgress.jsx   # Top-of-page scroll indicator
│   │   └── WhatsAppButton.jsx   # Sticky bottom-right WhatsApp quick action
│   ├── data/
│   │   └── services.js          # Centralized data for services, pricing, locations & reviews
│   ├── sections/
│   │   ├── About.jsx            # Founder story, statistics & City & Guilds certificate
│   │   ├── BookingCTA.jsx       # Direct contact & scheduling banner
│   │   ├── Contact.jsx          # Contact form, branch selector & Google Maps
│   │   ├── Gallery.jsx          # Salon portfolio with image/video lightbox
│   │   ├── Hero.jsx             # Hero section with animated particles & CTAs
│   │   ├── LoyaltyCard.jsx      # Loyalty program showcase & stamp tracker
│   │   ├── Pricing.jsx          # Tabbed & accordion treatment price lists
│   │   ├── Services.jsx         # Signature treatments overview
│   │   └── Testimonials.jsx     # Client review carousel
│   ├── App.css                  # Component-specific styles
│   ├── App.jsx                  # Main application composition
│   ├── index.css                # Global styles, Tailwind directives & themes
│   └── main.jsx                 # React root render entry point
├── .env.example                 # Example environment variables template
├── .gitignore                   # Git exclusion rules
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML document template with SEO metadata
├── package.json                 # Project dependencies & scripts
├── replaceColors.cjs            # Theme refactoring utility script
└── vite.config.js               # Vite build and plugin setup
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended) and `npm`.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anitha-software-dev/kavitas-frontend.git
   cd kavitas-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To launch the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

### Code Quality / Linting

To inspect code quality with ESLint:

```bash
npm run lint
```

---

## ⚙️ Environment Variables

If custom environment variables are required (e.g., custom port or analytics tracking), copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

---

## 📄 License

This project is proprietary and developed for **Kavita's Beauty Bay**. All rights reserved.
