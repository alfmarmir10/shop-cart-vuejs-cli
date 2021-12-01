<template>
  <div class="products_card_main_container">
    <ProductCardVue
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import items from "../data/products";
import ProductCardVue from "./ProductCard.vue";

export default {
  name: "Products",
  data() {
    return {
      products: items,
    };
  },
  components: {
    ProductCardVue,
  },
};
</script>

<style>
.products_card_main_container {
  width: 100%;
  max-height: 70vh;
  margin: 2vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: auto;
}

@media screen and (min-width: 1200px) {
  .products_card_main_container {
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>