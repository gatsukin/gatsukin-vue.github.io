<template>
  <div class="modal">
    <div class="modal-content">
      <button class="modal-close" @click="CloseModalProfile()">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512.001 512.001"
          style="enable-background:new 0 0 512.001 512.001;"
          xml:space="preserve"
        >
          <path
            d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
			L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
			c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
			l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
			L284.286,256.002z"
          />
        </svg>
      </button>
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
