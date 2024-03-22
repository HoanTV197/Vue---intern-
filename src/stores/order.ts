import { defineStore } from 'pinia';
import axiosConfig from '@/services/api.js';
import { API } from '@/utils/api';

interface Order {
  orders: Array<any>;
}
export const ordersStore = defineStore('order', {
  state: (): Order => {
    return {
      orders: [],
    };
  },
  actions: {
    async getOrderList() {
      try {
        return await axiosConfig.get(API.ORDERS).then((data: any) => {
          this.orders = data.data.data;
          return data.data;
        });
      } catch (error) {
        return error;
      }
    },
  },
});
