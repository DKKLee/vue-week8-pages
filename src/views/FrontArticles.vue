<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row">
      <div class="col-sm-6" v-for="item in articles" :key="item.create_at">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">
              {{ item.description }}
            </p>
            <router-link :to="{ name: 'article', params: { id: item.id } }"
              >詳細內容...</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="my-4">
      <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/PaginationModal.vue';

export default {
  data() {
    return {
      articles: [],
      pagination: {},
      status: {
        loadingItem: '',
      },
      isLoading: false,
      article: {},
      category: '',
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getArticles(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}&category=${this.category}`;
      this.$http
        .get(url)
        .then((response) => {
          this.articles = response.data.articles;
          this.pagination = response.data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err.data);
        });
    },
  },
  mounted() {
    this.getArticles();
  },
  created() {},
};
</script>
