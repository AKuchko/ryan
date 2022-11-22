<template>
    <base-block>
        <base-button icon="system-uicons:arrow-left" text="Button"></base-button>
        <base-button type="filled" text="Button"></base-button>
        <base-button type="outlined" text="Button"></base-button>
    </base-block>
</template>

<script>
import BaseButton from '@/components/common/base-button.vue';
import BaseBlock from '@/components/common/base-block.vue';

export default {
    components: { BaseButton, BaseBlock }
}
</script>