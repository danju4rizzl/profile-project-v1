// import all bootstraps js and our scss
import "../scss/style.scss"
import * as bootstrap from "bootstrap"

// import the skills progress bar js
import updateProgress from "./skills"

// Select all the skill bars
const skillBars = document.querySelectorAll("[data-skill]")

// Update the skillBars only when the user scrolls the page
window.addEventListener("scroll", updateProgress(skillBars))
