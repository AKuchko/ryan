<template>
  <label></label>
  <input @type="type" class="base-input">
</template>

<script>
export default {
  name: 'VBaseInput',
  props: {
    type: String
  }
}
</script>

<style lang="scss">
.base-input {
    width: 250px;
    height: 40px;
    border: 1px solid #f2f2f2;
    border-radius: 10px;
    font-size: 20px;
    background: transparent;
}
</style>
