/**
 * OCHub UI Theme Configuration
 * 
 * Defines all theme colors and typography used throughout the component library.
 * Import this module to access theme values programmatically.
 */

export const ochubTheme = {
  colors: {
    // Brand Colors
    brandBlue: '#141beb',
    brandCyan: '#02eec4',

    // Semantic
    primary: '#141beb',
    accent: '#02eec4',

    // Gray Scale
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },

    // Background
    bgLight: '#f6fbff',
    bgWhite: '#ffffff',

    // Text
    textPrimary: '#131bea',
    textSecondary: '#bbbfc5',
    textDark: '#374151',
  },

  typography: {
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  // CSS Variable names for use in components
  cssVariables: {
    colorBrandBlue: 'var(--color-brand-blue)',
    colorBrandCyan: 'var(--color-brand-cyan)',
    colorPrimary: 'var(--color-primary)',
    colorAccent: 'var(--color-accent)',
    fontFamilyPoppins: 'var(--font-family-poppins)',
  },
} as const;

export type OchubTheme = typeof ochubTheme;
