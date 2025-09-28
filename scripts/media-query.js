import { header, rightSection, middleSection, searchButton, searchBar } from "./dom-elements.js";

  searchBar.className = 'search-bar';
  searchBar.placeholder = 'Search';

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

  function removeRightSection() {
    if (window.innerWidth > 492) {
      if (!header.contains(rightSection)) header.appendChild(rightSection);
    } else {
      if (header.contains(rightSection)) rightSection.remove();
    }
  }

  showSearchBar();
  removeRightSection();

  window.addEventListener('resize', showSearchBar);
  window.addEventListener('resize', removeRightSection);

