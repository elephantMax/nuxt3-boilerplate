import { $fetch, type FetchOptions } from 'ohmyfetch';

import ExampleService from '~/api/services/example-service';

export interface ApiInstance {
  example: ExampleService
}

export default defineNuxtPlugin({
  name: 'api',
  setup(app) {
    const fetchOptions: FetchOptions = {
      baseURL: app.$config.public.API_BASE_URL,
    };

    const apiFetcher = $fetch.create(fetchOptions);

    const modules: ApiInstance = {
      example: new ExampleService(apiFetcher),
    };

    return {
      provide: {
        api: modules,
      },
    };
  },
});
