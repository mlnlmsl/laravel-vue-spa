<template>
  <div>
    <h5>Users</h5>
    <ul v-if="users">
      <li v-for="{ name, email } in users">
        <strong>Name:</strong>
        {{ name }},
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </div>
</template>
<script>
import HomeComponent from "./HomeComponent";
import axios from "axios";
export default {
  data() {
    return {
      users: null
    };
  },
  created() {
    this.fetchDate();
  },
  methods: {
    fetchDate() {
      axios.get("api/about").then(response => {
        this.users = response.data;
      });
    }
  }
};
</script>
<style scoped>
</style>

