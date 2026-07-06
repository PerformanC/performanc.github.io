// INFO: Update Copyright Footer
const copyright_notice_element = document.getElementById('copyright_notice')
const year = new Date(Date.now()).getFullYear()
copyright_notice_element.innerHTML = `© ${year} PerformanC Website — Licensed under AGPL-3.0`

// INFO: Mobile Menu Handler
let isOpen = false

const nav_menu_button = document.getElementById('nav-menu-button')
const menu = document.getElementById('menu')
const mmi_can_close = document.getElementsByClassName('mmi-can-close')

nav_menu_button.addEventListener('click', () => {
  if (!isOpen) {
    menu.classList.add('open')
    isOpen = true
  } else {
    menu.classList.remove('open')
    isOpen = false
  }
})

menu.addEventListener('click', () => {
  if (!isOpen) return;
  menu.classList.remove('open')
  isOpen = false
})

for (let i = 0; i < mmi_can_close.length; i++) {
  const element = mmi_can_close[i];
  element.addEventListener('click', () => {
    if (!isOpen) return;
    menu.classList.remove('open')
    isOpen = false
  })
}