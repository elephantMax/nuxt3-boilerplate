<script setup lang="ts">

const { data, error } = await useAsyncData(async (app) => {
  if (!app?.$api) {
    return null;
  }

  return app.$api.example.exampleRequest({
    param1 : '1',
    param2 : '2',
  }, {
    example: false,
  });
});
</script>

<template>
  <div>
    <span v-if="error">
      {{ error.message }}
    </span>
    <div v-else-if="data">
      <span>
        {{ data.data.field1 }}
      </span>
      <span v-if="data.data.field2">
        {{ data.data.field2 }}
      </span>
    </div>
  </div>
</template>
