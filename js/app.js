document.querySelector('.js-delete').addEventListener('click', () => {
  const title = document.querySelector('.js-title');
  title.classList.remove('primary-text');
});

const catsContainer = document.querySelector('.js-cats');

const items = [];
for (let i = 1; i <= 12; i++) {
  const src = `images/cat-${i}.jpg`;
  const item = `<div><img src="${src}" alt="Котик" loading="lazy" width="640" height="800" /></div>`;
  items.push(item);
}

catsContainer.insertAdjacentHTML('beforeend', items.join(''));
