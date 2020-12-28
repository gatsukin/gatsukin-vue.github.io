<template>
  <nav-bar />
  watafac
  <hello-world />
</template>

<style lang="less">
#app {
    text-align: center;
    color: #2C3E50;
    font-family: Avenir, Helvetica, Arial, sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#nav {
    padding: 30px;

    a {
        color: #2C3E50;
        font-weight: bold;

        &.router-link-exact-active {
            color: #42B983;
        }
    }
}
</style>
