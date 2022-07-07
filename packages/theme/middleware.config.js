module.exports = {
  integrations: {
    AlgoliaVue: { // name of your integration
      location: '@vue-storefront/AlgoliaVue-api/server', // name of your api-client package followed by `/server`
      configuration: {
        api: {
          url: '' // URL of your e-commerce platform
        }
      }
    }
  }
};
