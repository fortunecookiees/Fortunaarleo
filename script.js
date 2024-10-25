// Theme switcher script
function setTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    document.getElementById('themeIcon').className = 'bi bi-brightness-high';
  } else if (theme === 'dark') {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    document.getElementById('themeIcon').className = 'bi bi-moon';
  } else {
    // Auto mode (based on system preference)
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const isDark = prefersDarkScheme.matches;
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
    document.getElementById('themeIcon').className = isDark ? 'bi bi-moon' : 'bi bi-brightness-high';
  }
}

// Set initial theme based on system preference
setTheme('auto');

//js button meditation
document.getElementById("meditationButton").addEventListener("click", function() {
  window.location.href = "https://positivepsychology.com/meditation-techniques-beginners/";
});