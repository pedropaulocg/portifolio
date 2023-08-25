<template>
  <video autoplay muted loop id="myVideo">
    <source src="../assets/backgroundVideo.mp4" type="video/mp4" preload="auto">
  </video>
  <nav class="navbar" :class=" closeMenu ? 'closeMenu' : ''">
    <ul>
      <li v-for="(menuItem, index) in menuItens" :key="index">
        <q-btn class="menuBtn" :icon="menuItem.icon" flat round :class="menuItem.isActive ? 'active' : ''" @click="handleActiveButton(index, menuItem.ref)"/>
        <!-- <q-icon :name="menuItem.icon"/> -->
      </li>
    </ul>
    <q-btn class="closeMenuButton" :icon="closeMenu ? 'mdi-menu' : 'mdi-close'" flat @click="closeMenu = !closeMenu" round/>
  </nav>
  <section ref="home" class="flex column justify-start mainSection" @scroll="$event => handleScroll($event)">
    <div class="column items-center q-mt-xl">
      <div class="">
        <div>
          <q-img src="../assets/logoP.svg" width="300px"/>
        </div>
      </div>
      <div class="text-white column items-center">
        <div class="text-h3 mainName" :class="$q.screen.width < 600 ? 'text-h4' : ''">{{ mainName }}<span class="typeBar">|</span></div>
        <div class="text-h3" :class="$q.screen.width < 600 ? 'text-h4' : ''">{{ selectedName }}<span class="typeBar">|</span></div>
      </div>
      <div>
        <q-btn icon="mdi-whatsapp" flat round href="https://w.app/RmyLqD"/>
        <q-btn icon="mdi-linkedin" flat round href="https://www.linkedin.com/in/pedro-paulo-899a9a230/"/>
        <q-btn icon="mdi-github" flat round href="https://github.com/pedropaulocg"/>
      </div>
    </div>
  </section>
  <section ref="about" class="dark row items-center justify-evenly" style="margin-top: -10px">
    <div class="text-h1 text-bold col-12 row items-center justify-evenly">
      <div>Who is <div class="text-primary block">Pedro?</div></div>
      <q-img src="../assets/avatarPedro.png" width="200px"/>
    </div>
    <div class="col-md-8 col-12 q-mt-md q-pr-sm" style="border-right: 2px solid var(--primary); font-size: 18px;">
      <p>My name is Pedro, and at 21 years old, i'm a IT student, internet computer technician and passionate web developer hailing from Brazil and i will tell you a little bit about me and my experiences in the world of web development. It all started with the basics: HTML, CSS, and JavaScript. These foundational tools opened up a world of possibilities, and I was hooked. But I didn't stop there. Eager to expand my horizons, I ventured into more advanced technologies. I began working with Vue.js, Express.js, and TypeScript, which allowed me to create dynamic and robust web applications. One of the most pivotal moments in my journey was when I decided to take a leap of faith. I traveled to Barcelona for a two-month bootcamp where I had the opportunity to dive deep into React.js and Express.js. These experiences provided me with invaluable hands-on experience and insights, shaping me into a more skilled developer. Throughout my journey, I've also come to understand the power of community. Building a network with fellow developers, attending meetups, and engaging in online forums have been instrumental in my development. Looking ahead, I'm excited about the ever-evolving landscape of technology. I'm eager to explore new tools, frameworks, and languages. Web development is a dynamic field, and I'm committed to staying at the forefront of these changes.</p>
    </div>
  </section>
  <section ref="skills" class="dark column items-center q-pt-md">
    <div class="text-h1 text-bold" :class="$q.screen.width < 600 ? 'text-h2' : ''">
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
  <section ref="projects" class="dark column items-center q-pt-md">
    <div class="text-h1 text-bold" :class="$q.screen.width < 600 ? 'text-h2' : ''">
      PROJECTS<span class="text-primary">.</span>
    </div>
    <div class="projects">
      <q-card class="my-card bg-dark flex justify-center items-center" :class="project.isHover ? 'hoveredCard' : ''" v-for="(project, index) in projects" :key="index" style="width: 250px; height: 200px;" @mouseenter="project.isHover = true" @mouseleave="project.isHover = false" @click="openProjectModal({projectName: project.name, video: project.video, image: project.image})">
        <video autoplay muted id="cardVideo" v-if="project.isHover && project.video != ''">
          <source :src="project.video" type="video/mp4" preload="auto">
        </video>
        <q-img :src="project.image" v-else-if="project.isHover && project.video == ''"/>
        <q-card-section class="text-center" :class="project.isHover ? 'cardSection' : ''">
          <div class="text-h5">{{ project.name }}</div>
          <span class="text-subtitle" v-if="project.isHover">Click for more</span>
          <div class="text-subtitle" v-else>Hover me</div>
        </q-card-section>
      </q-card>
    </div>
  </section>
  <section ref="contact" class="dark column items-center q-pt-md">
    <div class="text-h1 text-bold q-mb-xl">
      Lets <span class="text-primary">talk!</span>
    </div>
    <div class="row justify-between bg-dark q-pa-md contactForm">
      <q-input :label="$q.screen.width < 600 ? 'Name' : 'What is your name?'" dark class="col-5" v-model="contact.name" :error="v$.contact.name.$error"/>
      <q-input :label="$q.screen.width < 600 ? 'Location' : 'Where you from?'" dark class="col-5" v-model="contact.location" />
      <q-input label="What's your email?" dark class="col-12" v-model="contact.email" :error="v$.contact.email.$error"/>
      <q-input label="Tell me anything..." type="textarea" dark class="col-12" v-model="contact.message" :error="v$.contact.message.$error"/>
    </div>
    <q-btn label="Submit" class="bg-primary q-mt-md" style="width: 40%; min-width: 200px;" @click="sendEmailTest" :loading="loading"/>
  </section>

  <section class="bg-dark text-white flex items-center justify-center q-pa-xs" style="margin: 0; padding: 15px;">
      <p>Developed by Pedro Paulo</p>
  </section>

  <InfoModal :projectModal="projectModal" :selectedProject="selectedProject" @modal-state="closeModal"/>
