import { LitElement, html, css } from 'lit-element';

export class AppProfileJuan extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        background-color: #131313;
        color: #fff;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'Juan Blasco';
  }

  render() {
    return html`
      <h1>Juan Blasco</h1>
    `;
  }
}
