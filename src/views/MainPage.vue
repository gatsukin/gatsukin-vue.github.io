<template>
  <div class="row">
    <div class="column">
      <general-view @emitElemValue="generalPrice" />
      <design-view />
      <front-view />
      <back-view />
    </div>
    <div class="column">Итого: {{ this.sitePrice }}</div>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      sitePrice: 0,
    };
  },
  watch: {},
  mounted() {},
  methods: {
    generalPrice(data) {
      this.sitePrice = +data;
    },
  },
};
</script>
