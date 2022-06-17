import { defineStore } from "pinia";
import products from '@/data/products.json'

export const useProductStore =  defineStore("ProductStore", {
  state: () =>{
    return{
      products :[],
    };
  },

  actions :{
    // fill empty object with json file
    async fill() {
      this.products = (await import ('@/data/products.json')).default
      // this.products = (await axios.get(put/Your/EndPoint/Here)).data
    }
  }


});