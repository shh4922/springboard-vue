<template>
  <div class="board-container">
    <div>
      <h1>게시판</h1>
      <router-link to="create-post">글쓰기</router-link>
    </div>

    <table class="board-table">
      <thead>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>날짜</th>
        <th>댓글</th>
        <th>추천</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(post,index) in posts" :key="post.id" @click="moveDetailPage(post.id)">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.author }}</td>
        <td>{{ formatDate(post.date) }}</td>
        <td>{{ post.comments }}</td>
        <td>{{ post.likes }}</td>
      </tr>
      </tbody>
    </table>
    <Pagination/>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import Pagination from "@/components/common/Pagination.vue";
import {useRouter} from "vue-router";

const router = useRouter()

const posts = ref([
  { id: 1, title: '첫 번째 게시글', author: '관리자', date: '2024-11-30', comments: 10, likes: 5 },
  { id: 2, title: 'Vue.js 게시판 만들기', author: '홍길동', date: '2024-11-29', comments: 4, likes: 8 },
  { id: 3, title: 'Cesium 지도 프로젝트', author: '김철수', date: '2024-11-28', comments: 7, likes: 2 }
])

const moveDetailPage = (postId:number) => {
  router.push(`/board/${postId}`)
}

const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString('ko-KR', options);
};


</script>

<style scoped>
.board-container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
}

.board-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.board-table th,
.board-table td {
  border: 1px solid #ddd;
  text-align: center;
  padding: 8px;
}

.board-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.board-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.board-table tr:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}
</style>