<script setup lang="ts">
import {computed, reactive, ref, watch} from "vue";
import { login } from "@/api/Auth/Auth";
import {useStore} from "vuex";


const store = useStore()
const accessToken = computed(() => store.state.authStore.accessToken);

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
    console.log(accessToken.value)
    store.commit('authStore/setAccessToken', res.data.acessToken)
    console.log(accessToken.value)
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