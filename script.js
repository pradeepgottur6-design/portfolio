// Dark / Light Theme Toggle
const themeToggleBtn = document.getElementById('themeToggle');
let isDark = true;

themeToggleBtn.addEventListener('click', () => {
  isDark = !isDark;
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = 'Light Mode';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleBtn.textContent = 'Dark Mode';
  }
});

// Project Filter Tabs
function filterProjects(category, btnElement) {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => tab.classList.remove('active'));
  btnElement.classList.add('active');

  const projects = document.querySelectorAll('.project-card');
  projects.forEach(project => {
    if (category === 'all' || project.getAttribute('data-category') === category) {
      project.style.display = 'flex';
    } else {
      project.style.display = 'none';
    }
  });
}

// Contact Form Handler
function handleFormSubmit(event) {
  event.preventDefault();
  const toast = document.getElementById('toast');
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
  event.target.reset();
}
