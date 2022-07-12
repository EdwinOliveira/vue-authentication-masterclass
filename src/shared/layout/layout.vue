<!-- eslint-disable vue/multi-word-component-names -->
<template lang="html">
  <div class="container">
    <div class="container__inner">
      <app-navbar></app-navbar>
      <app-content></app-content>
    </div>
    <app-footer></app-footer>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Navbar from "./components/navbar.vue";
import Content from "./components/content.vue";
import Footer from "./components/footer.vue";

@Options({
  name: "",
  components: {
    "app-navbar": Navbar,
    "app-content": Content,
    "app-footer": Footer,
  },
})
export default class Layout extends Vue {
  public constructor() {
    super({});
  }
}
</script>
<style lang="scss" scoped>
.container {
  min-height: inherit;
  width: inherit;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container__inner {
    display: flex;
    flex-direction: column;
  }
}
</style>
