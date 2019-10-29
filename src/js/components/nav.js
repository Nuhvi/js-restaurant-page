const generateTab = (name, currentTab) => {
  const Class = ` ${currentTab === name ? 'class="tab--highlight "' : ''}`;

  return `<li  ${Class}>
            <a data-role="tab" data-id="${name}" href="#!">
                ${name}
            </a>
          </li>`;
};

const generateNav = (currentTab) => `
    <header>
        <nav class="red">
            <div class="container nav-wrapper">
                <a href="#!" class="brand-logo">Some Restuarant</a>
                <a href="#" data-target="mobile-demo" 
                    class="sidenav-trigger">
                    <i class="material-icons">menu</i>
                </a>
                <ul class="right hide-on-med-and-down">
                    ${generateTab('home', currentTab)}
                    ${generateTab('menu', currentTab)}
                    ${generateTab('contact', currentTab)}
                </ul>
            </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
            <li><a href="#!">Home</a></li>
            <li><a href="#!">Menu</a></li>
            <li><a href="#!">Contact</a></li>
        </ul>
    </header>
    `;

export default generateNav;
