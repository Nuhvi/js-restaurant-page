import generateNav from '../components/nav.js';
import generateMain from '../components/mainElement.js';

import mainPage from './mainPage.js';
import menuPage from './menuPage.js';
import contactPage from './contactPage.js';

const Page = (() => {
  const CONTENT = document.getElementById('content');

  const mainContent = (pageName) => {
    if (pageName === 'menu') return menuPage();
    if (pageName === 'contact') return contactPage();
    return mainPage();
  };

  const render = (pageName = 'home') => {
    const Nav = generateNav(pageName);
    const Main = generateMain(mainContent(pageName));
    CONTENT.innerHTML = `${Nav} ${Main}`;
  };

  return {
    render,
  };
})();

export default Page;