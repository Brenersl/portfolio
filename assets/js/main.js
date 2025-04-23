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
sr.reveal(".skills__list", { delay: 400 })

/*SCROLL PROJECTS*/
sr.reveal(".project__item", { interval: 200 })

/*SCROLL CONTACT*/
sr.reveal(".contact__subtitle", {})
sr.reveal(".contact__text", { delay: 200 })
sr.reveal(".contact__info-item", { interval: 200 })
sr.reveal(".contact__form", { delay: 400 })

/*===== CURRENT YEAR =====*/
document.getElementById("current-year").textContent = new Date().getFullYear()

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

    // Auto-rotate carousel
    let interval = setInterval(() => {
      let index = currentSlide + 1
      if (index >= slides.length) index = 0
      showSlide(index)
    }, 5000)

    // Pause auto-rotation on hover
    carousel.addEventListener("mouseenter", () => {
      clearInterval(interval)
    })

    carousel.addEventListener("mouseleave", () => {
      interval = setInterval(() => {
        let index = currentSlide + 1
        if (index >= slides.length) index = 0
        showSlide(index)
      }, 5000)
    })
  })

  // Form submission to Google Sheets
  const form = document.getElementById("contact-form")
  const formStatus = document.getElementById("form-status")

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      formStatus.textContent = "Enviando mensagem..."
      formStatus.className = "form-status"

      // Google Sheets script URL
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwDHDAH_yvzXJIFEHjzZ41QFs6Z_BaTtWR7Q_i3-TTHNG_LLwgqYrDQkIwy-_3M_Gg/exec"

      // Create FormData object
      const formData = new FormData(form)

      // Add timestamp
      formData.append("timestamp", new Date().toLocaleString())

      // Send data to Google Sheets
      fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
          if (response.ok) {
            formStatus.textContent = "Mensagem enviada com sucesso!"
            formStatus.className = "form-status success"
            form.reset()
          } else {
            throw new Error("Erro ao enviar mensagem")
          }
        })
        .catch((error) => {
          formStatus.textContent = "Erro ao enviar mensagem. Tente novamente."
          formStatus.className = "form-status error"
          console.error("Error:", error)
        })
    })
  }
})