<template>
  <router-view />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  background-color: #fcfbfe;
}

body {
  font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 5vh 10vw;
  font-size: calc(10px + 0.33vw);
  color: #121314;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-size: 4.5em;
}

h2 {
  font-size: 2.2em;
}

p {
  font-size: 1.6em;
  font-weight: 300;
  line-height: 1.4;
  max-width: 29em;
}

a {
  text-decoration: none;
}
</style>
