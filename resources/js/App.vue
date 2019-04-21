<template>
  <div id="container">
    <div class="sidebar">
      <ul>
        <li>
          <router-link :to="{name:'home'}">Home</router-link>
        </li>
        <li>
          <router-link :to="{name:'example'}">Welcome</router-link>
        </li>
        <li>
          <router-link :to="{name:'about'}">About</router-link>
        </li>
      </ul>
    </div>
    <b-nav tabs>
      <b-nav-item>
        <router-link :to="{name:'home'}">Home</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link :to="{name:'example'}">Welcome</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link :to="{name:'about'}">About</router-link>
      </b-nav-item>
    </b-nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log("App component mounted");
  }
};
</script>
<style scoped>
</style>


