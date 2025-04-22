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

/*===== FORM SUBMISSION =====*/
const contactForm = document.getElementById("contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    console.log("Form submitted:", { name, email, message })
    alert("Mensagem enviada com sucesso!")
    this.reset()
  })
}

/*===== CURRENT YEAR =====*/
document.getElementById("current-year").textContent = new Date().getFullYear()

/*===== CAROUSEL =====*/
document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll('.carousel__container')

  carousels.forEach(carousel => {
    const id = carousel.id
    const slides = carousel.querySelectorAll('.carousel__slide')
    const dots = document.querySelectorAll(`.carousel__dot[data-carousel="${id}"]`)
    const prevBtn = document.querySelector(`.carousel__btn--prev[data-carousel="${id}"]`)
    const nextBtn = document.querySelector(`.carousel__btn--next[data-carousel="${id}"]`)
    
    let currentSlide = 0

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'))
      slides[index].classList.add('active')

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index)
      })

      currentSlide = index
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => showSlide(i))
    })

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        let index = currentSlide - 1
        if (index < 0) index = slides.length - 1
        showSlide(index)
      })
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        let index = currentSlide + 1
        if (index >= slides.length) index = 0
        showSlide(index)
      })
    }

    let interval = setInterval(() => {
      let index = currentSlide + 1
      if (index >= slides.length) index = 0
      showSlide(index)
    }, 5000)

    carousel.addEventListener('mouseenter', () => {
      clearInterval(interval)
    })

    carousel.addEventListener('mouseleave', () => {
      interval = setInterval(() => {
        let index = currentSlide + 1
        if (index >= slides.length) index = 0
        showSlide(index)
      }, 5000)
    })

    showSlide(0) // inicia mostrando o primeiro slide
  })
})