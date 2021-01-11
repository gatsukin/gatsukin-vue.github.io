<template>
  <section class="welcome">
    <div class="welcome__text animation">
      <span> Hello, {{ welcome.prefix }} {{ welcome.name }}! </span>
    </div>
    <div class="welcome__help" v-if="!this.user.name">
      <span>Please, fill name in settings for next step.</span>
    </div>
  </section>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      welcome: {
        prefix: "Mr.",
        name: "",
      },
    };
  },
  watch: {
    user: function() {
      this.startedUser(this.user);
      let text = document.querySelector(".welcome__text");
      text.classList.toggle("animation");
      setTimeout(() => text.classList.toggle("animation"), 10);
    },
  },
  mounted() {
    this.startedUser();
    this.emptyName();
  },
  methods: {
    startedUser() {
      if (this.user.name) {
        this.welcome.name = this.user.name;
      } else {
        this.welcome.name = "User";
      }
      if (this.user.gender == "female") {
        this.welcome.prefix = "Ms.";
      } else {
        this.welcome.prefix = "Mr.";
      }
    },
    emptyName() {
      var helpBlock = document.querySelector(".welcome__help");
      setTimeout(() => helpBlock.classList.toggle("visible"), 3000);
    },
  },
};
</script>
