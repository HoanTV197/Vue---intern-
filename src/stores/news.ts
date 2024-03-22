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
        async getNewsList (){
            try {
                return await axiosConfig.get(API.NEWS).then((data : any)=>{
                    this.news = data;
                    return data.data
                })
            } catch (error) {
                return error
            }
        }
    }
})