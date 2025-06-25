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
          <div class="dropdown-items">
            <a href="">Profile</a>
            <a href="">Account settings</a>
            <a href="">Switch account</a>
            <a href="">Logout</a>
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
        font-size: 16px;
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
        font-size: 16px;
        font-weight: 600;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(dropdown);
  }
}

customElements.define('unauthed-dropdown', UnauthedDropdown);

class MHeader extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const active = this.getAttribute('active');

    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
    console.log(localStorage.getItem('user'), 'render')

    const header = document.createElement('header');
    header.innerHTML = `
      <ul>
        <li class="logo">
          <a href="/">
            <img class="logo-img" src="images/logo/langscape_logo_text.png" alt="Logo" />
          </a>
        </li>
        <li>
          <a data-text="Home" href="/" ${active === 'home' ? 'class="active"' : ''}>Home</a>
        </li>
        <li>
          <a data-text="Programs" href="/programs.html" ${active === 'programs' ? 'class="active"' : ''}>Programs</a>
        </li>
        <li>
          <a data-text="Get Involved" href="/get-involved.html" ${active === 'get-involved' ? 'class="active"' : ''}>Get Involved</a>
        </li>
        <li>
          <a data-text="Events" href="/events.html" ${active === 'events' ? 'class="active"' : ''}>Events</a>
        </li>
        <li>
          <a data-text="News" href="/news.html" ${active === 'news' ? 'class="active"' : ''}>News</a>
        </li>
        <li>
          <a data-text="Contact" href="/contact.html" ${active === 'contact' ? 'class="active"' : ''}>Contact</a>
        </li>
        <li>
          <a data-text="About Us" href="/about-us.html" ${active === 'about-us' ? 'class="active"' : ''}>About Us</a>
        </li>
        <li>
          <m-button
            variant="secondary"
            onclick="window.open('https://www.zeffy.com/en-US/fundraising/c95056db-d06b-407f-b4ba-5de61442d2e4', '_blank', 'noopener')"
            style="margin-right: 12px;"
            auto-width
          >
            <div style="margin-inline: 24px;">Donate</div>
          </m-button>
        </li>
        <li>
          <div class="auth-dropdown">
            <m-button auto-width id="sign-in-button">
              ${user
                ? `<div class="auth-button">
                      <img src="${user.avatar}" alt="Avatar" />
                      <p>${user.name}</p>
                    </div>`
                : `<div style="margin-inline: 24px">Sign In</div>`}
            </m-button>

            ${user ? '<authed-dropdown />' : '<unauthed-dropdown />'}
          </div>
        </li>
      </ul>
    `;
    const style = document.createElement('style');
    style.textContent = `
      header {
        background-color: #FEFEFEFE;
        border-bottom: 1px solid #d9d9d9;
        position: sticky;
        top: 0;
        z-index: 100;
      }
      ul {
        width: 1440px;
        margin: 0 auto;
        height: 67px;
        display: flex;
        align-items: center;
      }
      li {
        list-style: none;
      }
      li:not(.logo):not(:last-child):not(:nth-last-child(2)) {
        padding-left: 32px;
        padding-right: 32px;
        text-align: center;
      }
      li:not(.logo):not(:last-child):not(:nth-last-child(2)) a:before {
        content: attr(data-text);
        color: transparent;
        display: block;
        font-weight: 800;
        height: 0;
      }
      li:not(.logo) a {
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        color: #074264;
        height: 32px;
        line-height: 32px;
        display: block;
      }
      li:not(.logo) a:hover {
        font-weight: 800;
      }
      li:not(.logo) a.active {
        color: #6A131F;
      }
      li:not(.logo) a.active:hover {
        color: #6A131F;
        font-weight: 600;
      }
      li:nth-last-child(2) {
        margin-left: auto;
        margin-right: 4px;
      }
      li:last-child {
        margin-right: 84px;
      }
      .logo {
        display: flex;
        align-items: center;
        margin-left: 68px;
        margin-right: 32px;
      }
      .logo-img {
        height: 32px;
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
      }
    `;
    shadow.appendChild(style);
    shadow.appendChild(header);
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#sign-in-button').onclick = () => {
      if (localStorage.getItem('user')) {
        localStorage.removeItem('user')
      } else {
        localStorage.setItem('user', JSON.stringify({
          avatar: 'images/logo/logo.png',
          name: 'Registered User1'
        }))
      }
      setTimeout(() => location.reload(), 1000)
    }
  }
}

customElements.define('m-header', MHeader);
