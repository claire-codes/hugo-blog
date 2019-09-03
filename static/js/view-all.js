(function() {
  const viewAllButton = document.querySelector(".js-view-all-button");
  const postList = document.querySelector(".js-post-list");

  viewAllButton.onclick = () => {
      postList.classList.toggle('c-view-all--off');
      viewAllButton.style.display = 'none';
    };
})();
