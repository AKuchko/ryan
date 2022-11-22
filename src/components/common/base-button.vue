<template>
    <button 
    :class="buttonStyle" 
    type="submit">
        <icon v-if="icon" 
            :icon="icon"
            color="inherit"/>
        {{ text }}
    </button>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
    name: 'BaseButton',
    components: { Icon },
    props: {
        text: { type: String, default: 'Button' },
        type: { type: String, default: 'none-decoration', valdator: (value) => ['none-decoration', 'outlined', 'filled'].includes(value) },
        width: { type: Number },
        icon: { type: String, default: '' }
    },
    computed: {
        buttonStyle() {
            return 'simple-text base-button base-button--' + this.type
        }
    }
}
</script>

<style lang="scss" scoped>
.base-button {
    display: block;
    background: transparent;
    transition: all 0.2s ease 0s;
}

.base-button--none-decoration {
    position: relative;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 1px;
        background: $color-text-dark;
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
}

.base-button--outlined {
    min-width: 230px;
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
    min-width: 230px;
    height: 40px;
    border-radius: 10px;
    color: $color-text-light;
    background: $color-text-dark;

    &:hover {
        opacity: 0.8;
    }
}

@media (prefers-color-scheme: light) {
    .base-button--outlined {
        border-color: $color-text-light;

        &:hover {
            background: $color-text-light;
            color: $color-text-dark;
        }
    }

    .base-button--filled {
        color: $color-text-dark;
        background: $color-text-light;
    }

    .base-button--none-decoration::after {
        background: $color-text-light;
    }
}
</style>