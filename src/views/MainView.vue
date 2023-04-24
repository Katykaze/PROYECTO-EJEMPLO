<template>
    <LMain>
        <template #header>
            <h1> NEW VIEW 🏡🏠</h1>
        </template>
        <template #main>
            <CButton/>
            <p>HELLOW WOLRD 🌎 </p>
            <p>This is a new view</p>
        </template>
        <template #footer>
            <p>📲 social Media</p>
        </template>
    </LMain>

</template>
<script>
import LMain from '../layouts/l-main.vue'
import CButton from '../components/c-button.vue'
import { userStore } from '../stores/user'

export default{
    name: 'MainView',
    data(){
        return {
            isPending:true
        }
    },
    components:{
        LMain,
        CButton
    },
    methods:{
        doLogout(){
            
        },
        
    }
}
</script>

<style lang="scss"> 
</style>