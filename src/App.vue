<!-- Display main components -->
<template>
  <TopHeader />
  <HeroSection />
  <PageFoot />
</template>

<!-- Import main components -->
<script>
import TopHeader from "./components/TopHeader/TopHeader.vue";
import HeroSection from "./components/HeroSection/HeroSection.vue";
import PageFoot from "./components/PageFoot/PageFoot.vue";

export default {
  name: "App",
  components: { TopHeader, HeroSection, PageFoot },
};
</script>
