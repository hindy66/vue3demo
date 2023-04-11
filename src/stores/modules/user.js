import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore',{
    state(){
        return {
            profile: {
                id: '',
                avatar: '',
                nickName: '',
                account: '',
                mobile: '',
                token: ''
            }
        }
    },
    actions: {
        setProfile(info) {
            this.profile = info
            localStorage.setItem('profile', JSON.stringify(this.profile))
        }
    }
})
