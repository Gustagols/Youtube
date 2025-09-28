const searchBar = document.createElement('input');
searchBar.className = 'search-bar';
searchBar.placeholder = 'Search';

const middleSection = document.querySelector('.middle-section');
const searchButton = document.querySelector('.search-button');


function showSearchBar() {

  if (window.innerWidth > 600) {
    if (!middleSection.contains(searchBar)) {
      middleSection.insertBefore(searchBar, searchButton);
    }
  } else {
    if (middleSection.contains(searchBar)) {
      searchBar.remove();
    }
  }
}

showSearchBar();
window.addEventListener('resize', showSearchBar);


const header = document.querySelector('header');
const rightSection = document.querySelector('.right-section');

function removeRightSection() {

  if (window.innerWidth > 492) {
    if (!header.contains(rightSection))
      header.appendChild(rightSection);
  } else {
    if (header.contains(rightSection)) {
      rightSection.remove();
    }
  }
}

removeRightSection();
window.addEventListener('resize', removeRightSection);


