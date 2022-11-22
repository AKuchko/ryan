<template>
  <div class="content-wrapper">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-family: 'Inter';
  color: $color-text-dark;
  background: $color-bg-dark;

  @media (prefers-color-scheme: light) {
    color: $color-text-light;
    background: $color-bg-light;
  }
}

.content-wrapper {
  padding: 20px;
}
</style>
