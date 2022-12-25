const menuItems = document.querySelectorAll('nav > ul > li');

function showSubmenu(event) {
  const submenu = event.currentTarget.querySelector('ul');
  submenu.style.display = 'block';
  submenu.style.maxHeight = '0';
  submenu.style.overflow = 'hidden';
  submenu.style.transition = 'max-height 0.25s ease-out';

  setTimeout(() => {
    submenu.style.maxHeight = submenu.scrollHeight + 'px';
  }, 10);
}

function hideSubmenu(event) {
  const submenu = event.currentTarget.querySelector('ul');
  submenu.style.maxHeight = '0';
  submenu.style.overflow = 'hidden';
  submenu.style.transition = 'max-height 0.25s ease-out';
}

menuItems.forEach(item => {
  item.addEventListener('mouseover', showSubmenu);
  item.addEventListener('mouseleave', hideSubmenu);
});
