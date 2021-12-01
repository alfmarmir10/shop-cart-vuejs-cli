<template>
  <div class="floating_cart" @click="iterateShowCart()">
    <img
      src="../assets/img/cart.png"
      alt="Cart floating icon"
      class="cart_floating_icon"
    />
  </div>
</template>

<script>
export default {
  name: "Floating_Cart",
  methods: {
    iterateShowCart: function () {
      this.$emit("iterateShowCart");
    },
  },
};
</script>

<style>
.floating_cart {
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  background-color: white;
  border: 2px solid var(--DarkBlue);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10vh;
  right: 5vw;
  box-shadow: 0px 0px 15px 0px black;
  padding: 2vw;
}

.cart_floating_icon {
  width: 80%;
}

@media screen and (min-width: 700px) {
  .floating_cart {
    width: 6vw;
    height: 6vw;
  }
}

@media screen and (min-width: 1200px) {
  .floating_cart {
    width: 2vw;
    height: 2vw;
    padding: 1vw;
  }

  .cart_floating_icon {
    width: 100%;
  }
}
</style>