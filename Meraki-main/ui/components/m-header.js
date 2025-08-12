import './m-button.js';


class HeaderDropdown extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' })

    const dropdown = document.createElement('div')
    dropdown.classList.add('dropdown')

    dropdown.innerHTML = `
      <div class=container>
        <slot></slot>
      </div>
    `
    const style = document.createElement('style');

    style.textContent = `
      :host {
        position: relative;
      }
      .dropdown {
        position: absolute;
        top: 0;
        right: -100px;
        padding-top: 12px;
      }
      .container {
        background-color: #fff;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 8px;
      }
    `

    shadow.appendChild(style);
    shadow.appendChild(dropdown);
  }
}

customElements.define('header-dropdown', HeaderDropdown);

class AuthedDropdown extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' })

    const dropdown = document.createElement('div')
    const user = JSON.parse(localStorage.getItem('user'))

    dropdown.innerHTML = `
      <header-dropdown>
        <div class="user-info-container">
          <div class="user-info">
            <img src="${user.avatar}" alt="Avatar" />
            <p>${user.name}</p>
          </div>
        
          </div>
      </header-dropdown>
    `;

    const style = document.createElement('style');
    style.textContent = `
      a {
        display: block;
        text-decoration: none;
        color: #074264;
        font-size: 20px;
        padding-block: 4px;
        font-weight: 600;
      }
      .user-info-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px;
      }
      .user-info {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .user-info img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        flex: 0 0 24px;
      }
      .user-info p {
        flex: 1 1 0; 
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .dropdown-items {
        margin-top: 4px;
      }
      .dropdown-items a {
        white-space: nowrap;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(dropdown);
  }
}

customElements.define('authed-dropdown', AuthedDropdown);

class UnauthedDropdown extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' })

    const dropdown = document.createElement('div')

    dropdown.innerHTML = `
      <header-dropdown>
        <a href="loginForm.html">Login</a>
        <a href="signinForm.html">Register</a>
      </header-dropdown>
    `;

    const style = document.createElement('style');
    style.textContent = `
      a {
        display: block;
        padding: 8px 16px;
        text-decoration: none;
        color: #074264;
        font-size: 20px;
        font-weight: 600;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(dropdown);
  }
}

customElements.define('unauthed-dropdown', UnauthedDropdown);

