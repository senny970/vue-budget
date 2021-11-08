<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <template v-if="!isEmpty">
        <div class="list-item" v-for="(item, prop) in list" :key="prop">
          <BudgetListItem :value="item.value" :commentary="item.commentary" :deleteItemId="item.id" :deleteItemCommentary="item.commentary"/>
        </div>
      </template>
      <ElAlert v-else type="info" effect="dark" show-icon :closable="false" :title="emptyTitle">
      </ElAlert>
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "@/components/BudgetListItem";

export default {
  name: "BudgetList",
  components: {BudgetListItem},
  comments: {
    BudgetListItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    }
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty List',
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    }
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
  },
  created() {
    this.$root.$refs.BudgetList_component = this;
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: 0 auto;
}
</style>