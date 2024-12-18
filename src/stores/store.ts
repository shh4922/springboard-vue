import {createStore} from "vuex";
import authStore from "@/stores/Auth/useAuthStore"

const store = createStore({
    modules:{
        authStore: authStore
    }
})
export default store;