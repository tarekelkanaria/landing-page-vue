<!-- Card for each project in one component using props -->
<template>
  <article class="card">
    <div v-html="img" class="poster"></div>
    <p class="title">{{ txt }}</p>
    <div class="card__data">
      <div class="card__notes">
        <img src="../../assets/layers.svg" alt="Study icon" />
        <p class="card__note">View Study Case</p>
      </div>
      <div class="card__notes">
        <img src="../../assets/show.svg" alt="Eye icon" />
        <p class="card__note">Live Preview</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    img: String,
    txt: String,
  },
};
</script>

<style scoped>
.card {
  width: 49%;
}
@media (max-width: 767px) {
  .card {
    width: 100%;
  }
}
.poster {
  width: 100%;
}
.title {
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 3.6rem;
  color: #1c1c1c;
  margin-bottom: 1rem;
}
.card__data {
  display: flex;
  gap: 5rem;
  justify-content: space-between;
  align-items: center;
}
.card__notes {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10rem;
}
.card__note {
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #151517;
  font-weight: 500;
  margin-left: 1.2rem;
}
</style>
