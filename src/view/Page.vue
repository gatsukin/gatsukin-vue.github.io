<template>
  <div id="page">
    <div class="app">
      <div class="d-flex justify-content-start align-items-start flex-row w-100">
        <div class="d-flex justify-content-center align-items-start flex-column col-2">
          <router-link to="/" class="app__link">Hello World!</router-link>
          <router-link to="/login" class="app__link">Login</router-link>
        </div>
        <div class="col-10">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>