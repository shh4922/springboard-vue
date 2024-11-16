<script lang="ts">
import {defineComponent} from 'vue'
import {fetchBoardAll} from "@/api/CompanyBoard/CompanyBoard"

export default defineComponent({
  name: "CompanyBoard",
  mounted() {
    this.getBoard()
  },
  methods: {
    async getBoard() {
      const boards = await fetchBoardAll()
      console.log(boards)
    }
  }
})
</script>

<template>
  <h1>게시판임 여기 ㅋㅋ</h1>
</template>

<style scoped>

</style>