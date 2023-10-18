// colorSchemes.js

// Define the ColorScheme interface
const ColorScheme = {
    primary: 'string',
    secondary: 'string',
    accentColor: 'string',
    background: 'string',
    neutralColor: 'string',
  };
  
// Primary Color: Use for main headings, call-to-action buttons,
// and important elements that need to grab attention.

// Secondary Color: Great for subheadings, secondary buttons,
// and additional design elements that support the primary color.

// Accent Color: Apply to elements that need to stand out without
// overwhelming, such as highlights, icons, or interactive elements.

// Background Color: Ideal for the overall background of the website,
// providing a clean and neutral backdrop for content.

// Neutral Color: Use for text, borders, and other elements that require
// a subtle and readable color that complements the overall design.


// Define color scheme objects with comments for light mode
const vibrantHarmonyPalette = {
  primary: '#e91e63',
  secondary: '#673ab7',
  accentColor: '#ff9800',
  background: '#f5f5f5',
  neutralColor: '#999999',
};

const modernSunsetPalette = {
  primary: '#ff5722',
  secondary: '#2196f3',
  accentColor: '#4caf50',
  background: '#eeeeee',
  neutralColor: '#666666',
};

const oceanBreezePalette = {
  primary: '#039be5',
  secondary: '#00acc1',
  accentColor: '#f57c00',
  background: '#f0f0f0',
  neutralColor: '#555555',
};

// Define color scheme objects with comments for dark mode
const vibrantHarmonyPaletteDark = {
  primary: '#ff4081',
  secondary: '#9c27b0',
  accentColor: '#ff5722',
  background: '#121212',
  neutralColor: '#cccccc',
};

const modernSunsetPaletteDark = {
  primary: '#ff6e40',
  secondary: '#1976d2',
  accentColor: '#8bc34a',
  background: '#0d0d0d',
  neutralColor: '#999999',
};

const oceanBreezePaletteDark = {
  primary: '#0288d1',
  secondary: '#0097a7',
  accentColor: '#e64a19',
  background: '#101010',
  neutralColor: '#cccccc',
};

// Set the default schemes for both light and dark mode
const scheme = modernSunsetPalette;
const darkScheme = modernSunsetPaletteDark;

// Export the color schemes and interface
module.exports = {
  ColorScheme,
  vibrantHarmonyPalette,
  modernSunsetPalette,
  oceanBreezePalette,
  vibrantHarmonyPaletteDark,
  modernSunsetPaletteDark,
  oceanBreezePaletteDark,
  scheme,
  darkScheme,
};
