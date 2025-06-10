class MButton extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const button = document.createElement('button');
    button.textContent = this.textContent;
    button.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('click'));
    });

    const style = document.createElement('style');
    const sharedStyles = `
      button {
        min-height: 45px;
        min-width: 144px;
        border-radius: 5px;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        text-align: center;
        cursor: pointer;
      }
    `;
    if (this.variant === 'primary') {
      style.textContent = `${sharedStyles}
        button {
          background-color: #1C5A79;
          color: white;
          box-shadow: 2px 4px 4px 0px #0223351F;
        }
      `;
    } else if (this.variant === 'secondary') {
      style.textContent = `${sharedStyles}
        button {
          background-color: white;
          color: #1C5A79;
          border: 2px solid #1C5A79;
          box-shadow: 2px 4px 4px 0px #0223351F;
        }
      `;
    } else if (this.variant === 'ghost') {
      style.textContent = `${sharedStyles}
        button {
          background-color: transparent;
          color: white;
          border: 1px solid white;
        }
      `;
    } else {
      style.textContent = `${sharedStyles}
        button {
          background-color: #6c757d;
        }
      `;
    }

    shadow.appendChild(style);
    shadow.appendChild(button);
  }
}

customElements.define('m-button', MButton);
