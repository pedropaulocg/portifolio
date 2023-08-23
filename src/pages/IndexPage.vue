<template>
    <video autoplay muted loop id="myVideo">
      <source src="../assets/backgroundVideo.mp4" type="video/mp4" preload="auto">
    </video>
  <section class="flex column justify-start mainSection">
    <div class="column items-center q-mt-xl">
      <div class="">
        <div>
          <q-img src="../assets/logoP.svg" width="300px"/>
        </div>
      </div>
      <div class="text-white column items-center">
        <div class="text-h3 mainName">{{ mainName }}<span class="typeBar">|</span></div>
        <div class="text-h3">{{ selectedName }}<span class="typeBar">|</span></div>
      </div>
      <div>
        <q-btn icon="mdi-whatsapp" flat round/>
        <q-btn icon="mdi-linkedin" flat round/>
        <q-btn icon="mdi-github" flat round/>
        <q-btn icon="mdi-mail" flat round/>
      </div>
    </div>
  </section>
  <section class="dark row items-center justify-center" style="margin-top: -10px">
    <div class="text-h1 text-bold col-6 column items-center">
      Who is <span class="text-primary block">Pedro?</span>
    </div>
    <div class="col-6"></div>
    <div class="col-4 row justify-center">
      <q-img src="../assets/avatarPedro.png" width="200px" style="margin-right: -150px;"/>
    </div>
    <div class="col-8 q-mt-md q-pr-sm" style="border-right: 2px solid var(--primary);">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste debitis et dolorum, rerum quo, praesentium optio neque possimus voluptatum impedit, qui aliquam. Corrupti voluptates rerum, impedit quas nesciunt esse rem, architecto tenetur reprehenderit illo ut possimus assumenda neque officia porro ipsam eligendi eum nobis quis dolor pariatur quo, iure sint! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum sint quae esse dolorum natus beatae quos quia provident delectus error deserunt accusamus, rerum harum distinctio mollitia assumenda omnis nemo! Consequatur minus perspiciatis dolor unde exercitationem eos doloremque, eum, rerum excepturi dignissimos alias architecto labore. Id tenetur omnis quo sit cum.</p>
    </div>
  </section>
  <section class="dark column items-center q-pt-md">
    <div class="text-h1 text-bold">
      SKILLS<span class="text-primary">.</span>
    </div>
    <!-- Using vanila CSS to do the grid but i could use the grid from quasar -->
    <div class="gridIcons">
      <div><q-icon size="6rem" name="mdi-language-html5"/></div>
      <div><q-icon size="6rem" name="mdi-language-css3"/></div>
      <div><q-icon size="6rem" name="mdi-language-javascript"/></div>
      <div><q-icon size="6rem" name="mdi-language-typescript"/></div>
      <div><q-icon size="6rem" name="mdi-vuejs"/></div>
      <div><q-icon size="6rem" name="mdi-react"/></div>
      <div><q-icon size="6rem" name="mdi-nodejs"/></div>
      <div>
        <q-icon size="6rem">
          <q-img src="../assets/reactNative.svg" />
        </q-icon>
      </div>
      <div><q-icon size="6rem" name="mdi-git"/></div>
      <div>
        <q-icon size="6rem">
          <q-img src="../assets/bash.svg" />
        </q-icon>
      </div>
      <div>
        <q-icon size="6rem">
          <q-img src="../assets/mongo.svg" />
        </q-icon>
      </div>
      <div>
        <q-icon size="6rem">
          <q-img src="../assets/postgres.svg" />
        </q-icon>
      </div>
    </div>
  </section>
  <section class="dark column items-center q-pt-md">
    <div class="text-h1 text-bold">
      PROJECTS<span class="text-primary">.</span>
    </div>
    <div class="projects">
      <q-card class="my-card bg-dark col-6 q-pa-lg" v-for="(project, index) in projects" :key="index" style="width: 250px; height: 200px;">
        <q-card-section class="text-h5 text-center">
          {{ project.name }}
        </q-card-section>
      </q-card>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import logoClickmassa from '../assets/logo_clickmassaDark.svg'
import currency from '../assets/whatsapp-logo.png'
import logoVendioo from '../assets/logo-gestor.svg'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      names: ['Web developer', 'Javascript', 'Typescript', 'Vue.js', 'React.js', 'Express', 'PostgresDB', 'MongoDB'],
      projects: [
        { video: '', image: logoClickmassa, name: 'Clickmassa', isHover: false, isPersonal: false },
        { video: '', image: logoClickmassa, name: 'Clickmassa admin', isHover: false, isPersonal: false },
        { video: '', image: logoClickmassa, name: 'SigNuplam', isHover: false, isPersonal: false },
        { video: '', image: currency, name: 'Currency bot', isHover: false, isPersonal: true },
        { video: '', image: logoVendioo, name: 'Vendioo (unfinished)', isHover: false, isPersonal: true },
        { video: '', image: logoVendioo, name: 'Maps app', isHover: false, isPersonal: true }
      ],
      selectedName: '',
      mainName: ''
    }
  },

  methods: {
    async typingDeletingEffect () {
      for (let j = 0; j < this.names.length; j++) {
        for (let i = 0; i < this.names[j].length; i++) {
          this.selectedName = this.selectedName + this.names[j][i]
          await this.waitTime(100)
        }
        await this.waitTime(2000)
        for (let i = 0; i < this.names[0].length; i++) {
          this.selectedName = this.selectedName.slice(0, -1)
          await this.waitTime(100)
        }
      }
      this.typingDeletingEffect()
    },

    async typeNameEffect () {
      const name = "Hi! I'm Pedro Paulo."
      for (let i = 0; i < name.length; i++) {
        this.mainName = this.mainName + name[i]
        await this.waitTime(100)
      }
      this.typingDeletingEffect()
    },

    async waitTime (time) {
      await new Promise(resolve => setTimeout(resolve, time))
    }
  },
  mounted () {
    this.typeNameEffect()
  }
})
</script>

<style>
:root {
  --primary: #0D69AB;
  --secondary: #0A8754;
  --dark: #0E1617;
}
#myVideo {
  width: 100%;
  z-index: -1;
  height: 100vh;
  object-fit: cover;
}
.typeBar {
  animation: blink 1s;
  animation-iteration-count: infinite;
}
.dark {
  background-color: var(--dark);
  color: white;
  padding: 100px;
}
.mainSection {
  position: absolute;
  top: 0;
  background:linear-gradient(0deg, rgba(0, 0, 0, 0.557), rgba(0, 0, 0, 0.425));
  width: 100%;
  height: 100vh;
  background-position: 100%;
  background-size: cover;

}

.avatarBackground {
  background-color: var(--primary);
  border-radius: 50%;
  padding: 10px;
  overflow: hidden;
}

.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  top: 0;
  z-index: -1;
}
.overlay video {
  width: 100%;
  display: block;
}
.overlay:before {
  content: '';
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.mainName {
  font-weight: 600;
  /* background-color: var(--secondary); */
}

.gridIcons {
  display: grid;
  width: 50%;
  margin: auto;
  grid-template-columns: repeat(auto-fit, minmax(max(150px, 100% / 4), 2fr));
}

.gridIcons i {
  padding: 50px;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  gap: 1rem;
  margin-top: 1rem;
  transition: .6s;
}

.hoveredCard {
  transform: scale(1.1);
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
