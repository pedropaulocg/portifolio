<template>
  <q-layout view="lHh Lpr lFf">

    <nav class="navbar">
      <ul>
        <li v-for="(menuItem, index) in menuItens" :key="index">
          <q-btn class="menuBtn" :icon="menuItem.icon" flat round :class="menuItem.isActive ? 'active' : ''" @click="handleActiveButton(index)"/>
          <!-- <q-icon :name="menuItem.icon"/> -->
        </li>
      </ul>
    </nav>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default ({
  name: 'MainLayout',

  data () {
    return {
      menuItens: [
        { icon: 'mdi-home', isActive: true },
        { icon: 'mdi-head-lightbulb-outline', isActive: false },
        { icon: 'fa-solid fa-laptop-code', isActive: false },
        { icon: 'mdi-forum', isActive: false }
      ]
    }
  },
  methods: {
    handleActiveButton (index) {
      this.menuItens[index].isActive = !this.menuItens[index].isActive
      this.menuItens.map((item, itemIndex) => {
        if (itemIndex !== index) {
          item.isActive = false
        }
        return item
      })
    }
  }
})
</script>

<style>
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
    background-color: #0A8754;
    border-radius: 50%;
    transform: translateX(20px) scale(1.3);
  }
</style>
