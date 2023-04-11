
import { useUserStore } from './modules/user'
import { useCartStore } from './modules/cart'

export const useStore = () => {
        return {
            userStore: useUserStore(),
            cartStore: useCartStore()
        }

}