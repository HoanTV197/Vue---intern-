import { defineStore } from 'pinia';
import axiosConfig from '@/services/api.js';
import { API } from '@/utils/api';

interface Product {
  products: Array<any>;
  pagination: any;

}

export const productStore = defineStore('product', {
  state: (): Product => {
    return {
      products: [],
      pagination: null,
    };
  },
  actions: {
    async getProductList(pageNumber: number, limit : number) {
      try {
        return await axiosConfig.get(`${API.PRODUCTS}?limit=5`, {
            params: {
              page: pageNumber,
              limit: limit
            }
          }).then((data: any) => {
          
          this.products = data.data.data;
          this.pagination = data.data;
          return data.data.data;
        });
      } catch (error) {
        return error;
      }
    },

    async createProduct(formData: any) {
      try {
        return await axiosConfig
          .post(API.PRODUCTS, formData)
          .then((data: any) => {
            return data.data;
          });
      } catch (error) {
        return error;
      }
    },
    async updateProduct(formData: any, index: any) {
      try {
        return await axiosConfig
          .put(`${API.PRODUCTS}/${index}`, formData)
          .then((data: any) => {
            return data.data;
          });
      } catch (error) {
        return error;
      }
    },
    async deleteProduct(index: any) {
      try {
        return await axiosConfig
          .delete(`${API.PRODUCTS}/${index}`)
          .then((data: any) => {
            return data.data;
          });
      } catch (error) {
        return error;
      }
    },
    async getProductById(index: any) {
      try {
        return await axiosConfig
          .get(`${API.PRODUCTS}/${index}`)
          .then((data: any) => {
            return data.data;
          });
      } catch (error) {
        return error;
      }
    },
  },
});
