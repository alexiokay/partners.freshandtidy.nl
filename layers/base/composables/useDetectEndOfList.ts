export const useDetectEndOfList = (index: number, length: number) => {
  if (index === length - 1) {
    return "end-of-list";
  }
};

// onMounted(() => {
//   const endOfList = ref(document.getElementById("end-of-list") as HTMLElement);

//   watch(
//     () => accounts.value,
//     () => {
//       observer.unobserve(endOfList.value);
//       endOfList.value = document.getElementById("end-of-list") as HTMLElement;
//       observer.observe(endOfList.value);
//       console.log("set new target for observer");
//     }
//   );

//   watch(
//     () => (menu.value[0].is_active, menu.value[1].is_active),
//     () => {
//       setTimeout(() => {
//         observer.unobserve(endOfList.value);
//         endOfList.value = document.getElementById("end-of-list") as HTMLElement;
//         observer.observe(endOfList.value);
//         console.log("set new target for observer");
//       }, 200);
//     }
//   );

//   const observer = new IntersectionObserver(
//     (entries) => {
//       if (entries[0].isIntersecting) {
//         page.value++;
//         getAccounts().then((data) => {
//           accounts.value = [...accounts.value, ...data];
//         });
//         console.log("end of list detected");
//       }
//     },
//     {
//       root: null,
//       rootMargin: "0px",
//       threshold: 1.0,
//     }
//   ) as IntersectionObserver;

//   observer.observe(endOfList.value);
// });
