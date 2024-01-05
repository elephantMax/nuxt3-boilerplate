import type { PiniaPluginContext } from 'pinia';
import type { ApiInstance } from './api';

function setupPiniaClient({ store }: PiniaPluginContext, $api: ApiInstance) {
  // eslint-disable-next-line no-param-reassign
  store.$api = $api;
}

export default defineNuxtPlugin({
  name      : 'pinia-api',
  dependsOn : ['api'],
  setup(app) {
    const { $api, $pinia } = app;
    // @ts-ignore
    $pinia.use(store => setupPiniaClient(store, $api));
  },
});
