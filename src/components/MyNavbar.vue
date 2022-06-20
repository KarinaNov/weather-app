<template>
      <div class="navbar__btns">
          <my-button @click="$router.push('/')">Today Weather</my-button>
          <my-button @click="$router.push('/week')" style="margin-left=20px">Weather for the week</my-button>
      </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar__btns{
    display: flex;
    align-items: center;
    padding: 0 15px;
}
</style>