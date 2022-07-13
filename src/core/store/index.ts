import { UserEntity } from "@/shared/structs/entities/user.entity";
import { createStore } from "vuex";

export default createStore({
  state: {
    users: Array<UserEntity>(),
  },
  getters: {
    fetchUsers(state): Array<UserEntity> {
      return state.users;
    },
  },
  mutations: {
    addUser(state, user: UserEntity): void {
      state.users.push(user);
    },
  },
  actions: {},
  modules: {},
});
