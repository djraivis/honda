/** Renders demo content into #demo — replace or extend as the app grows. */
export function initDemoList() {
  const cars = ["BMW", "Volvo", "Saab", "Ford"]
  const len = cars.length

  let text = ""
  for (let i = 0; i < len; i++) {
    text += cars[i] + "<br>"
  }

  const demo = document.getElementById("demo")
  if (demo) demo.innerHTML = text
}
