<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <v-btn text icon color="red" @click="gotohome">
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <span>e-shop</span>
        <span class="font-weight-light">vue project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="gotobag">
        <span class="mr-2">Bag</span>
      </v-btn>
      <v-btn text @click="gotologin">
        <span class="mr-2">Login</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
  }),
  methods: {
    async gotohome () {
      this.$router.push('/Home').catch(err => { console.error('something went wrong', err) })
    },
    async gotologin () {
      this.$router.push('/Login').catch(err => { console.error('something went wrong', err) })
    },
    async gotobag () {
      this.$router.push('/Bag').catch(err => { console.error('something went wrong', err) })
    }
  }
}
</script>
