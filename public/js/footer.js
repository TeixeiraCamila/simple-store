// FOOTER DINÂMICO
const createFooter = () => {
  let footer = document.querySelector('.footer');
  footer.innerHTML = `
  <div class="container">
  <div class="footer_content">
      <img src="./img/light-logo.png" class="logo" alt="">
      <div class="footer_ul_container">
        <ul class="category">
          <li class="category_title">men</li>
          <li><a href="" class="footer_link">t-shirts</a></li>
          <li><a href="" class="footer_link">sweartshirts</a></li>
          <li><a href="" class="footer_link">shirts</a></li>
          <li><a href="" class="footer_link">jeans</a></li>
          <li><a href="" class="footer_link">trousers</a></li>
          <li><a href="" class="footer_link">shoes</a></li>
          <li><a href="" class="footer_link">casuals</a></li>
          <li><a href="" class="footer_link">formals</a></li>
          <li><a href="" class="footer_link">sports</a></li>
          <li><a href="" class="footer_link">watch</a></li>

        </ul>
        <ul class="category">
          <li class="category_title">women</li>
          <li><a href="" class="footer_link">t-shirts</a></li>
          <li><a href="" class="footer_link">sweartshirts</a></li>
          <li><a href="" class="footer_link">shirts</a></li>
          <li><a href="" class="footer_link">jeans</a></li>
          <li><a href="" class="footer_link">trousers</a></li>
          <li><a href="" class="footer_link">shoes</a></li>
          <li><a href="" class="footer_link">casuals</a></li>
          <li><a href="" class="footer_link">formals</a></li>
          <li><a href="" class="footer_link">sports</a></li>
          <li><a href="" class="footer_link">watch</a></li>

        </ul>
      </div>

    </div>
    <p class="footer_title">
      about company
    </p>
    <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed dolor cumque consequuntur
      quaerat voluptate alias! Velit placeat eius tempore, rem blanditiis culpa consequuntur quis eum recusandae,
      sapiente veritatis! Facere.</p>
    <p class="info">
      support emails - <span>help@cloting.com, costumersupport@clothing.com</span>
    </p>
    <div class="info">phone - 180 00 00 00</div>
    <div class="footer_social_container">
      <div>
        <span class="social_link">terms & services</span>
        <span class="social_link">privacy page</span>
      </div>
      <div>
        <a href="" class="social_link">
          <img src="./img/facebook_color.png" alt="">
        </a>
        <a href="" class="social_link">
          <img src="./img/twitter_color.png" alt="">
        </a>
        <a href="" class="social_link">
          <img src="./img/instagram_color.png" alt="">
        </a>
      </div>
    </div>
    </div>
  `;
};
createFooter();
