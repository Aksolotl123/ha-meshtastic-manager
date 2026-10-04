import { LitElement, html, css } from "lit";
import { shared } from "../styles.js";
import { humanize } from "../i18n.js";

// Fields whose value should be masked by default.
const SECRET = new Set(["private_key", "password", "psk"]);

// Generic editor for a protobuf message described by the backend schema.
class MmProtoForm extends LitElement {
  static properties = {
    schema: { attribute: false },
    value: { attribute: false },
    _reveal: { state: true },
  };

  constructor() {
    super();
    this._reveal = new Set();
  }

  _emit(value) {
    this.value = value;
    this.dispatchEvent(new CustomEvent("value-changed", { detail: { value } }));
  }

  _set(name, v) {
    this._emit({ ...(this.value || {}), [name]: v });
  }

  render() {
    if (!this.schema) return html``;
    const value = this.value || {};
    return html`<div class="form">${this.schema.map((f) => this._field(f, value[f.name]))}</div>`;
  }

  _field(f, v) {
    const label = humanize(f.name);
    if (f.type === "message" && !f.repeated) {
      return html`<fieldset>
        <legend>${label}</legend>
        <mm-proto-form
          .schema=${f.fields}
          .value=${v || {}}
          @value-changed=${(e) => {
            e.stopPropagation();
            this._set(f.name, e.detail.value);
          }}
        ></mm-proto-form>
      </fieldset>`;
    }
    if (f.repeated) return this._repeated(f, v || [], label);
    switch (f.type) {
      case "bool":
        return html`<label class="field bool">
          <input type="checkbox" .checked=${!!v} @change=${(e) => this._set(f.name, e.target.checked)} />
          <span>${label}</span>
        </label>`;
      case "enum":
        return html`<label class="field">
          <span>${label}</span>
          <select @change=${(e) => this._set(f.name, e.target.value)}>
            ${f.options.map((o) => html`<option value=${o} ?selected=${o === v}>${o}</option>`)}
          </select>
        </label>`;
      case "int":
      case "uint":
      case "float":
        return html`<label class="field">
          <span>${label}</span>
          <input
            type="number"
            step=${f.type === "float" ? "any" : "1"}
            min=${f.type === "uint" ? "0" : ""}
            .value=${v ?? 0}
            @change=${(e) => this._set(f.name, e.target.value === "" ? 0 : Number(e.target.value))}
          />
        </label>`;
      default: {
        const secret = SECRET.has(f.name) && !this._reveal.has(f.name);
        return html`<label class="field">
          <span>${label}${f.type === "bytes" ? html` <span class="muted small">(base64)</span>` : ""}</span>
          <span class="row">
            <input
              class="grow"
              type=${secret ? "password" : "text"}
              .value=${v ?? ""}
              @change=${(e) => this._set(f.name, e.target.value)}
            />
            ${SECRET.has(f.name)
              ? html`<button
                  class="icon"
                  type="button"
                  @click=${() => {
                    const r = new Set(this._reveal);
                    r.has(f.name) ? r.delete(f.name) : r.add(f.name);
                    this._reveal = r;
                  }}
                >
                  <ha-icon icon=${secret ? "mdi:eye" : "mdi:eye-off"}></ha-icon>
                </button>`
              : ""}
          </span>
        </label>`;
      }
    }
  }

  _repeated(f, list, label) {
    if (f.type === "message") {
      return html`<label class="field">
        <span>${label} <span class="muted small">(JSON)</span></span>
        <textarea
          rows="3"
          .value=${JSON.stringify(list, null, 1)}
          @change=${(e) => {
            try {
              this._set(f.name, JSON.parse(e.target.value));
            } catch {
              /* keep previous value */
            }
          }}
        ></textarea>
      </label>`;
    }
    const numeric = ["int", "uint", "float"].includes(f.type);
    return html`<label class="field">
      <span>${label} <span class="muted small">(${f.type === "bytes" ? "base64, " : ""}one per line)</span></span>
      <textarea
        rows="2"
        .value=${list.join("\n")}
        @change=${(e) => {
          const items = e.target.value
            .split("\n")
            .map((s) => s.trim())
            .filter(Boolean)
            .map((s) => (numeric ? Number(s) : s));
          this._set(f.name, items);
        }}
      ></textarea>
    </label>`;
  }

  static styles = [
    shared,
    css`
      .form {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 12px 16px;
        align-items: end;
      }
      .field {
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 0;
      }
      .field > span:first-child {
        font-size: 0.85em;
        color: var(--secondary-text-color);
      }
      .field.bool {
        flex-direction: row;
        align-items: center;
        gap: 8px;
        min-height: 36px;
      }
      .field.bool > span {
        font-size: 1em;
        color: var(--primary-text-color);
      }
      fieldset {
        grid-column: 1 / -1;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 12px;
        margin: 0;
      }
      legend {
        padding: 0 6px;
        color: var(--secondary-text-color);
      }
      textarea {
        resize: vertical;
        font-family: var(--code-font-family, monospace);
        font-size: 0.85em;
      }
    `,
  ];
}

customElements.define("mm-proto-form", MmProtoForm);