</template>

<script>
import { defineComponent } from 'vue'
import logoClickmassa from '../assets/logo_clickmassaDark.svg'
import currency from '../assets/whatsapp-logo.png'
import logoVendioo from '../assets/logo-gestor.svg'
import clickMassaEnterprise from '../assets/ClickmassaEnterprise.mp4'
import clickMassaAdmin from '../assets/ClickmassaAdmin.mp4'
import vendioo from '../assets/Quasar App.mp4'
import monsterSlayer from '../assets/monsterSlayer.mp4'
import currencyBotVideo from '../assets/currencyBotVideo.mp4'
import signuplamPrint from '../assets/signuplamPrint.jpg'
import gymMe from '../assets/GymMe.mp4'
import { sendEmail } from '../service/sendEmail'
import { required, email } from '@vuelidate/validators'
import useValidate from '@vuelidate/core'
import InfoModal from './InfoModal.vue'
// import { debounce } from 'quasar'

export default defineComponent({
  name: 'IndexPage',
  components: { InfoModal },
  data () {
    return {
      v$: useValidate(),
      names: ['Web developer', 'Javascript', 'Typescript', 'Vue.js', 'React.js', 'Express', 'PostgresDB', 'MongoDB'],
      projects: [
        { video: clickMassaEnterprise, image: logoClickmassa, name: 'Clickmassa', isHover: false, isPersonal: false },
        { video: clickMassaAdmin, image: logoClickmassa, name: 'Clickmassa admin', isHover: false, isPersonal: false },
        { video: '', image: signuplamPrint, name: 'SIGNUPLAM', isHover: false, isPersonal: false },
        { video: currencyBotVideo, image: currency, name: 'Currency bot', isHover: false, isPersonal: true },
        { video: vendioo, image: logoVendioo, name: 'Vendioo (unfinished)', isHover: false, isPersonal: true },
        { video: '', image: '', name: 'MapsApp', isHover: false, isPersonal: true },
        { video: gymMe, image: logoVendioo, name: 'GymMe', isHover: false, isPersonal: true },
        { video: monsterSlayer, image: logoVendioo, name: 'Monster Slayer', isHover: false, isPersonal: true }
      ],
      menuItens: [
        { icon: 'mdi-home', isActive: true, ref: 'home' },
        { icon: 'mdi-account-circle', isActive: false, ref: 'about' },
        { icon: 'mdi-head-lightbulb-outline', isActive: false, ref: 'skills' },
        { icon: 'fa-solid fa-laptop-code', isActive: false, ref: 'projects' },
        { icon: 'mdi-forum', isActive: false, ref: 'contact' }
      ],
      contact: {
        name: undefined,
        location: undefined,
        email: undefined,
        message: undefined
      },
      selectedName: '',
      mainName: '',
      closeMenu: false,
      loading: false,
      projectModal: false,
      selectedProject: undefined,
      isClick: false
    }
  },
  validations () {
    return {
      contact: {
        name: {
          required
        },
        email: {
          required,
          email
        },
        message: {
          required
        }
      }
    }
  },
  methods: {
    async handleActiveButton (index, ref) {
      this.isClick = true
      this.menuItens[index].isActive = true
      this.menuItens.map((item, itemIndex) => {
        if (itemIndex !== index) {
          item.isActive = false
        }
        return item
      })
      this.$refs[ref].scrollIntoView({ behavior: 'smooth' })
      await this.waitTime(1000)
      this.isClick = false
    },
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

    async sendEmailTest () {
      this.v$.$touch()
      if (this.v$.$error) {
        this.$q.notify('Invalid fields')
        return 0
      }
      this.loading = true
      await sendEmail(this.contact)
      this.loading = false
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
    },
    openProjectModal ({ projectName, video, image }) {
      this.selectedProject = {
        name: projectName,
        video,
        image
      }
      this.projectModal = true
    },
    closeModal () {
      this.projectModal = false
      this.selectedProject = undefined
    },
    handleScroll () {
      if (this.isClick) {
        return
      }
      if (this.$refs.home.getBoundingClientRect().top <= 0 && this.$refs.home.getBoundingClientRect().top > -300) {
        this.menuItens[0].isActive = true
        this.menuItens.map((item, itemIndex) => {
          if (itemIndex !== 0) {
            item.isActive = false
          }
          return item
        })
      } else if (this.$refs.about.getBoundingClientRect().top <= 0 && this.$refs.about.getBoundingClientRect().top > -300) {
        this.menuItens[1].isActive = true
        this.menuItens.map((item, itemIndex) => {
          if (itemIndex !== 1) {
            item.isActive = false
          }
          return item
        })
      } else if (this.$refs.skills.getBoundingClientRect().top <= 0 && this.$refs.skills.getBoundingClientRect().top > -300) {
        this.menuItens[2].isActive = true
        this.menuItens.map((item, itemIndex) => {
          if (itemIndex !== 2) {
            item.isActive = false
          }
          return item
        })
      } else if (this.$refs.projects.getBoundingClientRect().top <= 0 && this.$refs.projects.getBoundingClientRect().top > -300) {
        this.menuItens[3].isActive = true
        this.menuItens.map((item, itemIndex) => {
          if (itemIndex !== 3) {
            item.isActive = false
          }
          return item
        })
      } else if (this.isPageAtBottom()) {
        this.menuItens[4].isActive = true
        this.menuItens.map((item, itemIndex) => {
          if (itemIndex !== 4) {
            item.isActive = false
          }
          return item
        })
      }
    },
    isPageAtBottom (threshold = 50) {
      const scrollY = window.scrollY

      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      )

      const windowHeight = window.innerHeight

      return scrollY + windowHeight >= documentHeight - threshold
    }
  },

  async mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.typeNameEffect()
  },

  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }
})
</script>

