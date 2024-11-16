<script lang="ts">
import { defineComponent } from "vue";
import { fetchUsers, User } from "@/api/User/User";

export default defineComponent({
  name: "Main",
  data() {
    return {
      userList: [] as User[], // userList 타입 명시
    };
  },
  async mounted() {
    await this.getUser(); // 비동기 메서드 호출
  },
  methods: {
    async getUser(): Promise<void> {
      try {
        const users = await fetchUsers();
        this.userList = users; // 정상적으로 데이터 할당
      } catch (error) {
        console.error("Error in getUser:", error);
      }
    },
  },
});
</script>

<template>
  <main>
    <h1>나 메인임 ㅋㅋ</h1>
    <ul>
      <li v-for="user in userList" :key="user.id">{{ user.name }}</li>
    </ul>
  </main>
</template>

<style scoped>
/* 스타일 추가 가능 */
</style>