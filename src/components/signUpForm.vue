<template>
    <base-block>
        <template #block-inner>
            <base-form :inputs="inputs" @submit-emit="login"/>
        </template>
    </base-block>
</template>

<script>
import BaseBlock from './common/base-block.vue';
import BaseForm from './common/base-form.vue';
import authService from '@/services/auth-service';

export default {
    name: 'SignUpForm',
    components: { BaseBlock, BaseForm },
    data() {
        return {
            inputs: [
                {
                    id: 'email',
                    type: 'email',
                    label: 'Email',
                    placeholder: 'allollal@mail.ru'
                },
                {
                    id: 'password',
                    type: 'text',
                    label: 'Password',
                    placeholder: 'coolhacker228'
                },
            ]
        }
    },
    methods: {
        login(data) {
            authService.login({ email: data.email, password: data.password })
        }
    }
}
</script>