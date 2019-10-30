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
                <a href="#!" class="brand-logo left">Some Restuarant</a>
                <ul class="right">
                    ${generateTab('home', currentTab)}
                    ${generateTab('menu', currentTab)}
                    ${generateTab('contact', currentTab)}
                </ul>
            </div>
        </nav>
    </header>
    `;

export default generateNav;
