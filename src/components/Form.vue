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
  data: () => ({
    formData: {
      type: 'INCOME',
      commentary: '',
      value: 0,
    },
    rules: {
      type: [{ required: true, message: 'Please select type', trigger: "blur",}],
      commentary: [{ required: true, message: 'Please input comment', trigger: "blur",}],
      value: [
          { required: true, message: 'Please input value', trigger: "blur",},
          { type: 'number', message: 'Value must be number', trigger: "blur",}
      ],
    }
  }),
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate(valid => {
        if (valid) {
          this.$emit('submitForm', {...this.formData});
          this.$refs.addItemForm.resetFields();
        }
      })
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