<template>
  <div class="budget-item">
    <span class="budget-comment">{{ commentary }}</span>
    <span class="budget-value">{{ value }}</span>
    <ElButton type="danger" size="mini" @click="deleteItem(deleteItemId)">Delete</ElButton>
  </div>
</template>

<script>
export default {
  name: "BudgetListItem",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    commentary: {
      type: String,
      default: 'Default comment',
    },
    deleteItemId: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    deleteItem(id) {
      this.$root.$refs.BudgetList_component.deleteItem(id);
    },
  },
}
</script>

<style scoped>
.budget-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.budget-value {
  font-weight: 400;
  margin-left: auto;
  margin-right: 20px;
}
</style>