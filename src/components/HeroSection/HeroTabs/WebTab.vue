<!-- Web projects view -->
<template>
  <section>
    <div class="row">
      <ProjectCard :img="product_one" :txt="text_one" />
      <ProjectCard :img="product_two" :txt="text_two" />
    </div>
    <div class="row">
      <ProjectCard :img="product_three" :txt="text_three" />
      <ProjectCard :img="product_four" :txt="text_four" />
    </div>
  </section>
</template>

<script>
import ProjectCard from "../ProjectCard.vue";
import minify from "../../../assets/minify.png";
import ant from "../../../assets/ant.png";
import lumy from "../../../assets/lumy.png";
import keeper from "../../../assets/keeper.png";

export default {
  name: "WebTab",
  data() {
    return {
      product_one: `<img src=${minify} alt="Web design" style="border-radius: 2.5rem; max-width: 100%; width:100%;" />`,
      text_one: "Minify - Web Design",
      product_two: `<img src=${ant} alt="Personal portofolio" style="border-radius: 2.5rem; max-width: 100%; width: 100%;"/>`,
      text_two: "Ant - Personal Portofolio",
      product_three: `<img src=${lumy} alt="Dashboard UI Kit" style="border-radius: 2.5rem; max-width: 100%; width: 100%;"/>`,
      text_three: "Lumy - Dashboard UI Kit",
      product_four: `<img src=${keeper} alt="Soccer Site" style="border-radius: 2.5rem; max-width: 100%; width: 100%;"/>`,
      text_four: "Keeper - Soccer Site",
    };
  },
  components: {
    ProjectCard,
  },
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 767px) {
  .row {
    flex-direction: column;
  }
}
</style>
