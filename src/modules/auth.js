import { setItem } from "@/helpers/persistanceStorage";
import AuthService from "@/service/auth";

const state = {
  isLoading: false,
  user: null,
  errors: null,
};

const mutations = {
  registerStart(state) {
    state.isLoading = true;
    state.user = null;
    state.errors = null;
  },
  registerSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
  },
  registerFailure(state, payload) {
    state.isLoading = false;
    state.errors = payload.errors;
  },
};

const actions = {
  register(context, user) {
    return new Promise((resolve, reject) => {
      context.commit("registerStart");
      AuthService.register(user)
        .then((response) => {
          context.commit("registerSuccess", response.data.user);
          setItem("token", response.data.user.token);
          resolve(response.data.user);
        })
        .catch((error) => {
          context.commit("registerFailure", error.response.data);
          reject(error.response.data);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
