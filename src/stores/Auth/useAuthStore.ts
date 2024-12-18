import {createStore} from "vuex";
import vuex from "vuex";
/**
 * state: => 일반적으로 접근가능
 * getter: => 추가작업을 통해 뭔가를 리턴
 * mutations => 동기
 * actions => 비동기
 */

import { Module } from "vuex";

// AuthState 타입 정의
export interface AuthState {
    accessToken: string | null;
}


const authStore:Module<AuthState, any> = {
    namespaced: true,
    state: {
        accessToken: localStorage.getItem('accessToken'),
    },
    // getters: {
    //     // 추가적인 작업후 리턴가능.
    //     getAccessToken: state => {
    //         return state.accessToken;
    //     }
    // },
    mutations: {
        setAccessToken(state,payload:string) {
            localStorage.setItem('accessToken', payload);
            state.accessToken = payload;
        }
    },
    // actions: {
    //     setAccessToken: (context, payload) => {
    //         context.commit("setAccessToken", payload);
    //     }
    // }
}

export default authStore
