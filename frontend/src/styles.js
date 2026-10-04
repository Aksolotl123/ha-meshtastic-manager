import { css } from "lit";

export const shared = css`
  :host {
    color: var(--primary-text-color);
    font-family: var(--ha-font-family-body, Roboto, sans-serif);
  }
  .card {
    background: var(--card-background-color, #fff);
    border-radius: var(--ha-card-border-radius, 12px);
    border: 1px solid var(--ha-card-border-color, var(--divider-color, #e0e0e0));
    box-shadow: var(--ha-card-box-shadow, none);
    padding: 16px;
  }
  .card h2 {
    margin: 0 0 12px;
    font-size: 1.1em;
    font-weight: 500;
  }
  .muted {
    color: var(--secondary-text-color);
  }
  .small {
    font-size: 0.85em;
  }
  .row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .grow {
    flex: 1;
    min-width: 0;
  }
  dl.kv {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 6px 16px;
    margin: 0;
  }
  dl.kv dt {
    color: var(--secondary-text-color);
  }
  dl.kv dd {
    margin: 0;
    overflow-wrap: anywhere;
  }
  button.btn {
    font: inherit;
    border: 1px solid var(--divider-color);
    background: var(--card-background-color);
    color: var(--primary-text-color);
    border-radius: 8px;
    padding: 6px 12px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  button.btn:hover:not(:disabled) {
    background: var(--secondary-background-color, rgba(127, 127, 127, 0.1));
  }
  button.btn:disabled {
    opacity: 0.5;
    cursor: default;
  }
  button.btn.primary {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }
  button.btn.danger {
    color: var(--error-color, #db4437);
    border-color: var(--error-color, #db4437);
  }
  button.icon {
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;
    padding: 4px;
    border-radius: 50%;
    display: inline-flex;
  }
  input,
  select,
  textarea {
    font: inherit;
    color: var(--primary-text-color);
    background: var(--input-fill-color, var(--secondary-background-color, transparent));
    border: 1px solid var(--divider-color);
    border-radius: 6px;
    padding: 6px 8px;
    box-sizing: border-box;
  }
  input:focus,
  select:focus,
  textarea:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: -1px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th,
  td {
    text-align: left;
    padding: 6px 8px;
    border-bottom: 1px solid var(--divider-color);
    white-space: nowrap;
  }
  th {
    font-weight: 500;
    color: var(--secondary-text-color);
    cursor: pointer;
    user-select: none;
  }
  tr.clickable {
    cursor: pointer;
  }
  tr.clickable:hover {
    background: var(--secondary-background-color, rgba(127, 127, 127, 0.08));
  }
  .badge {
    display: inline-block;
    min-width: 18px;
    padding: 0 6px;
    border-radius: 9px;
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    font-size: 0.75em;
    line-height: 18px;
    text-align: center;
  }
  .chip {
    display: inline-block;
    padding: 1px 8px;
    border-radius: 10px;
    font-size: 0.8em;
    background: var(--secondary-background-color, rgba(127, 127, 127, 0.15));
  }
  .ok {
    color: var(--success-color, #43a047);
  }
  .warn {
    color: var(--warning-color, #ffa600);
  }
  .err {
    color: var(--error-color, #db4437);
  }
  .avatar {
    flex: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: 600;
    color: #fff;
    overflow: hidden;
  }
`;

// Stable color for a node avatar.
export function nodeColor(num) {
  const hue = (Math.imul(num >>> 0, 2654435761) >>> 0) % 360;
  return `hsl(${hue}, 55%, 45%)`;
}
