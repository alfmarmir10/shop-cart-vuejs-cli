import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        img:
          "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105531088L.jpg",
        description: "Agua Ciel 1 lt",
        price: 12
      },
      {
        id: 2,
        img:
          "https://s.cornershopapp.com/product-images/188736.jpg?versionId=6D43YJ7Jnyk1WyHhTA0xOWBcyvyMMDnc",
        description: "Agua Skarch 1.5 lt",
        price: 10
      },
      {
        id: 3,
        img:
          "https://d1zc67o3u1epb0.cloudfront.net/media/catalog/product/cache/23527bda4807566b561286b47d9060f4/b/o/botella_agua_1.5l.jpg",
        description: "Agua Máxima 1.5 lt",
        price: 9
      }
    ],
    cart: [],
    cartList: [],
    totals: {
      subtotal: 0,
      iva: 0,
      total: 0,
    }
  },
  mutations: {
    addToCartMutation (state, product) {
      const productExist = state.cart.find((el) => el.id === product.id);
      let objToAdd;
      if(!productExist){
        objToAdd = {
          ...product,
          quantity: 1,
          subtotal: product.price
        };
        state.cart.push(objToAdd);
      } else {
        const index = state.cart.indexOf(productExist);
        objToAdd = {
          ...productExist,
          quantity: productExist.quantity + 1,
          subtotal: productExist.price * (productExist.quantity + 1),
        }
        state.cart[index] = objToAdd;
      }
      state.cartList = [];
      state.cartList = state.cart;
    },
    removeFromCartMutation (state, product) {
      const productExist = state.cart.find((el) => el.id === product.id);
      const index = state.cart.indexOf(productExist);
      let objToAdd;
      if (productExist.quantity - 1 === 0) {
        state.cart.splice(index, 1);
      } else {
        objToAdd = {
          ...productExist,
          quantity: productExist.quantity - 1,
          subtotal: productExist.price * (productExist.quantity - 1),
        }
        state.cart[index] = objToAdd;
      }
      state.cartList = [];
      state.cartList = state.cart;
    },
    totalizeCart (state) {
      let subtotal = 0, iva = 0, total = 0;
      for(let i = 0; i < state.cart.length; i += 1){
        subtotal = subtotal +  Number(state.cart[i].subtotal);
      }
      iva = subtotal * .16;
      total = subtotal + iva;
      state.totals = {
        subtotal,
        iva,
        total,
      }
      console.log(subtotal);
      console.log(iva);
      console.log(total);
    },
  },
})

export default store;