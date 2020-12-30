<template>
  <section class="welcome">
    <div class="welcome__text">
      <span> Hello, {{ welcome.prefix }} {{ welcome.name }}! </span>
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
    },
  },
  mounted() {
    this.startedUser();
  },
  methods: {
    startedUser() {
      console.log(this.user);
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
  },
};
</script>
