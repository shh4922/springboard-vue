<script setup lang="ts">
import {ref} from "vue";

const title = ref("")

</script>

<template>
  <div class="create-post-container">
    <input
        type="text"
        placeholder="제목을 입력하세요"
        v-model="title"/>
  </div>
</template>

<style scoped>
.create-post-container {
  background-color: aliceblue;
  width: 100%;
  text-align: center;
}
</style>