<template>
  <div>
    <h1>Vuex Store Value</h1>
    <h1 class="value">{{ storeValue }}</h1>
    <button @click="addToStoreValue(-parseInt(value))">-</button>
    <input v-model="value" type="number" />
    <button @click="addToStoreValue(parseInt(value))">+</button>
    <div>
      <button class="btn" @click="addFromAsyncOperation()">
        Add by Random Number
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    // spread the state object .e.g. merge it with the rest of the computed properties
    ...mapState(["storeValue"]),
  },
  methods: {
    ...mapMutations(["addToStoreValue"]),
    ...mapActions(["addFromAsyncOperation"]),
  },
};
</script>

<style>
.value {
  font-size: 5rem;
}
button {
  border-radius: 100%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: 700;
  cursor: pointer;
}
input {
  padding: 0.4rem;
  margin: 0 0.5rem;
}
.btn {
  border-radius: 0.5rem;
  width: auto;
  background-color: #41b983;
  cursor: pointer;
  margin-top: 1rem;
}
</style>
