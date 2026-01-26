LLM_README: @ochub/ui Package Documentation

# PACKAGE METADATA

Name: @ochub/ui
Version: 0.1.0
Type: React Component Library
Language: TypeScript
Framework: React 16+
License: Proprietary - Open Campus Hub

# INITIALIZATION

The theme is automatically imported when importing any component.
No manual initialization required.

Single line import auto-applies theme CSS and all variables:

```
import { TopBar, BottomNav } from '@ochub/ui';
```

# THEME SYSTEM

AUTOMATIC APPLICATION:

- Theme CSS automatically loaded via entry point (src/index.ts)
- CSS variables initialized in :root
- All components inherit theme variables
- No manual CSS import needed

THEME OBJECT EXPORT:

```typescript
import { ochubTheme, type OchubTheme } from '@ochub/ui';

Type Definition:
type OchubTheme = {
  colors: {
    brandBlue: '#141beb'
    brandCyan: '#02eec4'
    primary: '#141beb'
    accent: '#02eec4'
    gray: {
      50: '#f9fafb'
      100: '#f3f4f6'
      200: '#e5e7eb'
      300: '#d1d5db'
      400: '#9ca3af'
      500: '#6b7280'
      600: '#4b5563'
      700: '#374151'
      800: '#1f2937'
      900: '#111827'
    }
    bgLight: '#f6fbff'
    bgWhite: '#ffffff'
    textPrimary: '#131bea'
    textSecondary: '#bbbfc5'
    textDark: '#374151'
  }
  typography: {
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  }
  cssVariables: {
    colorBrandBlue: 'var(--color-brand-blue)'
    colorBrandCyan: 'var(--color-brand-cyan)'
    colorPrimary: 'var(--color-primary)'
    colorAccent: 'var(--color-accent)'
    fontFamilyPoppins: 'var(--font-family-poppins)'
  }
}
```

CSS VARIABLES AVAILABLE:
--color-brand-blue: #141beb
--color-brand-cyan: #02eec4
--color-primary: #141beb
--color-accent: #02eec4
--color-gray-50: #f9fafb
--color-gray-100: #f3f4f6
--color-gray-200: #e5e7eb
--color-gray-300: #d1d5db
--color-gray-400: #9ca3af
--color-gray-500: #6b7280
--color-gray-600: #4b5563
--color-gray-700: #374151
--color-gray-800: #1f2937
--color-gray-900: #111827
--color-bg-light: #f6fbff
--color-bg-white: #ffffff
--color-text-primary: #131bea
--color-text-secondary: #bbbfc5
--color-text-dark: #374151
--font-family-poppins: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

THEME PROVIDER (OPTIONAL):

```typescript
import { ThemeProvider } from '@ochub/ui';

interface ThemeProviderProps {
  children: ReactNode;
}

// Optional wrapper - theme already auto-applied
<ThemeProvider>
  <YourApp />
</ThemeProvider>
```

# COMPONENTS

1. # BACKBUTTON

Location: src/components/BackButton.tsx
Export: export function BackButton

Interface:

```typescript
interface BackButtonProps {
  label?: string; // Button text. Default: "Back"
  href?: string; // URL to navigate. Optional
  onClick?: () => void; // Custom click handler. Optional
}

function BackButton({
  label = "Back",
  href,
  onClick,
}: BackButtonProps): JSX.Element;
```

Behavior:

- Priority 1: If onClick provided, execute onClick()
- Priority 2: If href provided, navigate to window.location.href = href
- Priority 3: Default to window.history.back()

Rendered as: <button> with ArrowLeft icon + text

Usage Patterns:

- <BackButton /> - Back button with default behavior
- <BackButton label="Return" /> - Custom label
- <BackButton href="/" /> - Navigate to home
- <BackButton onClick={handleClose} /> - Custom handler

Styling: Uses Tailwind classes internally

- flex items-center gap-1 text-white
- Class: "flex items-center gap-1 text-white"

Dependencies:

- Icons: ./icons/ArrowLeft

2. # BOTTOMNAV

Location: src/components/BottomNav.tsx
Export: export function BottomNav

Interface:

```typescript
// No props accepted
function BottomNav(): JSX.Element;

// Internal NavItem interface (for reference):
interface NavItem {
  icon: React.ComponentType<{ className?: string; active?: boolean }>;
  labelKey: string; // i18n translation key
  href: string; // Navigation path
}
```

Fixed Navigation Items:

1. href: "/" labelKey: "nav.home" icon: HomeIcon
2. href: "/grow" labelKey: "nav.grow" icon: GrowIcon
3. href: "/credentials" labelKey: "nav.credentials" icon: CredentialsIcon

