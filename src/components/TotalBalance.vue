<template>
  <div>
    <template v-if="total > 1">
      <div class="total-value green">Balance: {{ total }}</div>
    </template>
    <template v-else-if="total < 0">
      <div class="total-value red">Balance: {{ total }}</div>
    </template>
    <template v-else>
      <div class="total-value">Balance: {{ total }}</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}

.red {
  color: red;
}

.green {
  color: green;
}

</style>