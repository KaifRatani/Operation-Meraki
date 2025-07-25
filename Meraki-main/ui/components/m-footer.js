import './m-button.js';

class MFooter extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const footer = document.createElement('footer');
    footer.innerHTML = `
      <nav>
        <div class="logo">
          <img src="images/logo/landscape_logo_text_white.png" alt="Langscape Logo" />
        </div>
        <div>
          <h3>Programs</h3>
          <ul>
            <li>
              <a href="/reset.html">Bridge-Reset</a>
            </li>
            <li>
              <a href="/rebuild.html">Bridge-Rebuild</a>
            </li>
            <li>
              <a href="/refocus.html">Build-Refocus</a>
            </li>
            <li>
              <a href="/re-engage.html">Build-ReEngage</a>
            </li>
            <li>
              <a href="/replant.html">Build-RePlant</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Get Involved</h3>
          <ul>
            <li>
              <a href="/reset.html">Board of Directors</a>
            </li>
            <li>
              <a href="/rebuild.html">Become a Volunteer</a>
            </li>
            <li>
              <a href="/refocus.html">Financial Support</a>
            </li>
            <li>
              <a href="/re-engage.html">Camera and field equipment donation</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Subscribe Now</h3>
          <form>
            <p>Stay informed on what we’re doing and opportunities. </p>
            <input type="email" placeholder="(Enter Email)" /><div class="input-extra">
              <m-button variant="ghost">Submit</m-button>
            </div>
          </form>
          <section class="social-media">
            <i>
              <img src="images/socialmedia/x.svg" alt="X" />
            </i>
            <i>
              <img src="images/socialmedia/instagram.svg" alt="Instagram" />
            </i>
            <i>
              <img src="images/socialmedia/facebook.svg" alt="Youtube" />
            </i>
            <i>
              <img src="images/socialmedia/linkedin.svg" alt="LinkedIn" />
            </i>
          </section>
        </div>
      </nav>
      <nav class="second-footer">
        <div class="copyright">2024 Operation Meraki</div>
        <div>
          <a href="/privacy-policy.html">Privacy Policy</a>
        </div>
        <div>
          <a href="/terms-of-use.html">Terms of Use</a>
        </div>
        <div>
          <a href="/contact.html">Contact Us</a>
        </div>
        <div>
          <a href="/about-us.html">About Us</a>
        </div>
      </nav>
    `;

    const style = document.createElement('style');
    style.textContent = `
      footer {
        background-color: #074264;
        padding-block: 0.05px;
      }

      nav {
        width: 1440px;
        margin: 58px auto 0;
        display: flex;
        flex-direction: row;
      }

      .logo {
        padding-top: 96px;
      }

      .logo img {
        height: 50px;
      }

      nav>div:nth-child(1) {
        width: 292px;
        margin-left: 65px;
      }
      nav>div:nth-child(2) {
        width: 227px;
      }
      nav>div:nth-child(3) {
        width: 378px;
      }

      nav h3 {
        font-weight: 600;
        font-size: 16px;
        color: #FEFEFEFE;
      }

      nav ul {
        padding: 0;
        margin-top: 36px;
      }

      nav li {
        list-style: none;
      }

      nav a {
        font-weight: 500;
        font-size: 16px;
        color: #FEFEFEFE;
        text-decoration: none;
      }

      nav a:hover {
        text-decoration: underline;
      }

      nav li+li {
        margin-top: 12px;
      }

      form {
        margin-top: 36px;
      }

      form p {
        font-weight: 400;
        font-size: 18px;
        color: #FEFEFEFE;
      }

      input {
        width: 349px;
        height: 42px;
        border-radius: 12px 0 0 12px;
        background-color: #FEFEFEFE;
        border: none;
        padding-left: 16px;
      }

      .input-extra {
        width: 87px;
        height: 42px;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        background-color: #B22035;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      
      .social-media {
        display: flex;
        flex-direction: row;
        gap: 24px;
        margin-top: 24px;
      }

      .social-media i {
        width: 40px;
        height: 40px;
        border-radius: 999px;
        border: 1px solid #FEFEFEFE;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      
      .social-media i {
        cursor: pointer;
      }

      .second-footer {
        margin: 80px auto 18px;
        font-weight: 500;
        font-size: 16px;
        color: #FEFEFEFE;
      }

      .second-footer div:nth-child(3) {
        width: 222px;
      }

      .second-footer div:nth-child(4) {
        width: 207px;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(footer)
  }
}

customElements.define('m-footer', MFooter);
