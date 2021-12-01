<template>
  <div class="item_card">
    <img :src="product.img" alt="Produt img" class="product_img_card" />
    <p class="product_description">{{ product.description }}</p>
    <p class="product_price">$ {{ product.price }}</p>
    <button class="add_cart_button" @click="addToCart(product)">
      Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  name: "Product_Card",
  props: ["product"],
  methods: {
    addToCart: function (e) {
      this.$store.commit("addToCartMutation", e);
      this.$store.commit("totalizeCart");
    },
  },
};
</script>

<style>
.item_card {
  min-width: 80vw;
  max-width: 80vw;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px black;
  padding: 2vw;
  margin: 3vw 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product_img_card {
  width: 90%;
  margin: 0 auto;
}

.product_description {
  text-align: center;
  width: 100%;
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 1vh;
}

.product_price {
  font-size: 1.9rem;
  font-weight: 500;
  margin-top: 1vh;
}

.add_cart_button {
  width: 60%;
  height: 5vh;
  background-color: var(--Yellow);
  padding: 1vw 0;
  margin: 1vh 0;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 0px 5px 0px black;
  font-weight: bold;
}

.add_cart_button:active {
  background-color: var(--Orange);
}

@media screen and (min-width: 1200px) {
  .item_card {
    min-width: 14vw;
    max-width: 14vw;
    max-height: 17vw;
  }
}
</style>