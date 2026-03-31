const body = document.getElementsByTagName('body')[0]

const header = `
  <div id="menu">
    <menu-modal>
      <menu-modal-header>What do you need?</menu-modal-header>
      <a class="menu-modal-item mmi-can-close" href="/" >Home</a>
      <a class="menu-modal-item mmi-can-close" href="#history">History</a>
      <a class="menu-modal-item mmi-can-close">Projects</a>
      <a class="menu-modal-item mmi-can-close">Member</a>
      <a class="menu-modal-item mmi-can-close">Social Media</a>
      <a class="menu-modal-item mmi-can-close" id="menu-close-button">Close</a>
    </menu-modal>
  </div>
  <nav-constructor>
    <nav id="nav-brand">
      <a href="/"><nav-item class="icon"></nav-item></a>
      <a href="/"><nav-item id="nav-brand-name">PerformanC</nav-item></a>
      <nav-item id="nav-menu-button" logo-checked>
        <menu-icon></menu-icon>
      </nav-item>
    </nav>
    <nav id="nav-button">
      <a href="/"><nav-item>Home</nav-item></a>
      <a href="#history"><nav-item>History</nav-item></a>
      <nav-item>Projects</nav-item>
      <nav-item>Member</nav-item>
      <nav-item>Social Media</nav-item>
    </nav>
  </nav-constructor>
`

const footer = `
  <footer>
    <a id="copyright_notice" href="/LICENSE" target="_blank"></a>
    <br>
    <a href="/assets/NOTICE.md" target="_blank">Assets used in <b>/assets/performanc</b> is licensed under the "CC BY-NC-ND 4.0" License </a>
  </footer>
`

const og_data = body.innerHTML

body.innerHTML = header + og_data + footer