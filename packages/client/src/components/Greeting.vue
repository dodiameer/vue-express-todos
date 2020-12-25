<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p v-else>{{ message }}</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { API_URL } from "../constants"
// eslint-disable-next-line no-unused-vars
import { IndexRes } from "@vue-express-todos/common"

@Component
export default class Greeting extends Vue {
  loading: boolean = true
  message: string = ""

  mounted() {
    fetch(API_URL)
      .then(res => res.json())
      .then((json: IndexRes) => {
        this.message = json.message
        this.loading = false
      })
  }
}
</script>