import {defineStore} from "pinia";
import {ref} from "vue";

export const useAuthStore = defineStore("authStore", () => {
    // state
    const accessToken = ref<string|null>(localStorage.getItem("accessToken"));

    // action
    function setToken(token: string | null) {
        accessToken.value = token;
        localStorage.setItem("accessToken", token || "");
    }

    // getter
    return {accessToken,setToken};
})

