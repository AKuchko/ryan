<template>
    <button class="base-button" type="submit">{{ text }}</button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        text: {
            type: String,
            default: 'Button'
        }
    }
}
</script>

<style lang="scss">
.base-button {
    display: block;
    width: 250px;
    height: 40px;
    padding: 0 15px;
    border: 1px solid $color-text-dark;
    border-radius: 10px;
    background: transparent;
    transition: all 0.2s ease 0s;

    &:hover {
        background: $color-text-dark;
        color: #222;
    }
}

@media (prefers-color-scheme: light) {
    .base-button {
        border-color: $color-text-light;
    }
}
</style>