<!-- The hero section consists of title, tabs, projectss views, and work section -->
<!-- there is a view for each tab -->
<template>
  <main class="container" id="about">
    <h1 class="title" v-html="text"></h1>
    <HeroTabs />
    <WorkingSection />
  </main>
</template>

<script>
import WorkingSection from "../WorkingSection/WorkingSection.vue";
import HeroTabs from "./HeroTabs/HeroTabs.vue";

export default {
  name: "HeroSection",
  data() {
    return {
      text: `Our <br> Projects`,
    };
  },
  components: {
    HeroTabs,
    WorkingSection,
  },
};
</script>

<style scoped>
.title {
  color: #000;
  font-size: 4.8rem;
  line-height: 6rem;
  font-weight: 600;
}
</style>
