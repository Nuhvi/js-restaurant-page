import generateNav from '../components/nav.js';

const Page = (() => {
  const CONTENT = document.getElementById('content');

  const render = (pageName = 'Home') => {
    const Nav = generateNav(pageName);

    const content = Nav;
    CONTENT.innerHTML = content;
  };

  return {
    render,
  };
})();

export default Page;