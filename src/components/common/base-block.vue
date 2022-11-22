<template>
    <div class="base-block">
        <slot name="block-inner"></slot>
    </div>
</template>

<script>
export default {
    name: 'BaseBlock'
}
</script>

<style lang="scss">
.base-block {
    width: 100%;
    padding: 30px 40px;
    background: $color-secondary-dark;
    border-radius: 10px;
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
}


@media (prefers-color-scheme: light) {
    .base-block {
        background: $color-secondary-light;
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    }
}
</style>