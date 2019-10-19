<template>
  <v-container>
    <v-layout text-center wrap>

      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="150"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to this E-Shop
        </h1>
      </v-flex>
      <v-container>
        <v-flex>
          <v-card class="mx-auto" max-width="600" tile>
            <v-list-item v-for="(item, index) in todos" v-bind:key="item.id">
              <v-list-item-content>
                <v-list-item-title>{{item.name}}</v-list-item-title>
                <v-list-item-subtitle>{{item.price}}</v-list-item-subtitle>
                <v-list-item-subtitle>{{item.brand}}</v-list-item-subtitle>
                <v-btn @click="rmElement(index)">Remove</v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>
      </v-container>

      <v-container grid-list-xl>
        <v-layout text-center wrap>
          <v-flex>
            <v-card class="mx-auto" max-width="320">
              <v-img  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
              <v-card-title v-model="name" label="name">hbjnk,</v-card-title>
              <v-card-subtitle v-model="price" label="price">10 miles of wonder</v-card-subtitle>
              <v-card-text v-model="brand" label="brand">10 of wonder</v-card-text>
              <v-card-actions>
                <v-btn text @click="addElement">buy</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: '',
    price: 0,
    brand: '',
    todos: [{
      id: 754,
      name: 'salut',
      price: 57,
      brand: 'toi'
    },
    {
      id: 752,
      name: 'salut',
      price: 57,
      brand: 'toi'
    },
    {
      id: 757,
      name: 'salut',
      price: 57,
      brand: 'toi'
    }]
  }),
  addElement () {
    this.todos.push({
      id: this.todos.length,
      name: this.name,
      price: this.price,
      brand: this.brand
    })
    console.log('Added')
  },
  rmElement (index) {
    console.log('index', index)
    this.todos.splice(index, 1)
  }
}
</script>
