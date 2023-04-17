<!-- The footer structur -->
<template>
  <footer class="container">
    <p>Let's Connect</p>
    <div class="icons">
      <img :src="instagramURL" alt="Instagram Icon" />
      <img :src="youtubeURL" alt="Youtube Icon" />
      <img :src="dribbleURL" alt="Dirbbble Icon" />
    </div>
    <p @click="backToTop">
      Back to Top <img src="src/assets/short_up.svg" alt="Arrow to top" />
    </p>
  </footer>
</template>

<script>
import instagram from "../../assets/instagram-negative.svg";
import youtube from "../../assets/youtube-negative.svg";
import drrible from "../../assets/dribbble-negative.svg";

export default {
  name: "PageFoot",
  data() {
    return {
      instagramURL: instagram,
      youtubeURL: youtube,
      dribbleURL: drrible,
    };
  },
  methods: {
    // method to smoothly scroll to top based on click event
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;
}
footer p {
  font-size: 3.6rem;
  font-weight: 500;
  line-height: 4.6rem;
  color: #2f2f2f;
}
.icons img {
  margin-left: 2.5rem;
}
footer p:last-of-type {
  font-size: 2.4rem;
  line-height: 3.6rem;
  cursor: pointer;
}
@media (max-width: 767px) {
  footer {
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
