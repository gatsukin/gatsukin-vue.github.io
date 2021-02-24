<template>
  <div class="d-flex flex-column col-md-8">
    <div class="column">
      <form>
        <design-view v-if="0" @updateSumPrice="generalPrice" />
        <front-view v-if="0" />
        <back-view @updateSumPrice="generalPrice" />
      </form>
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
      this.sitePrice = data;
    },
  },
};
</script>
