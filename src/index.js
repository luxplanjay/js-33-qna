// import 'modern-normalize/modern-normalize.css';
// import './css/styles.css';
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.min.css';
import './js/connections';

// const pagination = new Pagination('#tui-pagination-container', {
//   totalItems: 0,
//   itemsPerPage: 20,
//   visiblePages: 5,
//   page: 1,
// });

// const page = pagination.getCurrentPage();

// fetchImages(page).then(data => {
//   pagination.reset(data.total);
//   renderImages(data.images);
// });

// pagination.on('afterMove', event => {
//   const currentPage = event.page;
//   fetchImages(currentPage).then(data => renderImages(data.images));
// });

// async function fetchImages(page) {
//   const res = await fetch(
//     `https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=sun&page=${page}&per_page=20`
//   );
//   const data = await res.json();
//   return { images: data.hits, total: data.totalHits };
// }

// function renderImages(images) {
//   console.log('RENDER');
//   console.log(images);
// }

const DEBOUNCE_DELAY = 5;
