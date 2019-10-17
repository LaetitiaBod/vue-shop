<template>
<v-container>
    <v-layout text-center wrap>
      <v-flex>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col>
                <v-text-field v-model="name" label="Name" required></v-text-field>
              </v-col>
              <v-col>
                <v-text-field v-model="password" label="password" type='password' required></v-text-field>
              </v-col>
            </v-row>
            <v-btn @click="login">Log in</v-btn>
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
  })
}
</script>
