import { html, css, LitElement } from 'lit-element';

export class PresentationSlide extends LitElement {
  static get properties() {
    return {
      title: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.title = 'Juan Blasco';
  }

  static get styles() {
    return css`
      :host {
        color: red;
      }
    `;
  }

  render() {
    return html`
      <div>This is the first slide</div>
    `;
  }
}
