import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

export default {
  theme: {
    extend: {
      colors: {
        primary: "#D10000",
        "background-light": "#f8f5f5",
        "background-dark": "#121212",
        "secondary-dark": "#1A1A1A",
        "border-dark": "#4A4A4A",
        "text-light": "#F0F0F0",
        "text-muted": "#A0A0A0",
      }
    }
  },
  plugins: [forms, containerQueries]
};
