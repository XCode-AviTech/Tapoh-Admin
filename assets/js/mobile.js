const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');

      if (navMenu.classList.contains('show')) {
        menuToggle.innerHTML = '&#10006;';
      } else {
        menuToggle.innerHTML = '&#9776;';
      }
    });