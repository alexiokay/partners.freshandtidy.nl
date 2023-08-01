import { c as createPinia, d as defineStore, p as persistedState } from '../server.mjs';
import { useStorage } from '@vueuse/core';

createPinia();
const useMainStore = defineStore("mainStore", {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      initialized: useStorage("initialized", false),
      isMobileNavbarOpen: useStorage("isMobileNavbarOpen", false),
      isLocaleSet: useStorage("isLocaleSet", false),
      isOverlaying: useStorage("isOverlaying", false),
      active_menu: useStorage("active_menu", "pending"),
      dates: useStorage("dates", []),
      reservations: []
    };
  },
  getters: {
    getActiveMenu(state) {
      return state.active_menu;
    },
    getReservations(state) {
      return state.reservations;
    },
    getNewReservations(state) {
      return state.reservations.filter((reservation) => {
        return reservation.status === "New";
      });
    },
    getReservation: (state) => (id) => state.reservations.find((reservation) => reservation.id === id),
    getIsLocaleSet(state) {
      return state.isLocaleSet;
    },
    getIsMobileNavbarOpen(state) {
      return state.isMobileNavbarOpen;
    },
    isInitiated(state) {
      return state.initialized;
    },
    getDates(state) {
      return state.dates;
    },
    getDatesByDate: (state) => {
      return (date) => {
        console.log(state.dates);
        return state.dates.find((_date) => _date.date === date);
      };
    },
    getTimeslotsByDate: async (state) => {
      return (date) => {
        var _a;
        console.log("getting timeslots by date: " + date);
        const new_date = new Date(date).setHours(0, 0, 0, 0);
        return (_a = state.dates.find((_date) => {
          const date2 = new Date(_date.date).setHours(0, 0, 0, 0);
          return date2 === new_date;
        })) == null ? void 0 : _a.timeslots;
      };
    }
  },
  actions: {
    initialize() {
      this.initialized = true;
    },
    setActiveMenu(menu) {
      this.active_menu = menu;
    },
    hideMobileNavbar() {
      this.isMobileNavbarOpen = false;
    },
    showMobileNavbar() {
      this.isMobileNavbarOpen = true;
    },
    setLocaleSet(value = true) {
      this.isLocaleSet = value;
    },
    setOverlaying(bool) {
      this.isOverlaying = bool;
    },
    setTimeslot(dateId, timeslotId) {
      const dateIndex = this.dates.findIndex((date) => date.id === dateId);
      const timeslotIndex = this.dates[dateIndex].timeslots.findIndex(
        (timeslot2) => timeslot2.id === timeslotId
      );
      const timeslot = this.dates[dateIndex].timeslots[timeslotIndex];
      if (timeslot) {
        timeslot.amount_of_trucks = timeslot.amount_of_trucks + 1;
        console.log(timeslot.amount_of_trucks);
      }
    },
    setDates(dates) {
      this.dates = dates;
      console.log(this.dates);
    },
    setReservations(reservations) {
      this.reservations = reservations;
    },
    addReservation(reservation) {
      console.log("adding reservation ");
      this.reservations.push(reservation);
    },
    removeReservation(reservationId) {
      try {
        const index = this.reservations.findIndex(
          (reservation) => reservation.id === reservationId
        );
        this.reservations.splice(index, 1);
        console.log("removed reservation ");
      } catch (error) {
        console.log(error);
        console.log("couldn't remove reservation ");
      }
    },
    updateReservation(reservation) {
      console.log("updating reservation ");
      try {
        const index = this.reservations.findIndex(
          (reservation2) => reservation2.id === reservation2.id
        );
        this.reservations[index] = reservation;
        console.log(this.reservations[index]);
        console.log("updated reservation ");
      } catch (error) {
        console.log(error);
        console.log("couldn't update reservation ");
      }
    },
    openDay(id) {
      const index = this.dates.findIndex((date) => date.id === id);
      this.dates[index].is_open = true;
    },
    closeDay(id) {
      const index = this.dates.findIndex((date) => date.id === id);
      this.dates[index].is_open = false;
    }
  },
  persist: {
    storage: persistedState.sessionStorage
  }
  // other options...
});

export { useMainStore as u };
//# sourceMappingURL=Main-ca6a8d39.mjs.map
