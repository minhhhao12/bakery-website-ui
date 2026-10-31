if(localStorage.getItem("login")){
    const header=document.getElementById("header");
    if(header){
    header.innerHTML=`<div class="header__container container">
        <div class="header-logo__container">
          <a href="../index.html" class="home-logo">
            <span class="logo-text">Sweet Bakery</span>
          </a>
        </div>

        <!-- Search Bar -->
        <div class="header-search__container">
          <form
            class="header-search__form"
            action="search-results.html"
            method="get"
            role="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="search-icon"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="search"
              class="header-search__input"
              placeholder="Tìm bánh kem, tiramisu, croissant..."
              aria-label="Tìm kiếm sản phẩm"
            />
            <button type="submit" class="header-search__btn">
              <span>Tìm kiếm</span>
            </button>
          </form>
        </div>

        <!-- Header Actions -->
        <div class="header__container--right">
          <details class="user-menu">
            <summary class="user-menu__trigger">
              <span class="user-menu__avatar" aria-hidden="true">A</span>
              <span class="user-menu__name">Nguyễn Văn A</span>
              <svg
                class="user-menu__chevron"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>

            <div class="user-dropdown">
              <div class="user-dropdown__profile">
                <span class="user-dropdown__avatar" aria-hidden="true">A</span>
                <div class="user-dropdown__identity">
                  <strong class="user-dropdown__title">Nguyễn Văn A</strong>
                  <span class="user-dropdown__subtitle"
                    >Thành viên Bạc · Sweet Bakery</span
                  >
                </div>
              </div>

              <hr class="divider" />

              <!-- Thông tin tài khoản -->
              <dl class="user-info">
                <div class="user-info__row">
                  <dt>Họ và tên</dt>
                  <dd>Nguyễn Văn A</dd>
                </div>
                <div class="user-info__row">
                  <dt>Email</dt>
                  <dd>nguyenvana@gmail.com</dd>
                </div>
                <div class="user-info__row">
                  <dt>Địa chỉ</dt>
                  <dd>273 An Dương Vương, Phường Chợ Quán, TP.HCM</dd>
                </div>
                <div class="user-info__row">
                  <dt>Số điện thoại</dt>
                  <dd>090 123 4567</dd>
                </div>
              </dl>

              <hr class="divider" />

              <nav
                class="user-dropdown__actions"
                aria-label="Liên kết tài khoản"
              >
                <a class="user-dropdown__link" href="#order-history">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 2h9l5 5v15H6z" />
                    <path d="M15 2v5h5" />
                    <path d="M9 13h7M9 17h5" />
                  </svg>
                  <span>Lịch sử đơn hàng</span>
                  <span class="user-dropdown__count">3</span>
                </a>
                <a
                  class="user-dropdown__link user-dropdown__link--danger"
                  href="login.html"
                  id="logout"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <path d="m16 17 5-5-5-5" />
                    <path d="M21 12H9" />
                  </svg>
                  <span>Đăng xuất</span>
                </a>
              </nav>
            </div>
          </details>

          <a
            href="cart.html"
            class="cart-logo"
            aria-label="Xem giỏ hàng"
          >
            <div class="cart-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path
                  d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
                />
              </svg>
              <span class="cart-badge">2</span>
            </div>
            <span class="cart-text">Giỏ hàng</span>
          </a>
        </div>
      </div>`
    }
    else{
        const header_index=document.getElementById("header_index");
        header_index.innerHTML=`<div class="header__container container">
        <div class="header-logo__container">
          <a href="index.html" class="home-logo">
            <span class="logo-text">Sweet Bakery</span>
          </a>
        </div>

        <!-- Search Bar -->
        <div class="header-search__container">
          <form
            class="header-search__form"
            action="./pages/search-results.html"
            method="get"
            role="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="search-icon"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="search"
              class="header-search__input"
              placeholder="Tìm bánh kem, tiramisu, croissant..."
              aria-label="Tìm kiếm sản phẩm"
            />
            <button type="submit" class="header-search__btn">
              <span>Tìm kiếm</span>
            </button>
          </form>
        </div>

        <!-- Header Actions -->
        <div class="header__container--right">
          <details class="user-menu">
            <summary class="user-menu__trigger">
              <span class="user-menu__avatar" aria-hidden="true">A</span>
              <span class="user-menu__name">Nguyễn Văn A</span>
              <svg
                class="user-menu__chevron"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>

            <div class="user-dropdown">
              <div class="user-dropdown__profile">
                <span class="user-dropdown__avatar" aria-hidden="true">A</span>
                <div class="user-dropdown__identity">
                  <strong class="user-dropdown__title">Nguyễn Văn A</strong>
                  <span class="user-dropdown__subtitle"
                    >Thành viên Bạc · Sweet Bakery</span
                  >
                </div>
              </div>

              <hr class="divider" />

              <!-- Thông tin tài khoản -->
              <dl class="user-info">
                <div class="user-info__row">
                  <dt>Họ và tên</dt>
                  <dd>Nguyễn Văn A</dd>
                </div>
                <div class="user-info__row">
                  <dt>Email</dt>
                  <dd>nguyenvana@gmail.com</dd>
                </div>
                <div class="user-info__row">
                  <dt>Địa chỉ</dt>
                  <dd>273 An Dương Vương, Phường Chợ Quán, TP.HCM</dd>
                </div>
                <div class="user-info__row">
                  <dt>Số điện thoại</dt>
                  <dd>090 123 4567</dd>
                </div>
              </dl>

              <hr class="divider" />

              <nav
                class="user-dropdown__actions"
                aria-label="Liên kết tài khoản"
              >
                <a class="user-dropdown__link" href="#order-history">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 2h9l5 5v15H6z" />
                    <path d="M15 2v5h5" />
                    <path d="M9 13h7M9 17h5" />
                  </svg>
                  <span>Lịch sử đơn hàng</span>
                  <span class="user-dropdown__count">3</span>
                </a>
                <a
                  class="user-dropdown__link user-dropdown__link--danger"
                  href="pages/login.html"
                  id="logout"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <path d="m16 17 5-5-5-5" />
                    <path d="M21 12H9" />
                  </svg>
                  <span>Đăng xuất</span>
                </a>
              </nav>
            </div>
          </details>

          <a
            href="./pages/cart.html"
            class="cart-logo"
            aria-label="Xem giỏ hàng"
          >
            <div class="cart-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path
                  d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
                />
              </svg>
              <span class="cart-badge">2</span>
            </div>
            <span class="cart-text">Giỏ hàng</span>
          </a>
        </div>
      </div>`
    }
}
const logout=document.getElementById("logout");
logout.addEventListener("click",()=>{
    localStorage.removeItem("login")
})
