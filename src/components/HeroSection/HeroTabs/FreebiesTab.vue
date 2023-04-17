<!-- Freebies projects view -->
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
import freebies01 from "../../../assets/freebies-01.jpeg";
import freebies02 from "../../../assets/freebies-02.jpeg";
import freebies03 from "../../../assets/freebies-03.jpeg";
import freebies04 from "../../../assets/freebies-04.jpeg";

export default {
  name: "FreebiesTab",
  data() {
    return {
      product_one: `<img src=${freebies01} alt="Freebies" style="border-radius: 2.5rem; width: 100%; max-width: 100%;"/>`,
      text_one: "Minify - Freebies",
      product_two: `<img src=${freebies02} alt="Freebies" style="border-radius: 2.5rem; width: 100%; max-width: 100%;" />`,
      text_two: "Ant - Freebies",
      product_three: `<img src=${freebies03} alt="Freebies" style="border-radius: 2.5rem; width: 100%; max-width: 100%;" />`,
      text_three: "Lumy - Freebies",
      product_four: `<img src=${freebies04} alt="Freebies" style="border-radius: 2.5rem; width: 100%; max-width: 100%;" />`,
      text_four: "Keeper - Freebies",
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
