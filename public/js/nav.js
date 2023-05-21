// NAVBAR DINÂMINCO
const createNav = () => {
  let nav = document.querySelector('.navbar');
  nav.innerHTML = `
  <div class="nav container">
  <img src="./img/dark-logo.png" alt="" class="brand_logo">
  <div class="nav_items">
    <div class="nav_search">
      <input type="text" name="" id="" class="search_box" placeholder="search brand, product">
      <button class="search_button">Search</button>
    </div>
    <a href="#">
      <img src="./img/user.png" alt="user icon">
    </a>
    <a href="#">
      <img src="./img/cart.png" alt="card icon">
    </a>
  </div>

</div>
<ul class="container nav_links_container">
  <li class="links_container_item">
    <a href="" class="container_item_link">home</a>
  </li>
  <li class="links_container_item">
    <a href="" class="container_item_link">men</a>
  </li>
  <li class="links_container_item">
    <a href="" class="container_item_link">women</a>
  </li>
  <li class="links_container_item">
    <a href="" class="container_item_link">kids</a>
  </li>
  <li class="links_container_item">
    <a href="" class="container_item_link">accessories</a>
  </li>
</ul>
  `;
};
createNav()