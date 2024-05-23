import { defineStore } from "pinia";
import { API } from "@/utils/api";
import axiosConfig from '@/services/api.js';

interface News {
    news: Array<any>
}

export const newsStore = defineStore('news',{
    state: () : News => {
        return {
            news: []
        }
    },
    actions: {
        // CRUD article
        async getNewsList() {
            try {
                return await axiosConfig.get(API.NEWS).then((data: any) => {
                    this.news = data.data.data;
                    return data.data;
                });
            } catch (error) {
                return error;
            }
        },

        async getNewsById(index: any) {
            try {
                return await axiosConfig.get(`${API.NEWS}/${index}`).then((data: any) => {
                    return data.data;
                });
            } catch (error) {
                return error;
            }
        },

        async createNews(formData: any) {
            try {
                return await axiosConfig.post(API.NEWS, formData).then((data: any) => {
                    return data.data;
                });
            } catch (error) {
                return error;
            }
        },

        async updateNews(index: any, formData: any) {
            try {
                return await axiosConfig.put(`${API.NEWS}/${index}`, formData).then((data: any) => {
                    return data.data;
                });
            } catch (error) {
                return error;
            }
        },

        async deleteNews(index: any) {
            try {
                return await axiosConfig.delete(`${API.NEWS}/${index}`).then((data: any) => {
                    return data.data;
                });
            } catch (error) {
                return error;
            }
        }




    }
})