<template>
  <div class="budget-item">
    <span class="budget-comment">{{ commentary }}</span>
    <span class="budget-value">{{ Math.abs(value) }}</span>
    <template v-if="type === 'INCOME'">
      <span class="el-icon-bottom"></span>
    </template>
    <template v-else>
      <span class="el-icon-top"></span>
    </template>
    <ElButton type="danger" size="mini" @click="deleteItem(deleteItemId, deleteItemCommentary)">Delete</ElButton>
  </div>
</template>

<script>
import swal from 'sweetalert';

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
    deleteItemCommentary: {
      type: String,
      default: 'item',
    },
    type: {
      type: String,
      default: 'INCOME',
    },
  },
  methods: {
    deleteItem(id, comment) {
      swal({
        title: `Delete ${comment} item?`,
        buttons: true,
      })
          .then((willDelete) => {
            if (willDelete) {
              this.$root.$refs.BudgetList_component.deleteItem(id);
              swal(`${comment} has been deleted!`, {
                icon: "success",
              });

            }
          });
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
  margin-right: 5px;
}

.el-icon-top,
.el-icon-bottom {
  margin-right: 5px;
}
</style>