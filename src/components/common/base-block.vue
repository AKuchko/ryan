<template>
    <div class="base-block">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'BaseBlock'
}
</script>

<style lang="scss">
.base-block {
    padding: 20px;
    background: $color-secondary-dark;
    border-radius: 10px;
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.1s ease;

    @media (min-width: 768px) {
        padding: 30px;
    }

    @media (min-width: 1440px) {
        padding: 40px;
    }

    @media (prefers-color-scheme: light) {
        background: $color-secondary-light;
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    }
}
</style>