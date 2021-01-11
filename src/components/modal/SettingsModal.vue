<template>
  <div class="modal">
    <div class="modal-content">
      <button class="modal-close" @click="CloseModalSettings()">
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
      <div class="settings-modal">
        <h3>
          Settings
        </h3>
        <settings-form
          :user="this.user"
          @newUserData="listenNewUserData"
          @closeModal="CloseModalSettings()"
        />
      </div>
    </div>
  </div>
</template>
<script>
import SettingsForm from "../SettingsForm.vue";

export default {
  components: { SettingsForm },
  props: ["openSettings", "user"],
  data() {
    return {
      open: false,
      newUserData: {},
    };
  },
  watch: {
    openSettings: function() {
      if (this.openSettings == true) {
        this.open = true;
      } else {
        this.open = false;
      }
    },
  },
  methods: {
    CloseModalSettings() {
      this.$emit("closeSettings", false);
      console.log("Closing modal...");
    },
    listenNewUserData(data) {
      this.$emit("saveNewUser", data);
    },
  },
};
</script>
