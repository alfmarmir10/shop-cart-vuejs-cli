<template>
  <div class="search_main_container">
    <input type="search" placeholder="Ej: Agua Ciel" />
    <button class="search_button">Buscar</button>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style>
.search_main_container {
  width: 100%;
  margin-top: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type="search"] {
  border-radius: 10px;
  width: 60%;
  height: 4vh;
  text-align: center;
}

.search_button {
  width: 30%;
  height: 100%;
  background-color: var(--Yellow);
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px black;
  border: none;
  padding: 1vh 0;
  margin-left: 2vw;
  font-weight: bold;
}
</style>