<!-- eslint-disable vue/multi-word-component-names -->
<template lang="html">
  <div class="container__dashboard"></div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from "@/core/store";

@Options({
  name: "app-dashboard",
})
export default class Dashboard extends Vue {
  public constructor() {
    super({});

    console.log(store.state.users);
  }
}
</script>
<style lang="scss" scoped></style>
