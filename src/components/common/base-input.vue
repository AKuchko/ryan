<template>
    <div class="base-input">
        <input class="base-input__input" :id="id" :type="type" :placeholder="placeholder" @input="updateModel" v-model="inputModel">
        <label class="base-input__label" :for="id">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: 'BaseInput',
    emits: [ 'input-emit' ],
    data() {
        return {
            inputModel: ''
        }
    },
    props: {
        id: { type: String, required: true },
        type: { type: String, default: 'text', validator: prop => ['text', 'tel', 'email'].includes(prop) },
        placeholder: '',
        label: ''
    },
    methods: {
        updateModel() {
            this.$emit('input-emit', { value: this.inputModel, id: this.id })
        }
    },
}
</script>

<style lang="scss">
.base-input {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    width: 250px;
    height: 40px;
    border-radius: 10px;
    font-size: 16px;
    border: 1px solid $color-text-dark;
    background: transparent;

    &__label {
        position: absolute;
        top: 0;
        left: 5px;
        transform: translateY(-50%);
        padding: 0 10px;
        font-size: 12px;
        background: $color-secondary-dark;
        transition: all 0.2s ease 0s ;
    }

    &__input {
        width: 100%;
        background: transparent;

        &::placeholder {
            text-transform: uppercase;
        } 
    }

    &__input:focus ~ .base-input__label {
        font-size: 10px;
    }
}


@media (prefers-color-scheme: light) {
    .base-input {
        border-color: $color-text-light;
    }

    .base-input__label {
        background: $color-secondary-light;
    }
}
</style>