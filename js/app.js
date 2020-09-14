/////////////////////////
// Controller imports
/////////////////////////
import { elements } from './components/selectors.js';
import * as navModel from './models/Nav.js';
import * as navView from './components/navView.js';
import * as cardView from './components/cardView.js';
//import * as typed from './components/typed.js';


/////////////////////////
// Nav Controller
/////////////////////////

// Nav / Burger Menu Controller
elements.burgerIcon.addEventListener('click', navModel.burgerMenuToggle);

// Nav / Links
elements.navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setTimeout(function() {
      if (elements.navMenu.classList.contains("menu-active")) {
        navView.displayMenuToggle();
      }
    }, 620);
  })
});
