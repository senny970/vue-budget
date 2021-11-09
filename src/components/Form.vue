<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules">
      <ElFormItem label="Type" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type...">
          <ElOption label="Income" value="INCOME"/>
          <ElOption label="Outcome" value="OUTCOME"/>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.commentary"/>
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value"/>
      </ElFormItem>
      <ElButton type="primary" @click="onSubmit">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: "Form",
  data() {
    let validateValue = (rule, value, callback) => {
      if (!value || value <= 0) {
        return callback(new Error('Please input the value'));
      }

      if (!Number.isInteger(value)) {
        callback(new Error('Please input digits'));
      } else {
        callback();
      }
    };

    return {
      formData: {
        type: 'INCOME',
        commentary: '',
        value: 0,
      },
      rules: {
        type: [{required: true, message: 'Please select type', trigger: "blur",}],
        commentary: [{required: true, message: 'Please input comment', trigger: "blur",}],
        value: [
          {validator: validateValue, trigger: 'blur'},
        ],
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate(valid => {
        if (valid) {
          this.$emit('submitForm', {...this.formData});
          this.$refs.addItemForm.resetFields();
        }
      })
    },
    validateValue(rule, value, callback) {
      if (!value || value === 0) {
        callback(new Error('Please input the value'));
      }
    },
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}

.type-select {
  width: 100%;
}
</style>