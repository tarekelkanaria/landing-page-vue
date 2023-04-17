<!-- Mobile projects view -->
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
import mobDesign01 from "../../../assets/mob-design-01.jpeg";
import mobDesign02 from "../../../assets/mob-design-02.jpeg";
import mobDesign03 from "../../../assets/mob-design-03.jpeg";
import mobDesign04 from "../../../assets/mob-design-04.jpeg";

export default {
  name: "MobTab",
  data() {
    return {
      product_one: `<img src=${mobDesign01} alt="Mobile design" style="border-radius: 2.5rem; width: 100%; max-width: 100%;"/>`,
      text_one: "Minify - Mobile Design",
      product_two: `<img src=${mobDesign02} alt="Mobile design" style="border-radius: 2.5rem;width: 100%; max-width: 100%;" />`,
      text_two: "Ant - Mobile App",
      product_three: `<img src=${mobDesign03} alt="Mobile design" style="border-radius: 2.5rem; width: 100%; max-width: 100%;"/>`,
      text_three: "Lumy - Mobile Design",
      product_four: `<img src=${mobDesign04} alt="Mobile design" style="border-radius: 2.5rem; width: 100%; max-width: 100%;" />`,
      text_four: "Keeper - Mobile App",
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
