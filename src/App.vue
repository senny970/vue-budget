<template>
  <div id="app">
    <Header/>
    <Form/>
    <TotalBalance/>
    <BudgetList/>
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