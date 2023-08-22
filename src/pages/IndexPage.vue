<template>
  <section class="mainSection">
    <video autoplay muted loop id="myVideo">
      <source src="../assets/backgroundVideo.mp4" type="video/mp4" preload="auto">
    </video>
    <div class="flex items-center justify-center">
      <div class="text-h4 text-white">{{ selectedName }}<span class="typeBar">|</span></div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
// import { CronJob } from 'cron'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      names: ['Web developer', 'Pedro Paulo'],
      selectedName: ''
    }
  },
  methods: {
    async typingEffect (isNotStart) {
      if (isNotStart) {
        for (let i = 0; i < this.names[1].length; i++) {
          this.selectedName = this.selectedName.slice(0, -1)
          await this.waitTime(200)
        }
      }
      for (let i = 0; i < this.names[0].length; i++) {
        this.selectedName = this.selectedName + this.names[0][i]
        await this.waitTime(200)
      }
      await this.waitTime(5000)
      for (let i = 0; i < this.names[0].length; i++) {
        this.selectedName = this.selectedName.slice(0, -1)
        await this.waitTime(200)
      }
      for (let i = 0; i < this.names[1].length; i++) {
        this.selectedName = this.selectedName + this.names[1][i]
        await this.waitTime(200)
      }
      await this.waitTime(10000)
      this.typingEffect(true)
    },
    async waitTime (time) {
      await new Promise(resolve => setTimeout(resolve, time))
    }
  },
  mounted () {
    this.typingEffect()
  }
})
</script>

<style>
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}
.typeBar {
  animation: blink 1s;
  animation-iteration-count: infinite;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
