<!-- eslint-disable vue/multi-word-component-names -->
<template lang="html">
  <div class="container__content">
    <div class="container--content__inner">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({ name: "app-content" })
export default class Content extends Vue {
  public constructor() {
    super({});
  }
}
</script>
<style lang="scss" scoped>
.container__content {
  min-height: calc(100vh - 104px);

  .container--content__inner {
    min-height: inherit;
  }
}
</style>
