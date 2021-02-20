<template>
  <div class="category">
    <h2>Общее</h2>
    <div>
      <list-component name="type" :array="this.type" @emitValue="elemValue" />
      <list-component name="type1" :array="this.type" @emitValue="elemValue" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // totalCost: 0,
      type: [
        {
          name: "Лендинг",
          price: "10000",
        },
        {
          name: "Сайт-визитка",
          price: "30000",
        },
        {
          name: "Корпоративный сайт",
          price: "60000",
        },
        {
          name: "Интернет-магазин",
          price: "999999",
        },
      ],
    };
  },
  watch: {},
  mounted() {},
  computed: {
    totalCost: function() {
      return this.elemValue();
    },
  },
  methods: {
    elemValue() {},
  },
};
</script>
