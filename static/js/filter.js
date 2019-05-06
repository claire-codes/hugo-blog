(function() {
  let allCategories = [];
  document.querySelectorAll("[data-category]").forEach(element => {
    allCategories.push(element.dataset.category);
  });
  const uniqueCategories = [...new Set(allCategories)];

  const filterContainer =  document.querySelector('.js-filter-container');
  let tmpNode;
  uniqueCategories.forEach(category => {
      tmpNode = document.createElement('div');
      tmpNode.innerHTML = category;
      tmpNode.className = 'c-filter__button js-filter-button';
      filterContainer.appendChild(tmpNode);
  })
})();