<style>
:root {
  --primary: #0D69AB;
  --dark: #0E1617;
}
.navbar {
  font-size: 2.5rem;
  background-color: #1D1D27;
  position: fixed;
  z-index: 99999999999999;
  top: 300px;
  width: 100px;
  padding: 10px 10px 10px 0;
  color: white;
  border-radius: 0px 10px 10px 0;
  display: flex;
  align-items: center;
  left: -25px;
  transition: .6s;
}

.closeMenu {
  left: -100px;
  transition: .6s;
}
.closeMenu .active {
  background-color: none;
  transform: translateX(0px) scale(1);
}
.navbar ul {
  list-style: none;
}
.navbar li {
  margin-top: 25px;
  display: grid;
  padding: 5px;
}

.menuBtn {
  transition: .3s;
}

.active {
  transform: translateX(20px) scale(1.3);
  background-color: var(--primary);
  border-radius: 50%;
}
#myVideo {
  width: 100%;
  z-index: -1;
  height: 100vh;
  object-fit: cover;
}
#cardVideo {
  width: 100%;
  z-index: -1;
  height: 100%;
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
  height: 100vh;
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
  overflow: visible;
}

.gridIcons i {
  padding: 50px;
}

.gridIcons i div {
  overflow: visible;
}

.gridIcons div {
  animation: floating 3s;
  animation-iteration-count: infinite;
  animation-delay: .8s;
}
.gridIcons div:nth-child(odd) {
  animation-delay: 1s;
}

.gridIcons div:nth-child(4) {
  animation-delay: 1s;
}
.gridIcons div:nth-child(6) {
  animation-delay: 2s;
}
.gridIcons div:nth-child(8) {
  animation-delay: 3s;
}
.gridIcons div:nth-child(10) {
  animation-delay: 4s;
}

.gridIcons div:nth-child(12),.gridIcons div:nth-child(3) {
  animation-delay: 5s;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  gap: 1rem;
  margin: auto;
  margin-top: 50px;
  justify-content: center;
}

.my-card {
  transition: .6s;
  cursor: pointer;
}

.hoveredCard {
  transform: scale(1.1);
}

.cardSection {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #00000060;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

@media all and (max-width: 500px) {
  .dark {
    padding: 20px;
  }
  .navbar {
    top: 200px;
    left: -40px;
    padding: 0;
    font-size: 0.5rem
  }
  .closeMenu {
    left: -100px;
    transition: .6s;
  }
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

@keyframes floating {
  0% {
    transform: translate(0,0);
  }
  50% {
    transform: translate(0,6px);
  }
  100% {
    transform: translate(0,0);
  }
}
</style>
