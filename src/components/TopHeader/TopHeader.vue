<!-- The main header component -->
<template>
  <header class="container" id="home">
    <h2 class="logo">{{ title }}</h2>
    <!-- Burger menu icon to toggle the nav only on small screen -->
    <font-awesome-icon
      icon="fa-solid fa-bars"
      class="burger"
      @click="showMenu = !showMenu"
    />
    <!-- The nav component receives the show property as props to toggle display property based on click event -->
    <TopNav :show="showMenu" />
  </header>
</template>

<script>
import TopNav from "./TopNav.vue";

export default {
  name: "TopHeader",
  data() {
    return {
      title: "LOGO",
      showMenu: false,
    };
  },
  components: { TopNav },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
}
.logo {
  font-size: 2.2rem;
  color: #151517;
  font-weight: bold;
  line-height: 3rem;
  cursor: pointer;
}
.burger {
  display: none;
  margin-right: 4rem;
  cursor: pointer;
}
@media (max-width: 767px) {
  .burger {
    display: block;
  }
}
</style>
