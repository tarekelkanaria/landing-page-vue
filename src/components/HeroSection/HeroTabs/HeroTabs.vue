<!-- match tabs with their corresponding view using Vue Router -->
<template>
  <nav class="tabs" id="project">
    <router-link to="/" class="tab">Web Design</router-link>
    <router-link to="/mob" class="tab">Mobile App Design</router-link>
    <router-link to="/freebies" class="tab">Freebies</router-link>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  name: "HeroTabs",
};
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
  width: 90%;
  margin-bottom: 5rem;
}
.tab {
  font-size: 3.2rem;
  line-height: 5rem;
  font-weight: 600;
  color: #828282;
}
.router-link-active {
  color: #eebf63;
  border-bottom: 2px solid #eebf63;
}
@media (max-width: 767px) {
  .tabs {
    flex-direction: column;
    width: 100%;
  }
}
</style>
