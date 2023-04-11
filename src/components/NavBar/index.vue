<template>
    <div class="top-nav">
        <div class="container">
            <ul class="nav-list">
                <!-- 已登录 -->
                <template v-if="userStore?.profile?.token">
                    <li><a href="javascript:;"><i class="iconfont icon-wode"></i>五六七</a></li> 
                    <li><a href="javascript:;">退出登录</a></li>
                </template>
                <!-- 未登录 -->
                <template v-else>
                    <li><a href="javascript:;" @click="login">请先登录</a></li> 
                    <li><a href="javascript:;">免费注册</a></li> 
                </template> 
                <li><a href="javascript:;">我的订单</a></li> 
                <li><a href="javascript:;">会员中心</a></li> 
                <li><a href="javascript:;">帮助中心</a></li> 
                <li><a href="javascript:;">关于我们</a></li>  
                <li><a href="javascript:;"><i class="iconfont icon-shouji1"></i>手机版</a></li> 
            </ul>
        </div>
    </div>
</template>

<script>
import { useUserStore } from '../../stores/modules/user';
export default {
    name: 'AppTopNav',
    setup() {
        const userStore = useUserStore()
        const login = () => {
            userStore.setProfile({
                token: 'token'
            })
        }
        return {
            userStore,
            login
        }
    }
    
}
</script>

<style lang="scss" scoped>
.top-nav { 
    background: #333; width: 100%;
    .container { width: 1240px; margin: 0 auto; }
    ul { height: 53px; display: flex; align-items: center; justify-content: flex-end; }
    li a {  
        padding: 0 15px; color: #cdcdcd; display: inline-block;  font-size: 14px; line-height: 1; 
        &:hover { color: var(--xtxColor); }
    }
    li i { font-size: 14px; margin-right: 5px; }
    li + li { 
        a { border-left: 2px solid #666; }
    } 
}
</style>