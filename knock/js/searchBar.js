const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('input', handleSearch);



function handleSearch() {
    const searchTerm = searchBar.value.toLowerCase();
    const listItems = document.querySelectorAll('.brands-buttons li');
    listItems.forEach((item) => {
      if (item.textContent.toLowerCase().includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  








