<template>
  <div>
    <h1>Vue Router Demo</h1>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/studentForm">Student form</router-link></li>
      </ul>
    </nav>

    <!-- Display the routed component here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 15px;
}

nav ul li a {
  text-decoration: none;
  color: blue;
}

nav ul li a.router-link-active {
  font-weight: bold;
  color: green;
}
</style>
