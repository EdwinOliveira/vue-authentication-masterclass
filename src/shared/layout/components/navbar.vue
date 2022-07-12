<!-- eslint-disable vue/multi-word-component-names -->
<template lang="html">
  <div class="container__navbar">
    <div class="container--navbar__inner">
      <label>DO</label>
      <div class="container--navbar--links">
        <router-link to="/sign-in">Sign In</router-link>
        <router-link to="/sign-up">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({ name: "app-navbar" })
export default class Navbar extends Vue {
  public constructor() {
    super({});
  }
}
</script>
<style lang="scss" scoped>
.container__navbar {
  height: 52px;

  .container--navbar__inner {
    height: inherit;
    padding: 0px 24px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .container--navbar--links {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;

      cursor: pointer;

      > * {
        text-decoration: none;
        color: #eaeaea;

        font-size: clamp(0.8em, 0.8em + 0.5vw, 1.8em);
      }
    }
  }
}
</style>
