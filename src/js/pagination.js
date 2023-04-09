import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const masiw = [
  {
    adult: false,
    backdrop_path: '/wybmSmviUXxlBmX44gtpow5Y9TB.jpg',
    id: 594767,
    title: 'Shazam! Fury of the Gods',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg',
    id: 700391,
    title: '65',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/aityu1Gma509jInlspHstEt8Jg0.jpg',
    id: 736790,
    title: 'Chupa',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg',
    id: 76600,
    title: 'Avatar: The Way of Water',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/iw0Na1UBHgA5BgifwmQ8vKhlWgA.jpg',
    id: 502356,
    title: 'The Super Mario Bros. Movie',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg',
    id: 739405,
    title: 'Operation Fortune: Ruse de Guerre',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg',
    id: 677179,
    title: 'Creed III',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/oncxGpXbkM4MK5f7wzYZNDLd1uU.jpg',
    id: 830896,
    title: 'The Portable Door',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/5deKXeVmu3G8821gV8DtKHmRd6r.jpg',
    id: 958196,
    title: 'Inside',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/gslT8t964rYXyqRcqrxFh77ikyb.jpg',
    id: 640146,
    title: 'Ant-Man and the Wasp: Quantumania',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg',
    id: 603692,
    title: 'John Wick: Chapter 4',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/wybmSmviUXxlBmX44gtpow5Y9TB.jpg',
    id: 594767,
    title: 'Shazam! Fury of the Gods',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg',
    id: 700391,
    title: '65',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/aityu1Gma509jInlspHstEt8Jg0.jpg',
    id: 736790,
    title: 'Chupa',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg',
    id: 76600,
    title: 'Avatar: The Way of Water',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/iw0Na1UBHgA5BgifwmQ8vKhlWgA.jpg',
    id: 502356,
    title: 'The Super Mario Bros. Movie',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg',
    id: 739405,
    title: 'Operation Fortune: Ruse de Guerre',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg',
    id: 677179,
    title: 'Creed III',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/oncxGpXbkM4MK5f7wzYZNDLd1uU.jpg',
    id: 830896,
    title: 'The Portable Door',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/5deKXeVmu3G8821gV8DtKHmRd6r.jpg',
    id: 958196,
    title: 'Inside',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/gslT8t964rYXyqRcqrxFh77ikyb.jpg',
    id: 640146,
    title: 'Ant-Man and the Wasp: Quantumania',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg',
    id: 603692,
    title: 'John Wick: Chapter 4',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/wybmSmviUXxlBmX44gtpow5Y9TB.jpg',
    id: 594767,
    title: 'Shazam! Fury of the Gods',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg',
    id: 700391,
    title: '65',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/aityu1Gma509jInlspHstEt8Jg0.jpg',
    id: 736790,
    title: 'Chupa',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg',
    id: 76600,
    title: 'Avatar: The Way of Water',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/iw0Na1UBHgA5BgifwmQ8vKhlWgA.jpg',
    id: 502356,
    title: 'The Super Mario Bros. Movie',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg',
    id: 739405,
    title: 'Operation Fortune: Ruse de Guerre',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg',
    id: 677179,
    title: 'Creed III',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/oncxGpXbkM4MK5f7wzYZNDLd1uU.jpg',
    id: 830896,
    title: 'The Portable Door',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/5deKXeVmu3G8821gV8DtKHmRd6r.jpg',
    id: 958196,
    title: 'Inside',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/gslT8t964rYXyqRcqrxFh77ikyb.jpg',
    id: 640146,
    title: 'Ant-Man and the Wasp: Quantumania',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg',
    id: 603692,
    title: 'John Wick: Chapter 4',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/wybmSmviUXxlBmX44gtpow5Y9TB.jpg',
    id: 594767,
    title: 'Shazam! Fury of the Gods',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg',
    id: 700391,
    title: '65',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/aityu1Gma509jInlspHstEt8Jg0.jpg',
    id: 736790,
    title: 'Chupa',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg',
    id: 76600,
    title: 'Avatar: The Way of Water',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/iw0Na1UBHgA5BgifwmQ8vKhlWgA.jpg',
    id: 502356,
    title: 'The Super Mario Bros. Movie',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/7TdVWAO7vV9j1OLDq1hQJS3pb4U.jpg',
    id: 739405,
    title: 'Operation Fortune: Ruse de Guerre',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg',
    id: 677179,
    title: 'Creed III',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/oncxGpXbkM4MK5f7wzYZNDLd1uU.jpg',
    id: 830896,
    title: 'The Portable Door',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/5deKXeVmu3G8821gV8DtKHmRd6r.jpg',
    id: 958196,
    title: 'Inside',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/gslT8t964rYXyqRcqrxFh77ikyb.jpg',
    id: 640146,
    title: 'Ant-Man and the Wasp: Quantumania',
    original_language: 'en',
  },
  {
    adult: false,
    backdrop_path: '/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg',
    id: 603692,
    title: 'John Wick: Chapter 4',
    original_language: 'en',
  },
];

const itemsPerPage = 20;
const totalItems = masiw.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);
const ul = document.querySelector('.gallery-list');

// Create the pagination instance and attach the event listener
const pagination = new Pagination('pagination', {
  totalItems: totalItems,
  itemsPerPage: itemsPerPage,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
  usageStatistics: false,
});

let firstLoad = true;

pagination.on('beforeMove', function (eventData) {
  ul.innerHTML = '';

  const startIdx = (eventData.page - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const data = masiw;

  const items = data.slice(startIdx, endIdx);

  markup = items.map(page => {
    return `  
      <div class="info">
        <p class="info-item">
          <b>likes</b>${page.title}
        </p>
      </div> 
    `;
  }).join('');
  
  ul.innerHTML = markup;
});

// Load the first page when the page is loaded
if (firstLoad) {
  const data = masiw;
  const startIdx = (1 - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const items = data.slice(0, endIdx);
  markup = items.map(page => {
    return `  
      <div class="info">
        <p class="info-item">
          <b>likes</b>${page.title}
        </p>
      </div> 
    `;
  }).join('');
  ul.innerHTML = markup;
  firstLoad = false;
}

