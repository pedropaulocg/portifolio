<template>
  <q-dialog
    :model-value="projectModal"
    transition-show="scale"
    persistent
  >
    <q-card class="bg-primary text-white">
      <q-card-section>
        <div class="text-h6">{{ selectedProject.name }}</div>
      </q-card-section>

      <q-card-section class="q-px-md bg-dark">
        <p style="font-size: 20px;">
          {{ cDescriptionAndLink.description || ''}}
          <q-btn :href="cDescriptionAndLink.link" flat dense v-if="cDescriptionAndLink.link" icon="mdi-link"/>
        </p>
        <video autoplay muted loop id="" style="width: 100%;" v-if="selectedProject.video != ''">
          <source :src="selectedProject.video" type="video/mp4" preload="auto">
        </video>
        <q-img :src="selectedProject.image" v-else/>
      </q-card-section>

      <q-card-actions align="right" class="bg-dark text-teal">
        <q-btn flat label="OK" color="primary" @click="closeModal"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import projectDescriptions from '../service/projectsDescriptions'

export default {
  props: {
    selectedProject: {
      type: Object,
      default: () => {}
    },
    projectModal: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cDescriptionAndLink () {
      let project
      switch (this.selectedProject.name) {
        case 'Clickmassa': {
          project = projectDescriptions.clickmassa
          break
        }
        case 'Clickmassa admin': {
          project = projectDescriptions.clickmassaAdmin
          break
        }
        case 'SIGNUPLAM': {
          project = projectDescriptions.signuplam
          break
        }
        case 'Currency bot': {
          project = projectDescriptions.currencyBot
          break
        }
        case 'Vendioo (unfinished)': {
          project = projectDescriptions.vendioo
          break
        }
        case 'MapsApp': {
          project = projectDescriptions.mapsApp
          break
        }
        case 'GymMe': {
          project = projectDescriptions.gymMe
          break
        }
        case 'Monster Slayer': {
          project = projectDescriptions.monsterSlayer
          break
        }
      }
      return project
    }
  },
  methods: {
    closeModal () {
      this.$emit('modal-state')
    }
  }
}
</script>
