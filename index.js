// INFO: Update Copyright Footer
const copyright_notice_element = document.getElementById('copyright_notice')
const year = new Date(Date.now()).getFullYear()
copyright_notice_element.innerHTML = `© ${year} PerformanC Website — Licensed under AGPL-3.0`

// INFO: Mobile Menu Handler
let isOpen = false
const mobileQuery = window.matchMedia('(max-width: 1000px)');

const menu_button = document.getElementById('menu-button')
const menu_close_button = document.getElementById('menu-close-button')
const menu = document.getElementById('menu')

menu_button.addEventListener('click', () => {
  if (!mobileQuery.matches) return;
  if (!isOpen) {
    menu.classList.add('open')
    isOpen = true
  } else {
    menu.classList.remove('open')
    isOpen = false
  }
})

menu_close_button.addEventListener('click', () => {
  if (!isOpen) return;
  menu.classList.remove('open')
  isOpen = false
})