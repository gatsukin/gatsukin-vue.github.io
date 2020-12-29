<template>
  <div class="modal">
    <div class="modal-content">
      <button class="modal-close" @click="CloseModalProfile()">x</button>
      <div class="profile-modal">
        <h3>Profile</h3>
        <div
          v-if="!user.name && !user.age && !user.gender"
          class="profile-modal--error"
        >
          Please, enter something in settings!
        </div>
        <div v-if="user.name || user.age || user.gender">
          <div class="profile-modal--text">
            <b>
              Name:
            </b>
            <span v-if="user.name">
              {{ user.name }}
            </span>
            <span v-else class="error">
              Please, enter your name in settings...
            </span>
          </div>

          <div class="profile-modal--text">
            <b>
              Age:
            </b>
            <span v-if="user.age"> {{ user.age }} y.o </span>
            <span v-else class="error">
              Please, enter yours age in settings
            </span>
          </div>

          <div class="profile-modal--text">
            <b>
              Gender:
            </b>
            <span v-if="user.gender">
              {{ user.gender }}
            </span>
            <span v-else class="error">
              Choose your side
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["openProfile", "user"],
  data() {
    return {
      open: false,
    };
  },
  watch: {
    openProfile: function() {
      if (this.openProfile == true) {
        this.open = true;
      } else {
        this.open = false;
      }
    },
  },
  methods: {
    CloseModalProfile() {
      this.$emit("closeProfile", false);
      console.log("Closing modal...");
    },
  },
};
</script>
