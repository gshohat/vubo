<template>
  <component :is="currentView" />
</template>

<script>
import PersonalDetails from './components/PersonalDetails.vue'
import BankAccounts from './components/BankAccounts.vue'

const routes = {
  '/': PersonalDetails,
  '/bank-accounts': BankAccounts
}

export default {
  name: 'App',
  components: {
    PersonalDetails
  },
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || PersonalDetails
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash;
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
