/** Cross-cutting UI tweaks (themes, layouts, portals) beyond single-feature scripts. */
export function initUi() {
  const status = document.getElementById("status")
  if (status) status.textContent = "Loaded: state, storage, ui, demo-list, counter"
}
