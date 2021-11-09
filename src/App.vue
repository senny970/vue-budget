<template>
  <div id="app">
    <Header/>
    <Form @submitForm="onSubmitForm" />
    <TotalBalance :total="totalBalance"/>
    <BudgetList :list="list" @deleteItem="onDeleteItem"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";

export default {
  name: 'App',
  components: {
    Header,
    BudgetList,
    TotalBalance,
    Form,
  },
  data: () => ({
     list: {
       1: {
         type: 'INCOME',
         value: 100,
         commentary: 'Some comment 1',
         id: 1,
       },
       2: {
         type: 'INCOME',
         value: 150,
         commentary: 'Some comment 2',
         id: 2,
       },
       3: {
         type: 'OUTCOME',
         value: 100,
         commentary: 'Some comment 3',
         id: 3,
       },
       4: {
         type: 'INCOME',
         value: 120,
         commentary: 'Some comment 4',
         id: 4,
       },
       5: {
         type: 'OUTCOME',
         value: 30,
         commentary: 'Some comment 5',
         id: 5,
       },
     },
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item) => acc + item.value, 0)
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
    },
    onSubmitForm(data) {
      if (data.type === "OUTCOME") {
        if (Math.sign(data.value) >= 0) {
          data.value = -data.value;
        }
      } else {
        data.value = Math.abs(data.value);
      }

      const newObj = {
        ...data,
        id: Math.random(),
      };

      this.$set(this.list, newObj.id, newObj);
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>