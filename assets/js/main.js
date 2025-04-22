/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show")
    })
  }
}
showMenu("nav-toggle", "nav-menu")

/*===== ACTIVE AND REMOVE MENU =====*/
const navLinks = document.querySelectorAll(".nav__link")

function linkAction() {
  // Active link
  navLinks.forEach((n) => n.classList.remove("active-link"))
  this.classList.add("active-link")

  // Remove menu mobile
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show")
}

navLinks.forEach((n) => n.addEventListener("click", linkAction))

/*===== SCROLL REVEAL ANIMATION =====*/
const ScrollReveal = window.ScrollReveal
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
})

/*SCROLL HOME*/
sr.reveal(".home__title", {})
sr.reveal(".home__description", { delay: 200 })
sr.reveal(".button", { delay: 200 })
sr.reveal(".home__img", { delay: 400 })
sr.reveal(".home__social-icon", { interval: 200 })

/*SCROLL ABOUT*/
sr.reveal(".about__img", {})
sr.reveal(".about__subtitle", { delay: 200 })
sr.reveal(".about__text", { delay: 400 })

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", {})
sr.reveal(".skills__text", { delay: 200 })
sr.reveal(".skills__data", { interval: 200 })
sr.reveal(".skills__img", { delay: 400 })

/*SCROLL WORK*/
sr.reveal(".work__item", { interval: 200 })

/*SCROLL CONTACT*/
sr.reveal(".contact__subtitle", {})
sr.reveal(".contact__text", { delay: 200 })
sr.reveal(".contact__info-item", { interval: 200 })
sr.reveal(".contact__form", { delay: 400 })

/*===== FORM SUBMISSION =====*/
const contactForm = document.getElementById("contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    // Here you would typically send the form data to a server
    console.log("Form submitted:", { name, email, message })

    // Show success message
    alert("Mensagem enviada com sucesso!")

    // Reset form
    this.reset()
  })
}

/*===== CURRENT YEAR =====*/
document.getElementById("current-year").textContent = new Date().getFullYear()
