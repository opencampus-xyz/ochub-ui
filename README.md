# @ochub/ui

A pure React component library for Open Campus Hub, providing pre-built, fully themed UI components with automatic theme application.

- 🎨 **Auto-Themed** - Theme CSS automatically applied when importing components
- 🧩 **Modular** - Small, focused components that work together seamlessly
- 📱 **Mobile First** - Responsive design optimized for mobile and desktop
- 🔧 **TypeScript** - Full type definitions for all components
- 🎯 **Zero Config** - Just import and use, theme is ready
- 🚀 **Production Ready** - Used in production by Open Campus Hub

## Installation

```bash
npm install @ochub/ui
```

## Quick Start

```tsx
import { TopBar, BottomNav, BackButton } from "@ochub/ui";

export function App() {
  return (
    <>
      <TopBar title="Home" />
      <main>{/* Your content */}</main>
      <BottomNav />
    </>
  );
}
```

**That's it!** The theme is automatically applied. No CSS imports needed.

---

## Theme System

### Automatic Theme Application

The theme is **automatically imported** when you import components. All CSS variables and styles are immediately available.

```tsx
// Simply import components - theme is auto-applied
import { BackButton } from "@ochub/ui";

export function MyComponent() {
  return <BackButton label="Go Back" />;
}
```

### Using Theme Colors

#### Option 1: CSS Variables (Recommended)

Use CSS variables directly in your styles or Tailwind classes:

```tsx
<div className="text-[var(--color-primary)] bg-[var(--color-bg-light)]">
  Styled with theme colors
</div>
```

```css
.my-element {
  color: var(--color-primary);
  background: var(--color-bg-light);
  font-family: var(--font-family-poppins);
}
```

#### Option 2: Programmatic Access

Import the theme object for programmatic access:

```tsx
import { ochubTheme, type OchubTheme } from "@ochub/ui";

// Access colors
const primaryColor = ochubTheme.colors.primary; // '#141beb'
const accentColor = ochubTheme.colors.accent; // '#02eec4'

// Type-safe theme usage
const theme: OchubTheme = ochubTheme;
```

### Available CSS Variables

```css
/* Brand Colors */
--color-brand-blue: #141beb;
--color-brand-cyan: #02eec4;

/* Semantic Colors */
--color-primary: #141beb;
--color-accent: #02eec4;

/* Gray Scale */
--color-gray-50: #f9fafb;
--color-gray-100: #f3f4f6;
--color-gray-200: #e5e7eb;
--color-gray-300: #d1d5db;
--color-gray-400: #9ca3af;
--color-gray-500: #6b7280;
--color-gray-600: #4b5563;
--color-gray-700: #374151;
--color-gray-800: #1f2937;
--color-gray-900: #111827;

/* Backgrounds */
--color-bg-light: #f6fbff;
--color-bg-white: #ffffff;

/* Text Colors */
--color-text-primary: #131bea;
--color-text-secondary: #bbbfc5;
--color-text-dark: #374151;

/* Typography */
--font-family-poppins:
  "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### Customizing Theme Colors

Override theme colors in your app by setting CSS variables:

```css
:root {
  --color-brand-blue: #0066ff;
  --color-brand-cyan: #00ffff;
  --color-primary: #0066ff;
  --color-accent: #00ffff;
}
```

All components will automatically use your custom colors.

### Optional: ThemeProvider

For explicit theme wrapping (optional, theme is already auto-applied):

```tsx
import { ThemeProvider, TopBar } from "@ochub/ui";

export function App() {
  return (
    <ThemeProvider>
      <TopBar />
    </ThemeProvider>
  );
}
```

---

## Components

### BackButton

A navigation button with back arrow icon.

#### Props

```typescript
interface BackButtonProps {
  label?: string; // Button text (default: "Back")
  href?: string; // Navigate to URL
  onClick?: () => void; // Custom click handler
}
```

#### Behavior

- If `onClick` is provided, it's called on click
- If `href` is provided, navigates to that URL
- Otherwise, calls `window.history.back()`

#### Examples

```tsx
// Default behavior: go back in history
<BackButton />

// Navigate to specific URL
<BackButton label="Go Home" href="/" />

