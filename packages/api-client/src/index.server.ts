import { apiClientFactory } from '@vue-storefront/core';
import type { Setttings, Endpoints } from './types';
import { getProduct } from './api/getProduct';
import axios from 'axios';

const init = (settings) => {
  const client = axios.create({
    baseURL: settings.api.url
  });

  return {
    config: settings,
    client
  };
};

function onCreate(settings) {
  if (!settings?.client) {
    return init(settings);
  }

  return {
    config: settings,
    client: settings.client
  };
}

const { createApiClient } = apiClientFactory<any, any>({
  onCreate,
  api: {
    getProduct
  }
});

export {
  createApiClient,
  init
};
