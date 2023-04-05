<template>
  <ul class="menu" :class="{ show: show }">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="{ active: item.active, item: true }"
      v-scroll-to="item.to"
      @click="handleActive(index)"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="js">
export default {
  name: "TopNav",
  data() {
    return {
      items: [
        { text: "Home", active: true, to: '#home'}, {text: "About", active: false, to: '#about' }, {text: "Project", active: false, to: '#project'}, {text: "Contact", active: false, to: '#contact'}
      ],
    };
  },
  methods: {
    // change style of item on click event
    handleActive(index) {
      this.items.forEach((item, i) => {
        if (i === index) {
          item.active = true;
        }else {
          item.active = false;
        }
      })
    }
  },
  props:{
    show: Boolean
  }
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
}
.item {
  font-size: 1.6rem;
  font-weight: 500;
  color: #2f2f2f;
  line-height: 2rem;
  cursor: pointer;
}
.active {
  color: #eebf63;
}
@media (max-width: 767px) {
  .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 8rem;
    right: 6rem;
  }
  .menu.show {
    display: flex;
  }
}
</style>
