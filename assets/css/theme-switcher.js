document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme');
  
  // Check if there's a theme preference in localStorage
  if (currentTheme) {
    document.documentElement.classList.toggle('dark-theme', currentTheme === 'dark');
    
    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  }
  else {
    // Check for user's system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark-theme');
      toggleSwitch.checked = true;
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Handle theme toggle
  toggleSwitch.addEventListener('change', function(e) {
    if (e.target.checked) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  });
});
