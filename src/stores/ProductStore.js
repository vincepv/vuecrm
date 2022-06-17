import { defineStore } from "pinia";


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