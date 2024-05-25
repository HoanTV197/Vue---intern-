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

    async getOrderById(index: any) {
      try {
        return await axiosConfig.get(`${API.ORDERS}/${index}`).then((data: any) => {
          return data.data;
        });
      } catch (error) {
        return error;
      }
    },

    async updateOrder(index: any, payload: any) {
      try {
        return await axiosConfig.post(`${API.ORDERS}/status/${index}`, payload).then((data: any) => {
          return data.data;
        });
      } catch (error) {
        return error;
      }
    },

    async getCustomerList() {
      try {
        const data = await axiosConfig.get(API.ORDERS);
        const customers = data.data.data.map((order: any) => ({
          id: order.user.id,
          name: `${order.user.first_name} ${order.user.last_name}`,
          phone: order.user.phone,
          email: order.user.email,
          location: order.purchase_place,
        }));
        return customers;
      } catch (error) {
        return error;
      }
    },
    
  },
});
