<template>
    <button 
    :class="buttonStyle" 
    type="submit">{{ text }}</button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        text: { type: String, default: 'Button' },
        outlined: { type: Boolean, default: false },
        fill: { type: Boolean, default: false }
    },
    computed: {
        buttonStyle() {
            let style = 'base-button'
            if (this.outlined) style += ' base-button--outlined'
            if (this.fill) style += ' base-button--bordered'
            return style
        }
    }
}
</script>

<style lang="scss">
.base-button {
    display: block;
    background: transparent;
    transition: all 0.2s ease 0s;
}

.base-button--outlined {
    min-width: 250px;
    height: 40px;
    padding: 0 15px;
    border: 1px solid $color-text-dark;
    border-radius: 10px;

    &:hover {
        background: $color-text-dark;
        color: #222;
    }
}

.base-button--filled {
    background: $color-text-dark;
}

@media (prefers-color-scheme: light) {
    .base-button--outlined {
        border-color: $color-text-light;
    }
}
</style>