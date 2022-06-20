<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>


<style scoped>
.btn{
    padding: 10px 15px;
    background: none;
    color: #fff;
    border: 1px solid #fff;
    cursor: pointer;
}
.btn:hover{
    border: 1px solid rgb(47, 65, 147);
}
</style>