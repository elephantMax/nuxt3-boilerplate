import type { ExampleBody, ExampleParams } from '~/api/services/example-service';

export const useExampleStore = defineStore('example', {
  state() {
    return {
      test: null,
    };
  },
  actions: {
    async exampleAction(params: ExampleParams, body: ExampleBody) {
      try {
        const response = await this.$api.example.exampleRequest(params, body);
        // validated data
        console.log(response.data);
      } catch (error) {
        // zod error || responseError
        console.error(error);
      }
    },
  },
});
