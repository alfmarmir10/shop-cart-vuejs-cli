<template>
  <div class="header">
    <img src="../assets/img/DewisMarket.png" alt="Logo icon" class="logo" />
    <p class="business-name">Dewis Market</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style>
.header {
  width: 100%;
  min-height: 5vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 15%;
  margin-right: 1vw;
  margin-top: 1vh;
}

.business-name {
  font-size: 3rem;
  font-weight: bold;
  margin-top: 1vh;
}

@media screen and (min-width: 1200px) {
  .header {
    min-height: 2vh;
  }

  .logo {
    width: 5%;
    margin-right: 1vw;
    margin-top: 1vh;
  }
}
</style>