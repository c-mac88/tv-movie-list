<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}
</style>
