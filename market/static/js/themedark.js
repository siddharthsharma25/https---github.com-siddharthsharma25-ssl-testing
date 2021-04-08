import * as DarkModeToggle from 'https://googlechromelabs.github.io/dark-mode-toggle/src/dark-mode-toggle.mjs';

const toggle = document.querySelector('dark-mode-toggle');
const body = document.body;

// Set or remove the `dark` class the first time.
toggle.mode === 'dark' ? body.classList.add('dark') : body.classList.remove('dark');

// Listen for toggle changes (which includes `prefers-color-scheme` changes)
// and toggle the `dark` class accordingly.
toggle.addEventListener('colorschemechange', () => {
  body.classList.toggle('dark', toggle.mode === 'dark');
});/* On the page */


const darkModeToggle = document.querySelector('dark-mode-toggle');

// Set the mode to dark
darkModeToggle.mode = 'dark';
// Set the mode to light
darkModeToggle.mode = 'light';

// Set the legend to "Dark Mode"
darkModeToggle.legend = 'Dark Mode';
// Set the light label to "off"
darkModeToggle.light = 'off';
// Set the dark label to "on"
darkModeToggle.dark = 'on';

// Set the appearance to resemble a switch (theme: light/dark)
darkModeToggle.appearance = 'switch';
// Set the appearance to resemble a toggle (dark mode: on/off)
darkModeToggle.appearance = 'toggle';

// Set a "remember the last selected mode" label
darkModeToggle.remember = 'Remember this';

// Remember the user's last color scheme choice
darkModeToggle.setAttribute('permanent', '');
// Forget the user's last color scheme choice
darkModeToggle.removeAttribute('permanent');

  /* On the page */
document.addEventListener('colorschemechange', (e) => {
console.log(`Color scheme changed to ${e.detail.colorScheme}.`);
});

/* On the page */
document.addEventListener('permanentcolorscheme', (e) => {
    console.log(`${e.detail.permanent ? 'R' : 'Not r'
        }emembering the last selected mode.`);
    });