class MHamburger extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = `
      <div class="stripe stripe-1"></div>
      <div class="stripe stripe-2"></div>
      <div class="stripe stripe-3"></div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .hamburger {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .hamburger .stripe {
        background-color: white;
        width: 32px;
        height: 4px;
        border-radius: 2px;
      }
      
      @media screen and (max-width: 768px) {

      .action-wrapper m-button button {
        min-height: 28px !important;
        min-width: 80px !important;
        font-size: 10px !important;
        padding: 4px 8px !important;
      }

      .auth-button {
        max-width: 90px;
        font-size: 10px !important;
      }

      .auth-button p {
        font-size: 10px !important;
      }

      .auth-button img {
        width: 16px;
        height: 16px;
      }

    .hamburger .stripe {
      width: 24px;
      height: 4px;
    }

    .hamburger {
      gap: 4px;
      transform: scale(0.8);
    }
  }
      .hamburger.active .stripe-1 {
        animation: kf-stripe-1 0.6s;
        animation-fill-mode: both;
      }
      
      .hamburger.active .stripe-2 {
        animation: kf-stripe-2 0.6s;
        animation-fill-mode: both;
      }
      
      .hamburger.active .stripe-3 {
        animation: kf-stripe-3 0.6s;
        animation-fill-mode: both;
      }
      
      .hamburger.unactive .stripe-1 {
        animation: kf-stripe-rev-1 0.6s;
        animation-fill-mode: both;
      }

      .hamburger.unactive .stripe-2 {
        animation: kf-stripe-rev-2 0.6s;
        animation-fill-mode: both;
      }
      
      .hamburger.unactive .stripe-3 {
        animation: kf-stripe-rev-3 0.6s;
        animation-fill-mode: both;
      }

      

      @keyframes kf-stripe-1 {
        0% {
          transform: translateY(0);
        }
        
        50% {
          transform: translateY(10px);
        }
        
        100% {
          transform: translateY(10px) rotate(45deg);
        }
      }

      @keyframes kf-stripe-2 {
        0% {
          transform: scale(1);
        }
        
        100% {
          transform: scale(0);
        }
      }

      @keyframes kf-stripe-3 {
        0% {
          transform: translateY(0);
        }
        
        50% {
          transform: translateY(-10px);
        }
        
        100% {
          transform: translateY(-10px) rotate(135deg);
        }
      }

      @keyframes kf-stripe-rev-1 {
        1000% {
          transform: translateY(0);
        }
        
        50% {
          transform: translateY(10px);
        }
        
        0% {
          transform: translateY(10px) rotate(45deg);
        }
      }

      @keyframes kf-stripe-rev-2 {
        100% {
          transform: scale(1);
        }
        
        0% {
          transform: scale(0);
        }
      }

      @keyframes kf-stripe-rev-3 {
        100% {
          transform: translateY(0);
        }
        
        50% {
          transform: translateY(-10px);
        }
        
        0% {
          transform: translateY(-10px) rotate(135deg);
        }
      }
    `;

    hamburger.addEventListener('click', () => {
      if (hamburger.classList.contains('active')) {
        hamburger.classList.add('unactive')
        hamburger.classList.remove('active')
      } else {
        hamburger.classList.add('active')
        hamburger.classList.remove('unactive')
      }
    })

    shadow.appendChild(style);
    shadow.appendChild(hamburger);
  }
}

customElements.define('m-hamburger', MHamburger);

