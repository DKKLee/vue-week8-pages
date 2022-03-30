<template>
  <div
    class="position-relative d-flex align-items-center justify-content-center"
    style="min-height: 400px"
  >
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
      "
    ></div>
    <h2 class="fw-bold">Let your hair down.</h2>
  </div>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row">
      <div class="col-md-4">
        <div
          class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
          id="accordionExample"
        >
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <div
                class="d-flex justify-content-between align-items-center pe-1"
              >
                <h4 class="mb-0">露營相關</h4>
                <i class="bi bi-chevron-down"></i>
              </div>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li>
                    <a
                      href="#"
                      class="py-2 d-block text-muted"
                      @click.prevent="getProductstype('帳篷')"
                      >帳篷</a
                    >
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted" @click.prevent="getProductstype('睡袋')">睡袋</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted" @click.prevent="getProductstype('燈具')">燈具</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted" @click.prevent="getProductstype('爐具')">爐具</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
              id="headingTwo"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              <div
                class="d-flex justify-content-between align-items-center pe-1"
              >
                <h4 class="mb-0">水上活動</h4>
                <i class="bi bi-chevron-down"></i>
              </div>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="py-2 d-block text-muted" @click.prevent="getProductstype('SUP')">SUP</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted" @click.prevent="getProductstype('救生衣')">救生衣</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted" @click.prevent="getProductstype('面鏡/呼吸管')">面鏡/呼吸管</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted" @click.prevent="getProductstype('防寒衣/泳衣(褲)')"
                      >防寒衣/泳衣(褲)</a
                    >
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted" @click.prevent="getProductstype('水上其他')">水上其他</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loading :active="isLoading"></Loading>
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-6" v-for="item in products" :key="item.id">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                :src="item.imageUrl"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark" @click.prevent="addToCart(item.id)">
                <i
                  class="fa-solid fa-cart-plus position-absolute"
                  style="right: 16px; top: 16px"
                ></i>
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <router-link
                    :to="{ name: 'product', params: { id: item.id } }"
                    >{{ item.title  }} </router-link
                  >
                </h4>
                <p class="card-text mb-0">
                  NT${{ item.price }}
                  <span class="text-muted"
                    ><del>NT${{ item.origin_price }}</del></span
                  >
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
        </div>
        <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
      </div>
    </div>
    <a href="#" class="back-to-top" @click.prevent="backTop"><i class="fa-brands fa-fly fa-2xl fa-beat" style="--fa-animation-duration: 2s;"></i></a>
  </div>
  <!-- <nav
    class="navbar navbar-expand-lg navbar-light justify-content-center border border-start-0 border-end-0 border-top border-bottom"
  >
    <div class="navbar-nav flex-row overflow-auto navbar-custom-scroll">
      <a class="nav-item nav-link text-nowrap px-2" >Lorem ipsu1</a>
      <a class="nav-item nav-link text-nowrap px-2" href="#">Lorem ipsu1</a>
      <a class="nav-item nav-link text-nowrap px-2" href="#">Lorem ipsum</a>
      <a class="nav-item nav-link text-nowrap px-2 active" href="#"
        >Lorem ipsum <span class="sr-only">(current)</span></a
      >
      <a class="nav-item nav-link text-nowrap px-2" href="#">Lorem ipsum</a>
      <a class="nav-item nav-link text-nowrap px-2" href="#">Lorem ipsum</a>
    </div>
  </nav>
  <Loading :active="isLoading"></Loading>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row">
      <div class="col-md-3" v-for="item in products" :key="item.id">
        <div class="card border-0 mb-4 position-relative position-relative">
          <img
            src="https://images.unsplash.com/photo-1628087235616-4e146afcd061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&h=750&q=80"
            class="card-img-top rounded-0"
            alt="..."
          />
          <a href="#" class="text-dark">
            <i
              class="far fa-heart position-absolute"
              style="right: 16px; top: 16px"
            ></i>
          </a>
          <div class="card-body p-0">
            <h4 class="mb-0 mt-3">
              <router-link :to="{ name: 'product', params: { id: item.id } }">{{
                item.title
              }}</router-link>
            </h4>
            <p class="card-text text-muted mb-0">{{ item.title }}</p>
            <p class="text-muted mt-3">{{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  </div> -->
</template>

<style>
.back-to-top {
  display: none; /*  默認是隱藏的，這樣在第一屏才不顯示 */
  position: fixed; /* 位置是固定的 */
  bottom: 20px; /* 顯示在頁面底部 */
  right: 30px; /* 顯示在頁面的右邊 */
  z-index: 99; /* 確保不被其他功能覆蓋 */
  border: 0px solid #5cb85c; /* 顯示邊框 */
  outline: none; /* 不顯示外框 */
  /* background-color: #fff; 設置背景背景顏色 */
  color: #5cb85c; /* 設置文本顏色 */
  cursor: pointer; /* 滑鼠移到按鈕上顯示手型 */
  /* padding: 10px 15px 15px 15px; 增加一些內邊距 */
  /* border-radius: 10px; 增加圓角 */
  /* font-size: 16px; */
}
</style>

<script>
import Pagination from '@/components/PaginationModal.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      status: {
        loadingItem: '',
      },
      isLoading: false,
      product: {},
      category: '',
    };
  },
  components: {
    Pagination,
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProductstype(category) {
      this.category = category;
      this.getProducts();
    },
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}&category=${this.category}`;
      this.$http
        .get(url)
        .then((response) => {
          this.products = response.data.products;
          this.pagination = response.data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err.data);
        });
    },
    addToCart(id, qty = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };

      this.$http
        .post(url, { data: cart })
        .then((response) => {
          this.status.loadingItem = '';
          this.$httpMessageState(response, '加入購物車');
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          this.$httpMessageState(error.response, '錯誤訊息');
        });
    },
    backTop() {
      document.documentElement.scrollTop = 400;
    },
    backTopshow() {
      const bt = document.getElementsByClassName('back-to-top');
      if (document.documentElement.scrollTop > 400) {
        bt[0].style.display = 'block';
      } else {
        bt[0].style.display = 'none';
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.backTopshow);
  },
};
</script>
