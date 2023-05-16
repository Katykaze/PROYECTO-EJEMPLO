<template>
  <l-main>
    <template #header>
      <div class="v-modifyClimber__header--tittle">Top Climbers</div>
    </template>
    <template #main>
      <CMessage class="v-modifyClimber__message text-l-medium" v-if="isSending">Escalador Actualizado</CMessage>
      <CClimber2 :src="climber" :achievements="climber.achievements" :isEditable="!isEditable">
        <template #button>
          <CButton @click="editClimber(climber.id)" class="v-modifyClimber__button--send">
            Actualizar escalador
          </CButton>
        </template>
      </CClimber2>
      <CButton @click="goBack()" class="v-modifyClimber__button--back">Atrás</CButton>
    </template>
  </l-main>
</template>
<script>
import CButton from '../components/c-button.vue'
import LMain from '../layouts/l-main.vue'
import CClimber2 from '../components/c-climber2.vue'
import CMessage from '../components/c-message.vue'
import { climbersStore } from '../stores/climbers'
export default {
  name: 'ModifyClimber',
  components: {
    CClimber2,
    LMain,
    CButton,
    CMessage
  },
  data() {
    return {
      achievements: [],
      climber: [],
      isSending:false
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
        this.isSending=true
        //console.log('response ' + response.map((climber) => climber.name))
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
<style lang="scss" scoped>
.v-modifyClimber__header--tittle {
  margin-top: 50px;
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
}
.v-modifyClimber__message{
  margin: auto;
}
.v-modifyClimber__button--send {
  margin-left: auto;
  margin-right: auto;
  transition: font-size 0.7s ease;
  &:hover {
    background-color: var(--color-text-primary);
    font-size: 15px;
  }
}
.v-modifyClimber__button--back {
 margin-left: auto;
 margin-right: auto;
 margin-bottom: 30px;
 font-size: 17px;
}
</style>
