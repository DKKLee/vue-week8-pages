<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" to="/"
            >秋夏</router-link
          >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link class="nav-item nav-link me-4" to="/products"
            >產品</router-link
          >
          <router-link class="nav-item nav-link me-4" to="/cart"
            >購物車</router-link
          >
          <router-link class="nav-item nav-link me-4" to="/articles"
            >Blog</router-link
          >
          <router-link
            class="nav-item nav-link me-4 bi bi-person-circle"
            to="/login"
          ></router-link>
        </div>
      </div>
    </nav>
  </div>
  <!-- <div
    class="position-absolute"
    style="
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80);
      background-position: center center;
      opacity: 0.2;
    "
  ></div>
  <div class="position-relative ">
    <div class="container d-flex flex-column " >
      <nav class="navbar  navbar-expand-lg navbar-light " style="opacity: 0.8;">
        <a class="navbar-brand" href="/">秋一夏</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <router-link class="nav-item nav-link me-4 active" to="/"
              >Home</router-link
            >
            <router-link class="nav-item nav-link me-4" to="/products"
              >產品</router-link
            >
            <router-link
              class="nav-item nav-link me-4 bi bi-cart4"
              to="/cart"
            ></router-link>
            <router-link
              class="nav-item nav-link me-4 bi bi-person-circle"
              to="login"
            ></router-link>
          </div>
        </div>
      </nav>
    </div>
  </div> -->

  <!-- <div class="bg-white sticky-top">
    <div class="container">
      <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white">
        <a
          class="navbar-brand position-absolute"
          href="./index.html"
          style="left: 50%; transform: translate(-50%, -50%); top: 50%"
        >
          Navbar
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse bg-white custom-header-md-open"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="/products">產品</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link navbar-brand" to="/cart"
                >購物車</router-link
              >
            </li>
          </ul>
        </div>
        <div class="d-flex">
          <router-link
            class="nav-link navbar-brand bi bi-cart4"
            style="font-size: 1.5rem"
            to="/cart"
          ></router-link>
          <router-link
            class="nav-link navbar-brand bi bi-person-circle"
            style="font-size: 1.6rem"
            to="#login"
          ></router-link>
        </div>
      </nav>
    </div>
  </div> -->
  <router-view />
</template>
