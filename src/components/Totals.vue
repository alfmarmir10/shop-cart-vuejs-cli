<template>
  <div class="total_container">
    <div class="total_container_item">
      <p class="total_container_item_label">Subtotal:</p>
      <p class="total_container_item_data">${{ totals.subtotal }}</p>
    </div>
    <div class="total_container_item">
      <p class="total_container_item_label">IVA:</p>
      <p class="total_container_item_data">${{ totals.iva.toFixed(2) }}</p>
    </div>
    <div class="total_container_item">
      <p class="total_container_item_label total">Total:</p>
      <p class="total_container_item_data total">
        ${{ totals.total.toFixed(2) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Totals",
  computed: {
    totals() {
      return this.$store.state.totals
    }
  }
};
</script>

<style>
.total_container {
  width: 97%;
  height: 9vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.total_container_item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.total_container_item_label {
  font-size: 1.6rem;
  font-weight: bold;
  margin-left: 1vw;
}

.total_container_item_data {
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 1vw;
}

.total_container_item_label.total,
.total_container_item_data.total {
  font-size: 2rem;
}
</style>