<template>
  <section class="working" id="contact">
    <h2>
      Interested working <br />
      with me?
    </h2>
    <button class="mail">
      <img :src="mailURL" alt="Mail icon" />
      <span>Email Me</span>
    </button>
  </section>
</template>

<script>
import mail from "../../assets/mail.svg";

export default {
  name: "WorkingSection",
  data() {
    return {
      mailURL: mail,
    };
  },
};
</script>

<style scoped>
.working {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eebf63;
  border-radius: 2.5rem;
  padding: 5rem 7.5rem;
  margin-bottom: 9rem;
}
.working h2 {
  font-size: 4.8rem;
  font-weight: 600;
  line-height: 6.2rem;
  color: #fff;
}
.mail {
  display: block;
  padding: 1.9rem 4.8rem;
  font-size: 2.4rem;
  line-height: 3.6rem;
  font-weight: 600;
  color: #2f2f2f;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 1rem;
  box-shadow: 0px 0.927421px 1.92354px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  background-color: #fff;
}
.mail span {
  margin-left: 1.6rem;
}
@media (max-width: 767px) {
  .working {
    flex-direction: column;
    gap: 4rem;
  }
}
</style>
