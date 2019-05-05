(function() {
  let uniqueCategories = [];
  document.querySelectorAll("[data-category]").forEach(element => {
    uniqueCategories.push(element.dataset.category);
  });
  const allCategories = [...new Set(uniqueCategories)];
  console.log('boom', allCategories);
})();
