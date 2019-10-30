const generateMain = (mainContent) => {
  const main = `
    <main class="container">
        ${mainContent}
    </main>
  `;
  return main;
};

export default generateMain;