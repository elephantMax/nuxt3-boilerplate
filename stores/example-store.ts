export const useExampleStore = defineStore('example', {
  state() {
    return {
      test: null,
    };
  },
  actions: {
    async exampleAction() {
      try {
        const response = await this.$api.example.exampleRequest({
          param1 : 'test',
          param2 : 'test',
        }, {
          example: true,
        });
        // validated data
        console.log(response.data);
      } catch (error) {
        // zod error || responseError
        console.error(error);
      }
    },
  },
});
