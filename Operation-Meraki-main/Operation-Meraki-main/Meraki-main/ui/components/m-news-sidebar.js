class MNewsSidebar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          flex: 1;
          min-width: 260px;
          margin-top: 12px;
        }

        h2 {
          font-weight: 700;
          font-size: 24px;
          color: #074264;
          margin-bottom: 24px;
        }

        .search-box {
          display: flex;
          align-items: center;
          border: 2px solid #D9D9D9;
          border-radius: 8px;
        }

        .seperator {
          height: 2px;
          background: #1C5A798C;
          margin: 24px 0;
        }

        .search-box input {
          width: 100%;
          padding: 6px 10px;
          outline: none;
          font-size: 1rem;
          border: none;
        }

        .search-box button {
          border: none;
          cursor: pointer;
          background: none;
          padding: 4px 8px 4px 0;
        }

        .categories {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .categories li {
          margin-bottom: 24px;
        }

        .categories a {
          font-weight: 500;
          font-size: 16px;
          color: #074264;
          text-decoration: none;
        }

        .categories a:hover {
          color: #6A131F;
        }

        .social-media {
          display: flex;
          gap: 12px;
        }

        .social-media a {
          flex: 0 0 auto;
          text-decoration: none;
          width: 40px;
          height: 40px;
        }
      </style>
      <div>
        <h2>Search</h2>
        <div class="search-box">
          <input type="text" placeholder="(Type here)" />
          <button><img src="images/news/search.svg" alt="search" /></button>
        </div>
        <div class="seperator"></div>
        <h2>Categories</h2>
        <ul class="categories">
          <li><a href="#">Photography</a></li>
          <li><a href="../events.html">Events</a></li>
          <li><a href="../rebuild.html">Gardening</a></li>
          <li><a href="#">Helpful Tips</a></li>
          <li><a href="../get-involved.html#Volunteer">Caring for Veterans</a></li>
          <li><a href="#">Career Talk</a></li>
          <li><a href="../about-us.html">Our Story</a></li>
          <li><a href="../refocus.html">Cohort Photography</a></li>
        </ul>
        <div class="seperator"></div>
        <h2>Share</h2>
       <div class="social-media">
        <a href="https://www.linkedin.com/company/operation-meraki/" target="_blank" rel="noopener">
          <img src="images/socialmedia/linkedin-blue.svg" alt="LinkedIn" />
        </a>
        <a href="https://www.facebook.com/operationmeraki/" target="_blank" rel="noopener">
          <img src="images/socialmedia/facebook-blue.svg" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/operationmeraki?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener">
          <img src="images/socialmedia/instagram-blue.svg" alt="Instagram" />
        </a>
        <a href="https://x.com/operationmeraki" target="_blank" rel="noopener">
          <img src="images/socialmedia/x-blue.svg" alt="X" />
        </a>
        <a href="mailto:information@operationmeraki.org" target="_blank" rel="noopener">
          <img src="images/socialmedia/mail-blue.svg" alt="Email" />
        </a>
        <a href="sms:+18669578940">
          <img src="images/socialmedia/text-blue.svg" alt="Text" />
        </a>
      </div>

      </div>
    `;
  }
}

customElements.define('m-news-sidebar', MNewsSidebar);
