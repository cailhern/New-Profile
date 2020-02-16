import { LitElement, html, css } from 'lit-element';
import '../../presentation-slide/presentation-slide.js';

export class AppProfileJuan extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
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
      <presentation-slide></presentation-slide>
    `;
  }
}
