import { LitElement, html, css } from "lit";
import { shared } from "../styles.js";

// In-panel confirmation (browser confirm() dialogs block the HA frontend).
class MmConfirmDialog extends LitElement {
  static properties = { t: { attribute: false }, _text: { state: true } };

  ask(text) {
    this._text = text;
    return new Promise((resolve) => (this._resolve = resolve));
  }

  _answer(value) {
    this._text = null;
    this._resolve?.(value);
    this._resolve = null;
  }

  render() {
    if (!this._text) return html``;
    return html`
      <div class="backdrop" @click=${() => this._answer(false)}></div>
      <div class="dialog" role="alertdialog">
        <div class="text">${this._text}</div>
        <div class="buttons">
          <button class="btn" @click=${() => this._answer(false)}>${this.t("cancel")}</button>
          <button class="btn primary" @click=${() => this._answer(true)}>${this.t("confirm")}</button>
        </div>
      </div>
    `;
  }

  static styles = [
    shared,
    css`
      .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 200;
      }
      .dialog {
        position: fixed;
        z-index: 201;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: min(420px, 92vw);
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
      }
      .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 20px;
      }
    `,
  ];
}

customElements.define("mm-confirm-dialog", MmConfirmDialog);
