<template>
  <section class="welcome">
    <div class="welcome__text animation">
      <span id="hello"></span>
    </div>
    <div class="welcome__help" v-if="!this.user.name">
      <span>Please, fill name in settings for next step.</span>
    </div>
  </section>
</template>
<script>
import Typed from "typed.js";
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
      this.helloUser(this.welcome);
    },
  },
  mounted() {
    this.startedUser();
    this.emptyName();
    this.helloUser(this.welcome);
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
    helloUser(e) {
      let option = {
        strings: [`Hello, ${e.prefix} ${e.name}!`],
        typeSpeed: 30,
        showCursor: false,
      };
      new Typed("#hello", option).destroy();
      new Typed("#hello", option);
    },
  },
};
</script>
