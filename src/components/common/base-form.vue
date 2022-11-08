<template>
    <form action="post" @submit.prevent="sendData">
        <ul class="base-form__list">
            <li class="base-form__list-item" v-for="input in inputs">
                <base-input
                    :id="input.id"
                    :type="input.type" 
                    :label="input.label" 
                    :placeholder="input.placeholder"
                    @input-emit="updateInputValue"/>
            </li>
        </ul>
        <base-button text="Sign up"></base-button>
        <caption>{{caption}}</caption>
    </form>
</template>

<script>
import BaseInput from './base-input.vue';
import BaseButton from './base-button.vue';

export default {
    name: 'BaseForm',
    components: { BaseInput, BaseButton },
    emits: ['submit-emit'],
    data() {
        return {
            inputsData: {}
        }
    },
    props: {
        inputs: { type: Array },
        caption:  ''
    },
    methods: {
        updateInputValue({ value, id }) {
            this.inputsData[id] = value
            console.log(this.inputsData);
        },
        sendData() {
            this.$emit('submit-emit', this.inputsData)
        }
    },
}
</script>

<style lang="scss">
.base-form {
    &__list-item {
        margin-bottom: 10px;
    }
}
</style>