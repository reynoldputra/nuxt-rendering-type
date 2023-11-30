// https://nuxt.com/docs/api/configuration/nuxt-config

import axios from "axios";

// get statis path for product ssg
const getProductPath = async () => {
  const response = await axios.get(
    'https://fakestoreapi.com/products'
  );
  return response?.data.map((p) => `/product/ssg/${p.id}`);
};

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      routes: ['/ssg']
    }
  },
  hooks: {
    async 'nitro:config'(nitroConfig) {
      const slugs = await getProductPath();
      nitroConfig.prerender.routes.push(...slugs);
    },
  },
})