// Custom behavior
<BackButton label="Cancel" onClick={() => doSomething()} />
```

### BottomNav

Bottom navigation bar with 3 fixed navigation items (Home, Grow, Credentials).

#### Props

No props - navigation items are fixed.

#### Behavior

- Shows fixed navigation bar at bottom
- Uses `window.location.pathname` to detect active route
- Links navigate using standard `<a>` tags
- Icons change color based on active state

#### Examples

```tsx
// Navigation auto-detects active route
<BottomNav />
```

Routes handled:

- `/` - Home (active when pathname is exactly "/")
- `/grow` - Grow section
- `/credentials` - Credentials section

---

## Icon Components

### Available Icons

All icons accept `className` prop for sizing and styling. Some icons support an `active` prop for state variants.

#### Logo

Open Campus logo (wordmark + icon).

```tsx
import { Logo } from '@ochub/ui';

<Logo />                           // Default: light variant (white text)
<Logo variant="dark" />            // Dark variant (blue text for light backgrounds)
<Logo variant="dark" className="h-6 w-auto" />  // Custom size
```

Props:

```typescript
{
  variant?: "light" | "dark";  // Text color variant (default: "light")
  className?: string;           // CSS class for sizing/styling
}
```

- `variant="light"` - White text, for dark backgrounds (default)
- `variant="dark"` - Blue (#141BEB) text, for light backgrounds

#### ArrowLeft

Left arrow icon for back navigation.

```tsx
import { ArrowLeft } from "@ochub/ui";

<ArrowLeft className="h-5 w-5" />;
```

Props:

```typescript
{ className?: string }
```

#### HomeIcon

Home icon with active/inactive states.

```tsx
import { HomeIcon } from "@ochub/ui";

<HomeIcon className="h-6 w-6" active={true} />;
```

Props:

```typescript
{
  className?: string;
  active?: boolean;  // Filled blue when true, outlined when false
}
```

#### GrowIcon

Growth/trending icon with active/inactive states.

```tsx
import { GrowIcon } from "@ochub/ui";

<GrowIcon className="h-6 w-6" active={false} />;
```

Props:

```typescript
{
  className?: string;
  active?: boolean;  // Filled blue when true, outlined when false
}
```

#### CredentialsIcon

Credentials/badge icon with active/inactive states.

```tsx
import { CredentialsIcon } from "@ochub/ui";

<CredentialsIcon className="h-6 w-6" active={false} />;
```

Props:

```typescript
{
  className?: string;
  active?: boolean;  // Filled blue when true, outlined when false
}
```

#### HamburgerIcon

Hamburger menu icon.

```tsx
import { HamburgerIcon } from "@ochub/ui";

<HamburgerIcon className="h-6 w-6" />;
```

Props:

```typescript
{ className?: string }
```

---

## Styling

Components use **Tailwind CSS** utility classes. To style them properly, configure Tailwind in your project:

### 1. Install Tailwind CSS

```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configure Content Paths

```javascript
// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/@ochub/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
};
```

### 3. Import Tailwind CSS

```css
/* styles.css or main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Framework Integration

### Next.js (App Router)

```tsx
// app/layout.tsx
import { AppShell, TopBar } from "@ochub/ui";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppShell>
          <TopBar />
          {children}
        </AppShell>
      </body>
    </html>
  );
}
```

### Vite + React

```tsx
// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

```tsx
// App.tsx
import { TopBar, BottomNav } from "@ochub/ui";

function App() {
  return (
    <>
      <TopBar title="App" />
      <BottomNav />
    </>
  );
}
```

### Create React App

```tsx
// App.tsx
import { TopBar, BottomNav } from "@ochub/ui";

function App() {
  return (
    <>
      <TopBar title="My App" />
      <BottomNav />
    </>
  );
}

export default App;
```

---

## Type Safety

Full TypeScript support with exported types:

```tsx
import { BackButton, BottomNav, ochubTheme, type OchubTheme } from "@ochub/ui";

// Type-safe theme
const colors: OchubTheme["colors"] = ochubTheme.colors;

// Component props are fully typed
const backButtonProps: React.ComponentProps<typeof BackButton> = {
  label: "Back",
  href: "/",
};
```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## License

Proprietary - Open Campus Hub

---

## Support

For issues or questions about `@ochub/ui`, contact the Open Campus development team.

---

## Changelog

### v0.1.0 (Initial Release)

- ✅ Pure React components (zero Next.js dependencies)
- ✅ Automatic theme application
- ✅ 2 core components (BackButton, BottomNav)
- ✅ 6 icon components
- ✅ Full TypeScript support
- ✅ CSS variable theming system
- ✅ Production ready
