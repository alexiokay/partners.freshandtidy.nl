<template lang="pug">
div(class="flex flex-col space-y-4 pl-4 md md:pl-0")
    Transition(name="jump")
        div(v-show="!isChatOpen" class="flex flex-col space-y-4 " :class="isChatOpen ? 'hidden' : ''")
            p(@click="isChatOpen = true" class="hidden md:flex shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-3 md:w-[23rem] text-base bg-white rounded-md hover:cursor-pointer") Hey, let’s talk about LiveChat on your website!
            div(@click="isChatOpen = true" class="ml-auto p-3 w-min rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white font-bold hover:cursor-pointer ")
                
                IconChat(class=" w-[2rem] h-[2rem] md:w-[2.5rem]  md:h-[2.5rem] text-[#Ff5100]  ")

    Transition(name="jump")
        div(v-show="isChatOpen" :class="!isChatOpen ? 'hidden' : ''" class="md:w-[20rem] h-[38.5rem] rounded-lg bg-[#F6f6f7]        shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]")
            div(class="bg-white h-[8rem] rounded-t- lg")
                div(class="flex w-full p-3 justify-between items-center")
                    IconDots(class="w-[1.6rem] h-[1.6rem] text-black hover:cursor-pointer")
                    p(class="text-gray-700 font-semibold") Chat With Us!
                    IconMinimize(@click="isChatOpen = false" class="hover:cursor-pointer") 
                hr(class="w-5/6 mx-auto border-gray-300")

                div(class="flex w-full px-6 py-4 justify-between gap-x-4 items-center ")
                    div(class="flex relative")
                        IconChat2(class="w-[1.5rem] h-[1.5rem] text-[#Ff5100]  ")
                        div(class="absolute -top-[0.6rem] -right-[0.6rem] w-[0.55rem] h-[0.55rem] rounded-full bg-green-700 flex items-center justify-center text-xs text-white font-bold")
                    div(class="flex flex-col w-full")
                        p ChatBot
                        p Support Agent
                    IconLike(class="w-[3rem] h-[3rem] text-gray-300  hover:cursor-pointer")
                    IconDislike(class="w-[3rem] h-[3rem] text-gray-300  hover:cursor-pointer")
            div(class="bg-[#Ffd000] h-[2.5rem] p-2 flex items-center justify-center shadow-lg") Reconnecting...



            div(class="w-full relative h-[27rem] flex  flex-col items-center justify-between ")
              div.messages(class="w-full h-[20rem] overflow-y-scroll  flex flex-col gap-y-2 "  )
                div.message(:class="message.type === 'chatbot'? 'flex': 'flex-reveese'" class="h-auto flex pl-2 pr-[0.6rem] py-2 gap-x-2 " v-for="message in sessionStore.messages" )
                    div(v-if="message.type ==='chatbot'" @click="isChatOpen = true" class=" p-1 w-min h-min rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white font-bold hover:cursor-pointer ")
                        IconChat2(class=" w-[0.8rem] h-[0.8rem] text-[#Ff5100]  ")
                    div(class="w-full flex flex-col gap-y-1  ")
                        p(class="text-xs text-gray-500") ChatBot {{timeEntered}}
                        p(@click="isChatOpen = true" class=" shadow-lg p-3 w-full text-base bg-white rounded-md hover:cursor-pointer") {{ message.message }}

             


              button(@click="showTextArea" v-if="!userWantsSendMessage" class="w-[calc(100%-2rem)]  h-[3rem] bg-[#2000f0] text-white font-bold text-base rounded-md hover:cursor-pointer") Chat Now
              div.new-message(v-if="userWantsSendMessage" class="w-[90%] flex min-h-[4rem] h-auto overflow-hidden border rounded-md px-1 py-1 border-slate-300   items-center justify-center bg-white")
               
              
                textarea( @input="autoResize($event.target)" @keyup.enter="sendMessage($event.target)" class="w-[calc(100%-2rem)] max-h-[6rem] overflow-scroll h-full focus:outline-none text-black  text-base rounded-md no-scrollbar hover:cursor-text  px-2 py-4")
                IconSendMessage(@click="sendMessage()"  class="w-6 h-6 text-blue-600 font-bold text-base rounded-md hover:cursor-pointer")
</template>

<script setup lang="ts">
import IconChat from "~icons/akar-icons/chat-bubble";
import IconChat2 from "~icons/carbon/chat-bot";
import IconLike from "~icons/iconamoon/like-light";
import IconDislike from "~icons/iconamoon/dislike-light";
import IconDots from "~icons/mi/options-horizontal";
import IconMinimize from "~icons/fluent/minimize-24-filled";
import IconSendMessage from "~icons/bi/send-fill";
import { useSessionStore } from "~/stores/Session";

const isChatOpen = ref(false);
const sessionStore = useSessionStore();

const autoResize = (textarea) => {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
};
const showTextArea = () => {
  sessionStore.setuserWantsSendMessage(true);

  const textarea = document.querySelector("textarea") as HTMLTextAreaElement;
  if (textarea) {
    // focus on textarea
    textarea.focus();
    textarea.addEventListener("input", autoResize(textarea), false);
  }
};

const userId = ref("example"); // TODO: to cookies
const chatId = ref(0); // TODO: to cookies

const userWantsSendMessage = computed(() => sessionStore.userWantsSendMessage);
const timeNow = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes}`;
};

const timeEntered = ref(timeNow());

if (!sessionStore.messages.length) {
  sessionStore.addMessage({
    sender: "chatbot",
    message: "Hello, how can I help you?",
    time: timeEntered.value,
    type: "chatbot",
  });
}

const scrollToBottom = () => {
  const messagesDiv = document.querySelector(".messages") as HTMLDivElement;

  messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

const sendMessage = async (target) => {
  const textarea = document.querySelector("textarea") as HTMLTextAreaElement;
  const message = textarea.value;
  target.value = "";
  if (!message) return;
  let data = { sender: "test_user", message: message };

  console.log();
  const userMessage = {
    sender: "test_user",
    message: message,
    time: timeNow(),
    type: "user",
  };
  sessionStore.addMessage(userMessage);
  console.log("userMessage", userMessage);

  const response = await fetch(
    "http://84.29.2.193:5005/webhooks/rest/webhook",
    {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);

      const newMessage = {
        sender: "chatbot",
        message: data[0].text,
        time: timeNow(),
        type: "chatbot",
      };
      sessionStore.addMessage(newMessage);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

watch(
  () => sessionStore.messages.length,
  async (newVal, oldVal) => {
    await nextTick();
    scrollToBottom();
  }
);

watch(
  () => isChatOpen.value,
  async (newVal, oldVal) => {
    await nextTick();
    scrollToBottom();
  }
);
</script>

<style lang="scss">
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.jump-enter {
}
.jump-enter-active {
  animation: jump-in 0.3s;
}
.jump-leave {
}
.jump-leave-active {
  animation: jump-out 0.3s;
}
@keyframes jump-in {
  0% {
    top: -100vh;
    opacity: 0;
    left: 20%;
  }
  30% {
    opacity: 0.2;
  }
  to {
    top: 0vh;
    opacity: 1;
  }
}
@keyframes jump-out {
  0% {
    top: 0vh;
    opacity: 1;
  }
  70% {
    opacity: 0.2;
  }
  100% {
    top: 100vh;
    opacity: 0;
    right: 14%;
  }
}
</style>
