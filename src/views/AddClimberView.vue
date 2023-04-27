<template>
  <l-forms>
    <template #form>
      <CInput v-model:src="img" placeholder="Introduce url de imagen"></CInput>
      <CInput v-model:src="name" placeholder="Introduce nombre"></CInput>
      <CInput v-model:src="age" placeholder="Introduce  edad"></CInput>
      <CInput v-model:src="nationality" placeholder="Introduce nacionalidad"></CInput>
    </template>
    <template #button>
      <CButton @click="doSubmit()">Enviar</CButton>
      <CButton @click="goBack()">Atrás</CButton>
    </template>
  </l-forms>
</template>
<script>
import LForms from '../layouts/l-forms.vue'
import CInput from '../components/c-input.vue'
import CButton from '../components/c-button.vue'
import { climbersStore } from '../stores/climbers'

export default {
  name: 'AddClimber',
  components: {
    LForms,
    CInput,
    CButton
  },
  data(){
    return{
        img: '',
        name: '',
        age: '',
        nationality: '',
        climbers:[],   
    }
  },
  methods:{
    async doSubmit(){
        try{
            const climber = {
                img:this.img,
                name:this.name,
                age:this.age,
                nationality:this.nationality,
                achievements:[]
            }
            const useClimberStore= climbersStore();
            this.climbers = await useClimberStore.addClimber(climber);

        }catch(e){
            console.log(e)
        }
    },
    goBack(){
        this.$router.go(-1)
    }

  }
}
</script>
