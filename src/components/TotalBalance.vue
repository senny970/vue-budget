<template>
  <div>
    <template v-if="totalBalance > 1">
      <div class="total-value green">Balance: {{ totalBalance }}</div>
    </template>
    <template v-else-if="totalBalance < 0">
      <div class="total-value red">Balance: {{ totalBalance }}</div>
    </template>
    <template v-else>
      <div class="total-value">Balance: {{ totalBalance }}</div>
    </template>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TotalBalance",
  computed: {
    ...mapGetters('budget', ['budgetList']),
    totalBalance() {
      return Object.values(this.budgetList).reduce((acc, item) => acc + item.value, 0)
    },
  }
};
</script>

<style scoped>
@font-face {
  font-family: "LuckiestGuy-Regular";
  src: url("../fonts/LuckiestGuy-Regular.ttf") format("truetype");
}

.total-value {
  font-size: 30px;
  font-family: 'LuckiestGuy-Regular', cursive;
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