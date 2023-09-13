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



  // Define color scheme objects with comments
  const vibrantHarmonyPalette = {
    primary: '#e91e63',        // Primary Color (A vivid pink color)
    secondary: '#673ab7',      // Secondary Color (A deep purple color)
    accentColor: '#ff9800',    // Accent Color (A bright orange color)
    background: '#f5f5f5',     // Background Color (A very light gray color)
    neutralColor: '#999999',   // Neutral Color (A darker gray color)
  };
  
  const modernSunsetPalette = {
    primary: '#ff5722',        // Primary Color (A deep orange color)
    secondary: '#2196f3',      // Secondary Color (A vibrant blue color)
    accentColor: '#4caf50',    // Accent Color (A fresh green color)
    background: '#eeeeee',     // Background Color (A light gray color)
    neutralColor: '#666666',   // Neutral Color (A medium gray color)
  };
  
  const oceanBreezePalette = {
    primary: '#039be5',        // Primary Color (A serene blue color)
    secondary: '#00acc1',      // Secondary Color (A calming teal color)
    accentColor: '#f57c00',    // Accent Color (A warm amber color)
    background: '#f0f0f0',     // Background Color (A light gray color)
    neutralColor: '#555555',   // Neutral Color (A dark gray color)
  };
  
  // Set the default scheme
  const scheme = modernSunsetPalette;
  
  // Export the color scheme and interface
  module.exports = {
    ColorScheme,
    vibrantHarmonyPalette,
    modernSunsetPalette,
    oceanBreezePalette,
    scheme,
  };
  