import '../scss/main.scss';
import Page from './pages/page.js';

document.addEventListener('click', (e) => {
  const { target } = e;
  if (target.getAttribute('data-role') === 'tab') {
    const tabName = target.getAttribute('data-id');
    Page.render(tabName);
  }
});

Page.render('Home');
