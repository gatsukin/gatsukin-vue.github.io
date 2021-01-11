<template>
  <div class="main">
    <div class="overflow">
      <!-- <transition name="bounce"> -->
      <router-view :user="user"></router-view>
      <!-- </transition> -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["user"],
};
</script>
