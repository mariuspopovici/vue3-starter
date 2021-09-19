import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import axios from "axios";

/**
 * Simple Vuex store with a numeric store value and some possible mutations, actions and getters.
 * Consider separating concerns by implementing feature specific stores via modules.
 * See https://next.vuex.vuejs.org/guide/modules.html
 */
const store = createStore({
  state() {
    return {
      storeValue: 0
    };
  },
  mutations: {
    /**
     * Adds a numeric value provided via payload to the store value.
     * @param {Object} state Vuex state object
     * @param {Number} payload The payload, or mutation argument.
     */
    addToStoreValue(state, payload) {
      state.storeValue += payload;
    }
  },
  actions: {
    /**
     * Adds a numeric value obtained from an async external request to the store value.
     * @param {Object} context Vuex context object.
     */
    async addFromAsyncOperation(context) {
      let data = await axios.get(
        "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new"
      );
      context.commit("addToStoreValue", data.data);
    }
  },
  getters: {
    /**
     * Returns whether the store value is an even number.
     * @param {Object} state
     * @returns a boolean value, true if storeValue is currently an even number and false otherwise.
     */
    isEven: (state) => {
      return state.storeValue % 2 === 0;
    },
    /**
     * Returns whether the store value is an odd number.
     * @param {Object} state
     * @returns a boolean value, true if storeValue is currently an odd number and false otherwise.
     */
    isOdd: (state) => {
      return state.storeValue % 2 === 1;
    }
  }
});

const app = createApp(App);
app.use(store);

app.mount("#app");
