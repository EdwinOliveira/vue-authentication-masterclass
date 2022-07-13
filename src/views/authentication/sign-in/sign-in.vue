<!-- eslint-disable vue/multi-word-component-names -->
<template lang="html">
  <div class="container__sign-in">
    <div class="container--sign-in__inner">
      <form
        class="container--sign-in--inner__form"
        method="post"
        @submit="signIn($event)"
      >
        <div class="container--sign-in--inner--form__control">
          <span for="email">Email</span>
          <input type="email" v-model="email" placeholder="Enter email..." />
        </div>
        <div class="container--sign-in--inner--form__control">
          <span for="password">Password</span>
          <input
            type="password"
            v-model="password"
            placeholder="Enter password..."
          />
        </div>
        <div class="divider"></div>
        <div class="container--sign-in--inner--form__actions">
          <button type="submit">
            <span>Sign In</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { SignInModel } from "./structs/sign-in.model";
import * as uuid from "uuid";
import { StoreCollection } from "@/shared/constants/store.collection";
import { ViewCollection } from "@/shared/constants/view.collection";
import { StoreService } from "@/core/services/store.service";
import { JWTService } from "@/core/services/jwt.service";
import { UserEntity } from "@/shared/structs/entities/user.entity";

@Options({ name: "app-sign-in" })
export default class SignIn extends Vue {
  public email: string | null = null;
  public password: string | null = null;

  private readonly storeService: StoreService;
  private readonly jwtService: JWTService;

  public constructor() {
    super({});

    this.storeService = StoreService.instance;
    this.jwtService = JWTService.instance;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public signIn(event: Event): void {
    if (this.email !== null && this.password !== null) {
      const data = new SignInModel(this.email, this.password);

      setTimeout(async () => {
        const userEntity = new UserEntity(uuid.v4(), data.email, data.password);

        console.log("v2");

        this.jwtService.refreshTokens();

        this.storeService.commit(StoreCollection.ADD_USER, userEntity);

        this.$router.replace(ViewCollection.DASHBOARD);
      }, 5000);
    }

    event.preventDefault();
  }
}
</script>
<style lang="scss" scoped>
.container__sign-in {
  min-height: inherit;
  min-width: 320px;

  padding: 42px;

  .container--sign-in__inner {
    display: flex;
    flex-direction: column;

    .container--sign-in--inner__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;

      .container--sign-in--inner--form__control {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 8px;
      }

      .container--sign-in--inner--form__control,
      .container--sign-in--inner--form__actions {
        width: 100%;
      }
    }
  }
}
</style>
