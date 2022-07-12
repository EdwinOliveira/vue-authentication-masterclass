<!-- eslint-disable vue/multi-word-component-names -->
<template lang="html">
  <div class="container__footer">
    <div class="container--footer__inner"></div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({ name: "app-footer" })
export default class Footer extends Vue {
  public constructor() {
    super({});
  }
}
</script>
<style lang="scss" scoped>
.container__footer {
  height: 52px;
}
</style>
