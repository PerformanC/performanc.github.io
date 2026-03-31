const scroll_to_top_buttons = document.getElementsByClassName('scroll-to-top-button')

for (let i = 0; i < scroll_to_top_buttons.length; i++) {
  const btn = scroll_to_top_buttons[i];
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

