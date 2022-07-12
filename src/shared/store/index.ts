import { createStore } from "vuex";
import { UserEntity } from "../entities/user.entity";

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
