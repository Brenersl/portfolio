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

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    const sectionId = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__link[href*=" + sectionId + "]").classList.add("active-link")
    } else {
      document.querySelector(".nav__link[href*=" + sectionId + "]").classList.remove("active-link")
    }
  })
}
window.addEventListener("scroll", scrollActive)

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

/*SCROLL EXPERIENCES*/
sr.reveal(".experience__item", { interval: 300 })
sr.reveal(".experience__title", { delay: 200 })
sr.reveal(".experience__company", { delay: 300 })
sr.reveal(".experience__list-item", { interval: 100 })
sr.reveal(".experience__skills", { delay: 600 })
sr.reveal(".experience__demo", { delay: 800 })

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", {})
sr.reveal(".skills__text", { delay: 200 })
sr.reveal(".skills__data", { interval: 200 })
sr.reveal(".skills__list", { delay: 400 })

/*SCROLL PROJECTS*/
sr.reveal(".project__item", { interval: 200 })

/*SCROLL CONTACT*/
sr.reveal(".contact__subtitle", {})
sr.reveal(".contact__text", { delay: 200 })
sr.reveal(".contact__info-item", { interval: 200 })

/*===== CURRENT YEAR =====*/
document.getElementById("current-year").textContent = new Date().getFullYear()

/*===== PROJECT MODAL =====*/
function openProjectModal() {
  const modal = document.getElementById("project-modal")
  modal.classList.add("show")
  document.body.style.overflow = "hidden" // Prevent background scrolling
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal")
  modal.classList.remove("show")
  document.body.style.overflow = "auto" // Restore scrolling
}

/*===== CAROUSEL =====*/
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all carousels
  const carousels = document.querySelectorAll(".carousel__container")

  carousels.forEach((carousel) => {
    const id = carousel.id
    const slides = carousel.querySelectorAll(".carousel__slide")
    const dots = document.querySelectorAll(`.carousel__dot[data-carousel="${id}"]`)
    const prevBtn = document.querySelector(`.carousel__btn--prev[data-carousel="${id}"]`)
    const nextBtn = document.querySelector(`.carousel__btn--next[data-carousel="${id}"]`)

    let currentSlide = 0

    // Set first slide as active initially
    slides[0].classList.add("active")

    // Function to show a specific slide
    function showSlide(index) {
      // Hide all slides
      slides.forEach((slide) => {
        slide.classList.remove("active")
      })

      // Show the selected slide
      slides[index].classList.add("active")

      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index)
      })

      currentSlide = index
    }

    // Event listeners for dots
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        showSlide(i)
      })
    })

    // Event listeners for prev/next buttons
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        let index = currentSlide - 1
        if (index < 0) index = slides.length - 1
        showSlide(index)
      })
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        let index = currentSlide + 1
        if (index >= slides.length) index = 0
        showSlide(index)
      })
    }
  })

  // Close modal when clicking outside
  const modal = document.getElementById("project-modal")

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeProjectModal()
      }
    })
  }

  // Close modal with ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal()
    }
  })
})