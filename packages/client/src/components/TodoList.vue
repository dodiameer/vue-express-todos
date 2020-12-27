<template>
  <ul>
    <h1 v-if="loading">Loading...</h1>
    <li v-else-if="data.length !== 0" v-for="todo in data" :key="todo.id">
      <p>{{ todo.title }}</p>
      <p v-if="todo.description !== undefined">{{ todo.description }}</p>
      <button @click="toggleCompletion(todo.id)">
        {{ todo.isComplete ? "Mark incomplete" : "Mark complete"}}
      </button>
    </li>
    <h1 v-else>No todos added</h1>
  </ul>
</template>
<script lang="ts">
// eslint-disable-next-line no-unused-vars
import { ITodo } from "@vue-express-todos/common";
// eslint-disable-next-line no-unused-vars
import TodoService from "../services/TodoService"
import { Component, Vue } from "vue-property-decorator"

@Component
export default class TodoList extends Vue {
  loading: boolean = true;
  data: ITodo[] = [];
  service: TodoService = new TodoService();

  mounted() {
    this.service.GetAll().then(data => {
      this.data = data
      this.loading = false
    })
  }

  async toggleCompletion(id: ITodo["id"]) {
    const currentTodo = this.data.filter(todo => todo.id === id)[0];
    const copy = { ...currentTodo };
    copy.isComplete = !copy.isComplete;
    await this.service.Update(id, copy)
    this.data = await this.service.GetAll()
  }
}
</script>