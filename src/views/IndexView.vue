<template>
  <div class="position-relative">
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80);
        background-position: center center;
        opacity: 0.1;
        z-index:-1;
      "
    ></div>
    <div class="container d-flex flex-column" style="min-height: 100vh">
      <div class="row justify-content-center my-auto">
        <div class="col-md-6 text-center">
          <h2>遠離城市的喧囂，享受自然的寧靜</h2>
           <router-link class="btn btn-dark rounded-0 mt-6" to="/products"
            >出發準備</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4 mt-md-4">
        <div class="card border-0 mb-4">
          <img
            src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            class="card-img-top rounded-0"
            alt="..."
          />
          <div class="card-body text-center">
            <h4>神秘大自然</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">
                享受一早的美景，被太陽曬醒，大自然聲音喚醒
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-md-4">
        <div class="card border-0 mb-4">
          <img
            src="https://images.unsplash.com/photo-1478827536114-da961b7f86d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            class="card-img-top rounded-0"
            alt="..."
          />
          <div class="card-body text-center">
            <h4>夜晚星空</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">
               沉靜在夜晚星空，吹著舒服的風，享受最愜意的時光
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-md-4">
        <div class="card border-0 mb-4">
          <img
            src="https://images.unsplash.com/photo-1493244040629-496f6d136cc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=849&q=80"
            class="card-img-top rounded-0"
            alt="..."
          />
          <div class="card-body text-center">
            <h4>戶外裝備</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">
                在外靠朋友，戶外靠裝備，出發前除了體力外，裝備是不可或缺的，裝備要先贏在起跑點
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-light mt-7">
    <div class="container">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3>秋夏 等你來訪</h3>
                <p class="my-5">
                  喜歡戶外的朋友都可以來交流，登山、下海都可以，一句話一輩子，週末兩天一下子。
                </p>
                <p><small>—Don’t look forward to tomorrow, don’t miss yesterday, to grasp today.—</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-7">
    <div class="row">
      <div class="col-md-6">
        <img
          src="https://images.pexels.com/photos/1612845/pexels-photo-1612845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">海上活動</h4>
        <p class="text-muted">
          海上活動勢必能夠左右未來。這種事實對本人來說意義重大，相信對這個世界也是有一定意義的。
        </p>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-between mt-4">
      <div class="col-md-6">
        <img
          src="https://images.pexels.com/photos/771079/pexels-photo-771079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">山上活動</h4>
        <p class="text-muted">
           一般來說，從這個角度來看，探討山上活動時，如果發現非常複雜，那麼想必不簡單。
        </p>
      </div>
    </div>
  </div>
  <div class="bg-light py-4">
    <!-- <div class="container">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start"
      >
        <p class="mb-0 fw-bold">Lorem ipsum dolor sit amet.</p>
        <div class="input-group w-md-50 mt-md-0 mt-3">
          <label for=""></label>
          <input type="text" class="form-control rounded-0" placeholder="" />
          <div class="input-group-append">
            <button class="btn btn-dark rounded-0" type="button" id="search">
              Lorem ipsum
            </button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
  <div class="bg-dark py-5">
    <div class="container">
      <div
        class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"
      >
        <a class="text-white h4" href="#/">DDDDK</a>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li>
            <a href="#" class="text-white mx-3"
              ><i class="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a>
          </li>
        </ul>
      </div>
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"
      >
        <div class="mb-md-0 mb-1">
          <p class="mb-0">02-6666-0000</p>
          <p class="mb-0">service@xxx.com</p>
        </div>
        <p class="mb-0">© 2022 DDDDK.</p>
      </div>
    </div>
  </div>
</template>
