const cars = ["BMW", "Volvo", "Saab", "Ford"]
let len = cars.length

let text = ""
for (let i = 0; i < len; i++) {
  text += cars[i] + "<br>"
}

const demo = document.getElementById("demo")
if (demo) demo.innerHTML = text
