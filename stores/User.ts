import { defineStore } from "pinia";
import { createPinia } from "pinia";

const pinia = createPinia();
type Carrier = {
  id: number | null;
  name: string | null;
  phone: string | null;
  city: string | null;
  icon_url: string | null;
  is_activated: boolean | null;
  activated_by: string | null;
};

type Role = {
  id: number | null;
  shortname: string | null;
  name: string | null;
};
// @ts-ignore: Unreachable code error
export const useUserStore = defineStore("User", {
  state: () => {
    return {
      default_login_mode: "carrier",
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      avatar: "",
      token: "",
      isLogged: true, //TODO: false
      is_activated: false,
      activated_by: null,
      accountType: "arrow-employee", //arrow_employee, carrier
      role: {
        id: null,
        shortname: null,
        name: null,
      } as Role,
      carrier: {
        id: null,
        name: null,
        phone: null,
        city: null,
        icon_url: null,
        is_activated: null,
        activated_by: null,
      } as Carrier,
    };
  },
  getters: {
    getUser(state) {
      return {
        username: state.username,
        email: state.email,
        token: state.token,
        isLogged: state.isLogged,
        accountType: state.accountType,
      };
    },
    getUsername(state) {
      return state.username;
    },
    getEmail(state) {
      return state.email;
    },
    getToken(state) {
      return state.token;
    },
    getIsLogged(state) {
      return state.isLogged;
    },
    getAccountType(state) {
      return state.accountType;
    },
    getFamily(state) {
      if (state.accountType === "carrier") {
        return state.carrier.name;
      } else {
        return "Arrow";
      }
    },
    getRole(state) {
      if (state.role === null) return "null";
      else return state.role.shortname;
    },
  },
  actions: {
    setUsername(username: string) {
      this.username = username;
    },
    setEmail(email: string) {
      this.email = email;
    },
    setToken(token: string) {
      this.token = token;
    },
    setIsLogged(bool: boolean) {
      this.isLogged = bool;
    },
    logout() {
      this.username = "";
      this.email = "";
      this.token = "";
      this.isLogged = false;
      this.accountType = "";
      //this.role = null;
      this.carrier = {} as Carrier;
      this.avatar = "";
    },

    setUser(data: any) {
      const user = data.user;

      // if (account_type === "carrier") {
      //   const carrier = data.member.carrier_family;
      //   this.carrier.id = carrier.id;
      //   this.carrier.name = carrier.name;
      //   this.carrier.phone = carrier.phone;
      //   this.carrier.city = carrier.city;
      //   this.carrier.icon_url = carrier.icon_url;
      //   this.carrier.is_activated = carrier.is_activated;
      // }
      this.firstName = user.first_name;
      this.lastName = user.last_name;
      //this.role = data.member.role;
      this.accountType = user.type;
      this.username = user.username;
      this.email = user.email;
      this.token = data.key ? data.key : data.token;
      this.isLogged = true;
      this.is_activated = user.is_activated;
      this.activated_by = user.activated_by;
      this.avatar = user.avatar;
    },
  },

  persist: {
    storage: persistedState.cookies,
  },
});

export default pinia;
