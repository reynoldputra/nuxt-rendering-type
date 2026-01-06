// https://nuxt.com/docs/api/configuration/nuxt-config

import axios from "axios";

// get statis path for product ssg
const getProductPath = async (): Promise<string[]> => {
  try {
    const response = await axios.get<Array<{ id: number }>>(
      'https://api.escuelajs.co/api/v1/products'
    );
    return response?.data.map((p: { id: number }) => `/product/ssg/${p.id}`) || [];
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.warn('Failed to fetch product paths for prerendering:', errorMessage);
    // Return empty array to allow build to continue
    return [];
  }
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
      if (nitroConfig.prerender?.routes) {
        nitroConfig.prerender.routes.push(...slugs);
      }
    },
  },
})
