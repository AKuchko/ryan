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
    padding: 30px 20px;
    background: $color-secondary-dark;
    border-radius: 10px;
}


@media (prefers-color-scheme: light) {
    .base-block {
        background: $color-secondary-light;
    }
}
</style>