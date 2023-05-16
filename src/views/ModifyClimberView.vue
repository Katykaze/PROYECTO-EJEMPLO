<template>
  <l-main>
    <template #header>
      <div class="l-main__header--tittle">Top Climbers</div>
    </template>
    <template #main>
      <CClimber2 :src="climber" :achievements="climber.achievements" :isEditable="!isEditable">
        <template #button>
          <CButton @click="editClimber(climber.id)"> Enviar </CButton>
        </template>
      </CClimber2>
      <CButton @click="goBack()">Atrás</CButton>
    </template>
  </l-main>
</template>
<script>
import CButton from '../components/c-button.vue'
import LMain from '../layouts/l-main.vue'
import CClimber2 from '../components/c-climber2.vue'
import { climbersStore } from '../stores/climbers'
export default {
  name: 'ModifyClimber',
  components: {
    CClimber2,
    LMain,
    CButton
  },
  data() {
    return {
      // img:'',
      // name:'',
      // age:'',
      // nationality:'',
      // achievement:'',
      achievements: [],
      climber: []
    }
  },
  props: {
    isEditable: {
      type: Boolean
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },

    async editClimber(id) {
      console.log(id)
      try {
        const updatedClimber = { ...this.climber }
        console.log(updatedClimber)
        const useClimberStore = climbersStore()
        const response = await useClimberStore.modifyClimber(updatedClimber)
        console.log('response '+ response.map(climber => climber.name))
        
      } catch (e) {
        console.log(e)
      }
    }
  },
  async created() {
    const id = this.$route.params.id
    const useClimberStore = climbersStore()
    const selectedClimber = await useClimberStore.getClimberById(id)
    this.climber = selectedClimber
    console.log(this.climber)
  }
}
</script>