class MHeader extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const active = this.getAttribute('active');

    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
    console.log(localStorage.getItem('user'), 'render')

    const header = document.createElement('header');
    header.innerHTML = `
      <div class="header-container">
  <div class="logo-wrapper">
    <a href="/">
      <img class="logo-img" src="images/logo/langscape_logo_text.png" alt="Logo" />
    </a>
  </div>

  <div class="hamburger-wrapper">
    <m-button class="hamburger-button" variant="primary" auto-width>
      <div style="padding: 12px">
        <m-hamburger class="hamburger-button" />
      </div>
    </m-button>
  </div>

  <div class="action-wrapper">
    <m-button
      variant="secondary"
      onclick="window.open('https://www.zeffy.com/en-US/fundraising/c95056db-d06b-407f-b4ba-5de61442d2e4', '_blank', 'noopener')"
      auto-width
    >
      <div style="margin-inline: 24px;">Donate</div>
    </m-button>

    <div class="auth-dropdown">
      <m-button auto-width id="sign-in-button">
        ${user
          ? `<div class="auth-button"><img src="${user.avatar}" alt="Avatar" /><p>${user.name}</p></div>`
          : `<div style="margin-inline: 24px">Sign In</div>`}
      </m-button>
      ${user ? '<authed-dropdown />' : '<unauthed-dropdown />'}
    </div>
  </div>
</div>

<menu class="nav-menu">
  <li><a data-text="Home" href="/" ${active === 'home' ? 'class="active"' : ''}>Home</a></li>
  <li><a data-text="Programs" href="/programs.html" ${active === 'programs' ? 'class="active"' : ''}>Programs</a></li>
  <li><a data-text="Get Involved" href="/get-involved.html" ${active === 'get-involved' ? 'class="active"' : ''}>Get Involved</a></li>
  <li><a data-text="Events" href="/events.html" ${active === 'events' ? 'class="active"' : ''}>Events</a></li>
  <li><a data-text="News" href="/news.html" ${active === 'news' ? 'class="active"' : ''}>News</a></li>
  <li><a data-text="Contact" href="/contact.html" ${active === 'contact' ? 'class="active"' : ''}>Contact</a></li>
  <li><a data-text="About Us" href="/about-us.html" ${active === 'about-us' ? 'class="active"' : ''}>About Us</a></li>
</menu>
    `;
    const style = document.createElement('style');
    style.textContent = `
      .main-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 124px;
          padding: 0 32px;
          margin: 0;
          position: relative;
      }

      .hamburger-wrapper {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 124px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
      }

      .hamburger-wrapper m-button {
        pointer-events: auto; /* Re-enable interaction */
      }


      header {
        background-color: #FEFEFEFE;
        border-bottom: 1px solid #d9d9d9;
        position: relative;
        z-index: 100;
        height: 124px;
      }

      .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 124px;
        padding: 0 32px;
        position: relative;
      }
       .logo-wrapper,
  .hamburger-wrapper,
  .action-wrapper {
    display: flex;
    align-items: center;
      }

      /* Specific placement */
      .logo-wrapper {
      flex: 1;
      justify-content: flex-start;
      }

      .hamburger-wrapper {
      flex: 1;
      justify-content: center;
      }

      .action-wrapper {
          flex: 1;
          justify-content: flex-end;
          gap: 12px;
      }

      .logo-img {
        height: 48px;
      }

      @keyframes slideDown {
        0% {
          opacity: 0;
          transform: translateY(-10px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes slideUp {
        0% {
          opacity: 1;
          transform: translateY(0);
        }
        100% {
          opacity: 0;
          transform: translateY(-10px);
        }
      }

      .nav-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        margin: 0;
        padding: 0;
        display: none;
        flex-direction: column;
        background-color: #fff;
        z-index: 99;
        border-top: 1px solid #d9d9d9;
        animation: none;
        width: 100%; /* Ensures full width */
        max-height: 80vh; /* prevents full-page takeover */
        overflow-y: auto;
        padding: 0px 0;
      }


      .nav-menu.active {
        display: flex;
        animation: slideDown 0.3s ease-out;
      }

      .nav-menu.inactive {
        animation: slideUp 0.3s ease-in forwards;
      }

      .nav-menu li {
          position: relative;
          margin: 0;
          padding: 12px 0;
          text-align: center;
      }

      .nav-menu li::before
       {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #d9d9d9;
      }

      .nav-menu li:first-child::before {
        display: none; 
      }

      .nav-menu li:not(:first-child)::before {
        top: 0;
      }

      .nav-menu li:not(:last-child)::after {
        bottom: 0;
      }

      .nav-menu a {
        display: inline-block;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 20px;
        color: #074264;
        text-decoration: none;
        padding: 8px 0;
        margin: 0;
        line-height: 1;
      }


      .hamburger-button {
        display: block;
      }

     .button-group {
        display: flex;
        gap: 8px;
        align-items: center;
      }


      ul {
        padding: 0 256px;
        height: 124px;
        display: flex;
        align-items: center;
        position: relative;
      }
      li {
        list-style: none;
      }
     
      
      menu a:before {
        content: attr(data-text);
        color: transparent;
        display: block;
        font-weight: 800;
        height: 0;
      }
      menu a {
        text-decoration: none;
        font-weight: 600;
        font-size: 20px;
        color: #074264;
        height: 32px;
        line-height: 32px;
        display: block;
        text-transform: uppercase;
      }
      menu a:hover {
        font-weight: 800;
      }
      menu a.active {
        color: #6A131F;
      }
      menu a.active:hover {
        color: #6A131F;
        font-weight: 600;
      }
      ul {
        margin: 0;
      }
      ul>li:nth-last-child(3) {
        margin-left: auto;
        margin-right: 12px;
      }
      ul>li:last-child {
        margin-right: 44px;
      }
      .logo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: auto;
      }
      .logo-img {
        height: 48px;
      }
      .auth-dropdown {
        position: relative;
      }
      .auth-dropdown unauthed-dropdown {
        display: none;
      }
      .auth-dropdown authed-dropdown {
        display: none;
      }
      .auth-dropdown:hover unauthed-dropdown {
        display: block;
      }
      .auth-dropdown:hover authed-dropdown {
        display: block;
      }
      .auth-button {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 94px;
        gap: 8px;
        overflow: hidden;
        margin-inline: 8px
      }
      .auth-button img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        flex: 0 0 24px;
      }
      .auth-button p {
        flex: 1 1 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
      }
      m-button > * {
        font-size: 20px;
      }

     @media screen and (max-width: 768px) {
  .header-container {
    padding: 0 8px !important;
  }

  .logo-wrapper {
    flex: 1;
    justify-content: flex-start !important;
  }

  .hamburger-wrapper {
    flex: 0;
    justify-content: center;
  }

  .action-wrapper {
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
    padding-right: 8px;
  }

    /* Adjust inner button size */
  .action-wrapper m-button button {
    min-height: 28px !important;
    min-width: 80px !important;
    font-size: 10px !important;
    padding: 0px 8px !important;
    line-height: 1.1 !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  /* Shrink Sign In content */
  .auth-button {
    max-width: 90px;
    max-height: 32px;
    font-size: 10px;
  }

  .auth-button p {
    font-size: 10px !important;
    line-height: 1 !important;
  }

  .auth-button img {
    width: 16px;
    height: 16px;
    flex: 0 0 16px;
  }

  /* Shrink the "Donate" button text */
  .action-wrapper m-button > div {
    margin-inline: 12px !important;
    font-size: 12px !important;
    padding-block: 2px !important;
  }

  .action-wrapper m-button {
    max-width: 100px;
    overflow: hidden;
  }

  /* Shrink logo */
  .logo-img {
    height: 28px !important;
  }

  /* Shrink hamburger icon */
   .hamburger .stripe {
    width: 14px !important;
    height: 2px !important;
  }

  .hamburger {
    gap: 4px !important;
    transform: scale(0.8);
  }

}


      @media screen and (min-width: 2014px) {
         
        .hamburger-wrapper {
          display: none !important;
          visibility: hidden;
          height: 0;
          width: 0;
          overflow: hidden;
        }

        .nav-menu {
        display: flex !important;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 124px;
        background-color: transparent !important;
        z-index: 0;
        pointer-events: none;
      }

        .nav-menu li {
          padding: 0 16px;
          pointer-events: auto;
        }

        .nav-menu li::before,
        .nav-menu li::after {
          display: none; /* remove horizontal lines */
        }

        .nav-menu a {
          padding: 0;
          margin: 0;
          background: transparent;
        }

        .hamburger-wrapper {
          display: none; /* hide hamburger */
        }
        }

    `;
    const hamburgerButton = header.querySelector('.hamburger-button');
const menu = header.querySelector('.nav-menu');

hamburgerButton.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    menu.classList.add('inactive');

    // Hide after animation completes
    setTimeout(() => {
      menu.style.display = 'none';
    }, 300); // Match the duration of slideUp animation
  } else {
    menu.classList.remove('inactive');
    menu.style.display = 'flex'; // Show before animating
    menu.classList.add('active');
  }
});

    shadow.appendChild(style);
    shadow.appendChild(header);
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#sign-in-button').onclick = () => {
    if (localStorage.getItem('user')) {
  localStorage.removeItem('user');
} else {
  // Temporarily use email placeholder if not integrating backend yet
  const email = localStorage.getItem('loginEmail') || 'user@example.com';
localStorage.setItem('user', JSON.stringify({
  avatar: 'images/logo/logo.png',
  name: email
}));

}

      setTimeout(() => location.reload(), 1000)
    }
  }
}

customElements.define('m-header', MHeader);
