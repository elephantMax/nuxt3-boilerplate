// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools : { enabled: true },
  modules  : [
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
  ],
  eslint: {
    fix: true,
  },
});