Active Route Detection:

- Uses window.location.pathname
- "/" matches only exact path "/"
- "/grow" matches "/grow" or "/grow/\*"
- "/credentials" matches "/credentials" or "/credentials/\*"
- Active items show brand blue color (#141BEB)
- Inactive items show gray (text-gray-400)

Rendered Structure:

- <nav> fixed bottom-0 left-0 right-0 z-30
- Container: mx-auto flex h-20 max-w-xl items-center justify-around px-4
- Each nav item: <a> tag with icon + label

Usage:
<BottomNav /> // No props needed

Dependencies:

- Icons: HomeIcon, GrowIcon, CredentialsIcon

# ICON COMPONENTS

All icons exported from: src/components/icons/

Generic Icon Props:

```typescript
type IconProps = {
  className?: string; // For sizing: "h-5 w-5", "h-6 w-6", etc.
  active?: boolean; // For state variants (HomeIcon, GrowIcon, CredentialsIcon only)
};
```

1. # LOGO
   Location: src/components/icons/Logo.tsx
   Export: export function Logo

Interface:

```typescript
interface LogoProps {
  variant?: "light" | "dark"; // Text color variant (default: "light")
  className?: string; // CSS class for sizing/styling
}

function Logo(props: LogoProps): JSX.Element;
```

Properties:

- Default size (width="135" height="24")
- Open Campus wordmark + icon
- SVG viewBox: "25 -1 135 26"
- variant: "light" = white text (for dark backgrounds), "dark" = blue text (for light backgrounds)
- className: For custom sizing (e.g., "h-4 w-auto")

Usage:

```tsx
<Logo />                           // Default: light variant (white text)
<Logo variant="dark" />            // Dark variant (blue text for light backgrounds)
<Logo variant="dark" className="h-6 w-auto" />  // Custom size
```

Design:

- Cyan circle background (#00EDBE)
- Blue accent (#141BEB)
- Used in TopBar

2. # ARROWLEFT
   Location: src/components/icons/ArrowLeft.tsx
   Export: export function ArrowLeft

Interface:

```typescript
function ArrowLeft({ className }: { className?: string }): JSX.Element;
```

Properties:

- Size: 20x20 (default viewBox)
- Stroke icon (not filled)
- Stroke width: 2
- Path: arrow pointing left (M15 18l-6-6 6-6)
- inherits currentColor for stroke

Usage:
<ArrowLeft className="h-5 w-5" />
<ArrowLeft className="h-6 w-6 text-white" />

Used In: BackButton

3. # HOMEICON
   Location: src/components/icons/HomeIcon.tsx
   Export: export function HomeIcon

Interface:

```typescript
function HomeIcon({
  className,
  active,
}: {
  className?: string;
  active?: boolean;
}): JSX.Element;
```

Properties:

- Size: 24x24
- Two states:
  - active={true}: Filled solid blue (#131BEA)
  - active={false}: Outlined style (thin strokes)
- SVG path: House/home symbol

Usage:
<HomeIcon className="h-6 w-6" active={true} />
<HomeIcon className="h-6 w-6" active={false} />
<HomeIcon className="h-6 w-6" /> // active defaults to false

Used In: BottomNav (nav.home route)

4. # GROWICON
   Location: src/components/icons/GrowIcon.tsx
   Export: export function GrowIcon

Interface:

```typescript
function GrowIcon({
  className,
  active,
}: {
  className?: string;
  active?: boolean;
}): JSX.Element;
```

Properties:

- Size: 24x24
- Two states:
  - active={true}: Filled solid blue
  - active={false}: Outlined style
- SVG path: Growth/trending up symbol

Usage:
<GrowIcon className="h-6 w-6" active={true} />
<GrowIcon className="h-6 w-6" active={false} />

Used In: BottomNav (nav.grow route)

5. # CREDENTIALSICON
   Location: src/components/icons/CredentialsIcon.tsx
   Export: export function CredentialsIcon

Interface:

```typescript
function CredentialsIcon({
  className,
  active,
}: {
  className?: string;
  active?: boolean;
}): JSX.Element;
```

Properties:

- Size: 24x24
- Two states:
  - active={true}: Filled solid blue
  - active={false}: Outlined style
- SVG path: Badge/credentials symbol

Usage:
<CredentialsIcon className="h-6 w-6" active={true} />
<CredentialsIcon className="h-6 w-6" active={false} />

Used In: BottomNav (nav.credentials route)

6. # HAMBURGERMENU
   Location: src/components/icons/HamburgerIcon.tsx
   Export: export function HamburgerIcon

Interface:

```typescript
function HamburgerIcon({ className }: { className?: string }): JSX.Element;
```

Properties:

- Size: 24x24
- Static icon (no active state)
- Three horizontal lines (hamburger menu symbol)
- Stroke icon

Usage:
<HamburgerIcon className="h-6 w-6" />
<HamburgerIcon className="h-5 w-5 text-white" />

# EXPORT STRUCTURE

Main Entry Point: src/index.ts

Exports:

```typescript
// Auto-imports theme.css
import "./theme.css";

// All components
export { BackButton } from "./components";
export { BottomNav } from "./components";

// All icons
export { Logo } from "./components/icons";
export { ArrowLeft } from "./components/icons";
export { HomeIcon } from "./components/icons";
export { GrowIcon } from "./components/icons";
export { CredentialsIcon } from "./components/icons";
export { HamburgerIcon } from "./components/icons";

// Theme
export { ochubTheme } from "./theme";
export type { OchubTheme } from "./theme";

// Optional provider
export { ThemeProvider } from "./ThemeProvider";
```

# BUILD OUTPUT

dist/ structure:

- index.js & index.d.ts - Entry point (includes theme.css import)
- theme.css - CSS variables stylesheet
- theme.js & theme.d.ts - Theme object
- ThemeProvider.js & ThemeProvider.d.ts - Optional provider
- components/BackButton.js & .d.ts
- components/BottomNav.js & .d.ts
- components/icons/\*.js & .d.ts (6 icon files)

Build Tool: TypeScript (tsc)
Target: ES2020
Module: ESNext
Output: 316 KB, 73 files

# STYLING REQUIREMENTS

Components use Tailwind CSS utility classes internally.

Consumer must:

1. Install tailwindcss: npm install tailwindcss postcss autoprefixer
2. Configure tailwind.config.js to scan dist:
   - content: ['node_modules/@ochub/ui/dist/**/*.{js,jsx,ts,tsx}']
3. Import Tailwind CSS: @tailwind base; @tailwind components; @tailwind utilities;

Tailwind Utility Classes Used in Components:

- Layout: flex, grid, fixed, absolute, relative, sticky
- Spacing: px-_, py-_, h-_, w-_, gap-_, mx-_, max-w-\*
- Typography: text-_, font-_, leading-\*
- Colors: bg-_, text-_, border-\*
- Effects: shadow-_, opacity-_, z-\*
- Transitions: transition-_, duration-_
- Responsive: Mostly max-w-xl (mobile-first)

CLASS NAMING PATTERNS:

- All custom: text-[#141BEB], bg-[linear-gradient(...)]
- Tailwind standard: flex, items-center, gap-1
- CSS variables: text-[var(--color-primary)]

# TYPESCRIPT SUPPORT

All components have TypeScript definitions (.d.ts files).

Type Imports:

```typescript
import type { OchubTheme } from "@ochub/ui";
import { BackButton, BottomNav } from "@ochub/ui";
import type { ComponentProps } from "react";

type BackButtonProps = ComponentProps<typeof BackButton>;
type BottomNavProps = ComponentProps<typeof BottomNav>;
```

# DEPENDENCIES

Production Dependencies:

- react: ^19.0.0 (peer: ^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0)
- react-dom: ^19.0.0 (peer: ^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0)

Optional Dependencies:

- @opencampus/ocid-connect-js: ^2.0.7
- i18next: ^25.7.3
- react-i18next: ^16.5.1

Dev Dependencies (not bundled):

- typescript: ^5
- eslint: ^9
- prettier: ^3.6.2
- @types/react: ^19
- @types/react-dom: ^19

# USAGE PATTERNS

MINIMAL USAGE:

```typescript
import { BackButton, BottomNav } from '@ochub/ui';
export function App() { return <> <BackButton /> <BottomNav /> </> }
```

WITH THEME ACCESS:

```typescript
import { ochubTheme, BackButton } from "@ochub/ui";
const color = ochubTheme.colors.primary;
```

WITH TYPESCRIPT:

```typescript
import { BackButton, type OchubTheme } from "@ochub/ui";
const theme: OchubTheme = {
  /* ... */
};
```

WITH CUSTOM STYLING:

```typescript
<BackButton label="Custom" className="..." />
<div style={{color: 'var(--color-primary)'}}>Themed</div>
```

# FRAMEWORK COMPATIBILITY

React Versions Supported: 16, 17, 18, 19

Verified Frameworks:

- Next.js (with Tailwind configured)
- Vite + React (with Tailwind configured)
- Create React App (with Tailwind configured)
- Any React 16+ framework with Tailwind support

CLIENT-SIDE ONLY:
All components are client-side React components.
No server-side rendering specific code.

# KEY TECHNICAL DETAILS

Pure React:

- No Next.js framework-specific APIs (no useRouter, usePathname, Image, Link)
- No "use client" directives needed
- Uses standard browser APIs: window.location, window.history
- Standard React hooks: useState, useEffect (minimal usage)

Theme System:

- CSS variables in :root for global scope
- @layer base for Tailwind integration
- No CSS-in-JS (no styled-components, emotion, etc.)
- No PostCSS processing in library
- Static CSS file included in dist/

Component Architecture:

- Functional components only
- Minimal state (only BottomNav uses useState)
- No complex hooks
- Tailwind-only styling

Icons:

- All SVG components (6 total)
- Inline SVG in JSX
- Support currentColor for styling
- Support Tailwind sizing classes

Navigation:

- Standard <a> tags (not Next.js Link)
- Uses window.location.href for navigation
- Uses window.history.back() for back button
- No router required

Theming:

- Global CSS variables
- Can be overridden at :root or element level
- Dark mode ready (not implemented, but infrastructure available)
- Programmatic access via theme object

# PERFORMANCE NOTES

Bundle Size: 316 KB (73 files with source maps)
Gzip: ~50-60 KB (estimated)
Tree-shakeable: Yes, individual component imports work

Code Splitting Friendly:

- Each component is separate module
- Icons are separate modules
- Theme is separate module

No Runtime Overhead:

- Static CSS variables
- No theme context provider overhead (optional provider)
- No CSS-in-JS processing

# ACCESSIBILITY NOTES

Components use semantic HTML:

- <button> for BackButton (keyboard accessible)
- <nav> for BottomNav
- <a> tags for navigation links
- Proper heading hierarchy with <span> labels

Icon Implementation:

- SVG icons with currentColor (inherits text color)
- Can be styled with className prop
- No alt text needed (decorative icons with labels)
- Active/inactive states via visual design

Color Contrast:

- Primary brand blue (#141beb) on white background: WCAG AA compliant
- White text on blue gradient background: WCAG AA compliant

# COMMON IMPLEMENTATION TASKS

Task 1: Add custom color to component
Solution: Set CSS variable in your :root or specific element

```css
:root {
  --color-primary: #your-color;
}
```

Task 2: Change icon size
Solution: Use className prop with Tailwind size classes

```tsx
<HomeIcon className="h-8 w-8" />
```

Task 3: Create custom button with theme colors
Solution: Use CSS variables in style or className

```tsx
<button style={{ color: "var(--color-primary)" }}>Click me</button>
```

Task 4: Theme colors in styled components
Solution: Reference CSS variables

```tsx
<div className="text-[var(--color-primary)]">Themed text</div>
```

Task 5: Navigate with custom handler
Solution: Use BackButton onClick prop

```tsx
<BackButton
  onClick={() => {
    // custom logic
    window.location.href = "/path";
  }}
/>
```

# LIMITATIONS & CONSTRAINTS

Fixed Navigation Routes:

- BottomNav routes hardcoded: /, /grow, /credentials
- Cannot customize routes without modifying source

i18n Integration:

- BottomNav uses translation keys (nav.home, nav.grow, nav.credentials)
- Requires i18next setup in consuming app
- No fallback translations in library

Tailwind Dependency:

- Components require Tailwind CSS in consuming app
- Cannot use component styles without Tailwind configured
- Library does not include Tailwind in bundle

Styling Lock-in:

- All styling via Tailwind and CSS variables
- No CSS modules, styled-components, or other approaches
- Not easily compatible with CSS-in-JS frameworks

Single Theme:

- Only one theme (OCHub theme) available
- No dark mode variant
- Colors can be overridden via CSS variables only

No Customization API:

- Components have limited props
- No children or render prop patterns
- Fixed layouts (especially BottomNav)

# VERSION COMPATIBILITY

React 16+ required
React 19 recommended
TypeScript 5 recommended (but not required for usage)

Node.js 16+ recommended for build tools

# RELATED FILES FOR REFERENCE

Source Files:

- src/index.ts - Main entry (auto-imports theme.css)
- src/theme.ts - Theme object definition
- src/theme.css - CSS variables
- src/ThemeProvider.tsx - Optional theme provider
- src/components/BackButton.tsx
- src/components/BottomNav.tsx
- src/components/icons/\*.tsx (6 icon files)

Configuration:

- tsconfig.json - TypeScript config
- package.json - Package metadata and build scripts
- eslint.config.mjs - ESLint rules
- prettier.config.mjs - Code formatting

Build:

- npm run build - Compile and copy theme.css to dist
- npm run type-check - TypeScript strict mode check
