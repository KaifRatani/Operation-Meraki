import './m-button.js';

class MFooter extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const footer = document.createElement('footer');
    footer.innerHTML = `
      <nav class="main-footer">
      <div class="footer-logo">
        <div class="logo">
          <img src="images/logo/landscape_logo_text_white.png" alt="Langscape Logo" />
        </div>
      </div>

      <div class="footer-programs">
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
              <a href="/reengage.html">Build-ReEngage</a>
            </li>
            <li>
              <a href="/replant.html">Build-RePlant</a>
            </li>
          </ul>
        </div>

        <div class="get-involved">
          <h3>Get Involved</h3>
          <ul>
            <li>
              <a href="/get-involved.html#Directors">Board of Directors</a>
            </li>
            <li>
              <a href="/get-involved.html#Volunteer">Become a Volunteer</a>
            </li>
           <li>
              <a href="https://www.zeffy.com/en-US/fundraising/c95056db-d06b-407f-b4ba-5de61442d2e4" target="_blank" rel="noopener">
                Financial Support
              </a>
            </li>
            <li>
              <a href="/get-involved.html#Equipment">Camera and field equipment donation</a>
            </li>
          </ul>
        </div>


        <div class="footer-bottom">
          <h3>Subscribe Now</h3>
        <form>
          <p>Stay informed on what we’re doing and opportunities.</p>
          <input type="email" placeholder="(Enter Email)" required />
          <div class="input-extra">
            <m-button variant="ghost">Submit</m-button>
          </div>
        </form>

         <section class="social-media">
  <i>
    <a href="https://x.com/operationmeraki" target="_blank" rel="noopener">
      <img src="images/socialmedia/x.svg" alt="X" />
    </a>
  </i>
  <i>
    <a href="https://www.instagram.com/operationmeraki?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener">
      <img src="images/socialmedia/instagram.svg" alt="Instagram" />
    </a>
  </i>
  <i>
    <a href="https://www.facebook.com/operationmeraki/" target="_blank" rel="noopener">
      <img src="images/socialmedia/facebook.svg" alt="Facebook" />
    </a>
  </i>
  <i>
    <a href="https://www.linkedin.com/company/operation-meraki/" target="_blank" rel="noopener">
      <img src="images/socialmedia/linkedin.svg" alt="LinkedIn" />
    </a>
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
      
          * {
      box-sizing: border-box;
      max-width: 100%;
    }
      
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }



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
        padding-left: 0;
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
      margin-top: 8px;
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

      @media (max-width: 1024px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 100%;
    padding: 0 24px;
    box-sizing: border-box;
    margin: 0 auto;
  }

  nav > div {
    width: 100%;
    margin-bottom: 32px;
  }

  .logo {
    width: 100%;
    text-align: center;
    margin-top: 40px;
    padding-top: 0;
  }

  .logo img {
    height: 75px;
    margin: 0 auto;
    display: block;
  }

  nav h3 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  nav ul {
    padding-left: 0;
    text-align: left;
  }

  nav li {
    font-size: 16px;
    margin-bottom: 12px;
    text-align: left;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
  }

  input[type="email"],
  input[type="text"] {
    width: 100%;
    height: 38px;
    font-size: 15px;
    padding-left: 12px;
    box-sizing: border-box;
    border-radius: 8px;
  }

  .input-extra {
    width: 120px;
    height: 38px;
    border-radius: 8px;
    background-color: #B22035;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .social-media {
    display: flex;
    justify-content: flex-start;
    margin-top: 24px;
    gap: 20px;
  }

  .second-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 15px;
    gap: 10px;
    padding: 16px;
    box-sizing: border-box;
  }

  .second-footer div {
    margin: 4px 0;
  }
}
      @media (max-width: 768px) {
  footer {
    padding-block: 0 !important;
    margin-top: 0 !important;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    max-width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    margin-top: 0 !important;
    text-align: left;
  }

  nav > div {
    width: 100%;
    margin-bottom: 40px;
  }

  .logo {
    width: 100%;
    text-align: center;
    margin: 40px 0;
    padding-top: 0 !important;
  }

  .logo img {
    height: 75px;
    width: auto;
    display: block;
    margin: 10px auto;
  }

  nav h3 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 16px;
    text-align: left;
  }

  .programs,
  .get-involved {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 8px;
  }

  nav ul {
    padding-left: 0;
    margin: 0;
    text-align: left;
  }

  nav li {
    font-size: 15px;
    line-height: 1.4;
    margin-bottom: 10px;
    list-style: none;
    text-align: left;
  }

  nav p {
    font-size: 15px;
    margin-bottom: 12px;
    line-height: 1.5;
    text-align: left;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
  }

  input[type="email"],
  input[type="text"] {
    width: 100%;
    height: 34px;
    font-size: 14px;
    padding-left: 12px;
    border-radius: 8px;
    box-sizing: border-box;
  }

  .input-extra {
    width: 100px;
    height: 36px;
    border-radius: 8px;
    background-color: #B22035;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input-extra m-button::part(button),
  .input-extra m-button button {
    all: unset;
    width: 100%;
    height: 100%;
    color: #FEFEFE;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
  }

  .social-media {
    display: flex;
    justify-content: flex-start;
    margin-top: 24px;
    gap: 16px;
  }

  .social-media i {
    width: 36px;
    height: 36px;
    border-radius: 999px;
    border: 1px solid #FEFEFE;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .second-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    font-size: 14px;
    padding: 16px;
    box-sizing: border-box;
  }

  .second-footer div {
    margin: 4px 0;
  }
}

@media (max-width: 480px)  {
  footer {
    padding-block: 0 !important;
    margin-top: 0 !important;
  }

  nav {
    padding: 0 12px;
    box-sizing: border-box;
  }

  .logo img {
    height: 60px;
    width: auto;
    display: block;
    margin: 12px auto;
  }

  nav h3 {
    font-size: 18px;
    margin-bottom: 12px;
  }

  nav li {
    font-size: 14px;
    margin-bottom: 8px;
  }

  nav p {
    font-size: 14px;
    line-height: 1.4;
  }

  form {
    gap: 8px;
  }

  input[type="email"],
  input[type="text"] {
    width: 100%;
    height: 32px;
    font-size: 13px;
    padding-left: 10px;
    border-radius: 6px;
    box-sizing: border-box;
  }

  .input-extra {
    width: 100%;
    height: 36px;
    font-size: 13px;
    border-radius: 6px;
    background-color: #B22035;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input-extra m-button::part(button),
  .input-extra m-button button {
    all: unset;
    width: 100%;
    height: 100%;
    color: #FEFEFE;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
  }

  .social-media {
    gap: 12px;
  }

  .social-media i {
    width: 30px;
    height: 30px;
  }

  .second-footer {
    font-size: 13px;
    padding: 12px;
    gap: 6px;
    text-align: center;
  }

  .second-footer div {
    margin: 3px 0;
  }
}


}




    `;

    shadow.appendChild(style);
    shadow.appendChild(footer)
  }
}

customElements.define('m-footer', MFooter);
