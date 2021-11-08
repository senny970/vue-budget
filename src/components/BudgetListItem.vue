<template>
  <div class="budget-item">
    <span class="budget-comment">{{ commentary }}</span>
    <span class="budget-value">{{ value }}</span>
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
      //if(confirm('Delete Item?'))
        //this.$root.$refs.BudgetList_component.deleteItem(id);
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

.swal-title {
  font-size: 20px !important;
}
</style>