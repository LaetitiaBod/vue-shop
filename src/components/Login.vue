<template>
<v-container>
    <v-layout text-center wrap>
      <v-flex>
        <v-form>
          <v-alert dense dismissible v-model="error" type="error">{{alertmsg}}</v-alert>
          <v-alert dense dismissible v-model="warning" type="warning">{{alertmsg}}</v-alert>
          <v-alert dense dismissible v-model="success" type="success">{{alertmsg}}</v-alert>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field v-model="Name" label="Name" required></v-text-field>
              </v-col>
              <v-col>
                <v-text-field v-model="Password" label="Password" type='password' required></v-text-field>
              </v-col>
            </v-row>
            <v-btn @click="login()">Log in</v-btn>
            <v-spacer></v-spacer>
            <br/>
            <v-btn @click="register">Register</v-btn>
          </v-container>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    Name: '',
    Password: '',
    error: false,
    warning: false,
    success: false,
    alertmsg: ''
  }),
  methods: {
    async login () {
      if (this.Password === '' || this.Name === '') {
        console.log('missing password or name')
        this.alertmsg = 'Password or name is empty'
        this.warning = true
      } else {
        console.log('connexion request')
        const log = await this.axios.post('http://localhost:4000/api/login', {
          name: this.Name,
          password: this.Password
        })
        console.log(log.data.status)
        if (!log.data.status) {
          console.log('wrong name or wrong password')
          this.alertmsg = 'Password or name is wrong'
          this.error = true
        } else {
          console.log('Successfully connected')
          this.alertmsg = 'Successfully connected'
          this.success = true
          sessionStorage.setItem('name_session', this.Name)
          this.$router.push('/Home')
        }
      }
    },
    async register () {
      if (this.Password === '' || this.Name === '') {
        console.log('missing password or name')
        this.alertmsg = 'Password or name is empty'
        this.warning = true
      } else {
        console.log('register request')
        const reg = await this.axios.post('http://localhost:4000/api/register', {
          name: this.Name
        })
        console.log(reg.data.status)
        if (!reg.data.status) {
          console.log('this name is already taken')
          this.alertmsg = 'Name already taken'
          this.warning = true
        } else {
          console.log('New user created')
          this.axios.post('http://localhost:4000/api/registered', {
            name: this.Name,
            password: this.Password
          })
          this.alertmsg = 'Successfully created'
          this.success = true
          this.Name = ''
          this.Password = ''
        }
      }
    }
  }
}
</script>
