<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <template v-if="!isEmpty">
        <el-button-group>
          <el-button type="primary" icon="el-icon-bottom" @click="setSortIncome"></el-button>
          <el-button type="primary" icon="el-icon-top" @click="setSortOutcome"></el-button>
          <el-button type="primary" @click="setSortAll">All</el-button>
        </el-button-group>
        <div class="list-item" v-for="(item, prop) in budgetList" :key="prop">
          <template v-if="sortIncome && item.type === 'INCOME'">
            <BudgetListItem
                :value="item.value"
                :commentary="item.commentary"
                :deleteItemId="item.id"
                :deleteItemCommentary="item.commentary"
                :type="item.type"/>
          </template>
          <template v-if="sortOutcome && item.type === 'OUTCOME'">
            <BudgetListItem
                :value="item.value"
                :commentary="item.commentary"
                :deleteItemId="item.id"
                :deleteItemCommentary="item.commentary"
                :type="item.type"/>
          </template>
          <template v-if="sortAll">
            <BudgetListItem
                :value="item.value"
                :commentary="item.commentary"
                :deleteItemId="item.id"
                :deleteItemCommentary="item.commentary"
                :type="item.type"/>
          </template>
        </div>
      </template>
      <ElAlert v-else type="info" effect="dark" show-icon :closable="false" :title="emptyTitle">
      </ElAlert>
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "@/components/BudgetListItem";
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {
  name: "BudgetList",
  components: {BudgetListItem},
  comments: {
    BudgetListItem,
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty List',
    sortIncome: false,
    sortOutcome: false,
    sortAll: true,
  }),
  computed: {
    ...mapGetters('budget', ['budgetList']),
    isEmpty() {
      return !Object.keys(this.budgetList).length;
    },
  },
  methods: {
    ...mapActions('budget', ['removeBudgetItem']),
    setSortIncome() {
      this.sortIncome = true;
      this.sortOutcome = false;
      this.sortAll = false;
    },
    setSortOutcome() {
      this.sortOutcome = true;
      this.sortIncome = false;
      this.sortAll = false;
    },
    setSortAll() {
      this.sortAll = true;
      this.sortOutcome = false;
      this.sortIncome = false;
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: 0 auto;
}
</style>