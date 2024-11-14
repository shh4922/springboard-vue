<script lang="ts">
import {fetchUsers, User} from '@/api/User/User'

export default {
  name: "Main",
  data() {
    return {
      userList: [] as [User],
    }
  },
  created() {

  },
  mounted() {
    this.getUser()
  },
  methods: {
    async getUser() {
      const users = await fetchUsers();
      this.userList = users;
    },
  }

}
</script>

<template>
  <main>
    <h1>나 메인임 ㅋㅋ</h1>
    <ul>
      <li v-for="user in userList">{{user.name}}</li>
    </ul>
  </main>
</template>

<style scoped>

</style>