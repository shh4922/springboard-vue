<script setup lang="ts">
import {computed, reactive, ref, watch} from "vue";
import { login } from "@/api/Auth/Auth";
import {mapState} from "pinia";
import {useAuthStore} from "@/stores/AuthStore";


const email = ref<string>("");
const password = ref<string>("");

async function postLogin() {
  const params = {
    email: email.value,
    password: password.value,
  }

  try {
    const res = await login(params)
    if(res.statusCode !== 200) {
      alert(res.responseMessage)
      return
    }
    const accessToken = res.data.acessToken
    localStorage.setItem("accessToken", accessToken)
  } catch (error) {
    alert(error)
  }
}

</script>

<template>
  <div>
    <h1>로그인 페이지임ㅋㅋㅋㅋ</h1>
    <div class="input">
      <input type="email" v-model="email" @input="email=$event.target.value"/>
      <input type="password" v-model="password" @input="password=$event.target.value"/>
      <button @click="postLogin">로그인</button>
    </div>
  </div>
</template>

<style scoped>

</style>