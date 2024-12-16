<script setup lang="ts">
import {ref} from "vue";
import {register} from "@/api/Auth";

const email = ref<string>("");
const password = ref<string>("");
const name = ref<string>("");

const singup = async () => {
  if(password.value.length < 3) {
    alert("비번 작음")
    return
  }
  const params = {
    email: email.value,
    password: password.value,
    name: name.value
  }
  try {
    const res = await register(params)
    console.log(res)
    if(res.statusCode !== 200) {
      alert(res.responseMessage)
      return
    }
    alert(res.responseMessage)
  } catch (error) {
    alert(error)
  }
}
</script>

<template>
  <div>
    <h1>회원가입 페이지임ㅋㅋ</h1>
    <div class="input">
      <input type="email" v-model="email" @input="email=$event.target.value"/>
      <input type="password" v-model="password" @input="password=$event.target.value"/>
      <input type="text" v-model="name" @input="name=$event.target.value"/>
      <button @click="singup">회원가입</button>
    </div>
  </div>
</template>

<style scoped>

</style>