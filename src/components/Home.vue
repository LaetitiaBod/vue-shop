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
                <v-img v-bind:src="item.img" height="100px"></v-img>
                <v-list-item-title v-model="name" label="name" id="name">{{item.name}}</v-list-item-title>
                <v-list-item-subtitle v-model="price" label="price" id="price">{{item.price}}</v-list-item-subtitle>
                <v-list-item-subtitle v-model="brand" label="brand" id="brand">{{item.brand}}</v-list-item-subtitle>
                <v-btn @click="rmElement(index)">Remove</v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>
      </v-container>

      <v-container grid-list-xl>
        <v-layout text-center wrap>
          <v-flex v-for="(item) in shoes" v-bind:key="item.id">
            <v-card class="mx-auto" max-width="320" hover>
              <v-img  v-bind:src="item.img" height="200px"></v-img>
              <v-card-title v-model="name" label="name" id="name">{{item.name}}</v-card-title>
              <v-card-text class="text-left" v-model="brand" label="brand" id="brand">{{item.brand}}</v-card-text>
              <v-card-actions>
                <v-card-title v-model="price" label="price" id="price">{{item.price}}</v-card-title>
                <v-spacer></v-spacer>
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
    img: '',
    shoes: [{
      id: 1,
      name: 'Originals Falcon',
      price: '90 $',
      brand: 'Adidas',
      img: 'https://i1.adis.ws/i/jpl/jd_336202_a?qlt=80&w=600&h=425&v=1&fmt=webp'
    },
    {
      id: 2,
      name: 'RS-X',
      price: '110 $',
      brand: 'Puma',
      img: 'https://i1.adis.ws/i/jpl/jd_183890_a?qlt=80&w=600&h=425&v=1&fmt=webp'
    },
    {
      id: 3,
      name: 'Air Force 1',
      price: '100 $',
      brand: 'Nike',
      img: 'https://i1.adis.ws/i/jpl/jd_333370_a?qlt=80&w=600&h=425&v=1&fmt=webp'
    },
    {
      id: 4,
      name: 'Air Max 270 React',
      price: '160 $',
      brand: 'Nike',
      img: 'https://i1.adis.ws/i/jpl/jd_333714_a?qlt=80&w=600&h=425&v=1&fmt=webp'
    },
    {
      id: 5,
      name: 'Originals Stan Smith',
      price: '100 $',
      brand: 'Adidas',
      img: 'https://i1.adis.ws/i/jpl/jd_181801_a?qlt=80&w=600&h=425&v=1&fmt=webp'
    },
    {
      id: 6,
      name: 'Chuck Taylor All Star Archive High',
      price: '80 $',
      brand: 'Converse',
      img: 'https://i1.adis.ws/i/jpl/jd_152961_a?qlt=80&w=600&h=425&v=1&fmt=webp'
    },
    {
      id: 7,
      name: 'Old Skool',
      price: '75 $',
      brand: 'Vans',
      img: 'https://i1.adis.ws/i/jpl/jd_058318_a?qlt=80&w=600&h=425&v=1&fmt=webp'
    },
    {
      id: 8,
      name: 'Ray Tracer',
      price: '85 $',
      brand: 'Fila',
      img: 'https://i1.adis.ws/i/jpl/jd_160659_a?qlt=80&w=600&h=425&v=1&fmt=webp'
    },
    {
      id: 9,
      name: 'Sk8-Hi',
      price: '85 $',
      brand: 'Vans',
      img: 'https://i1.adis.ws/i/jpl/jd_358096_a?qlt=80&w=600&h=425&v=1&fmt=webp'
    },
    {
      id: 10,
      name: 'Disruptor II',
      price: '100 $',
      brand: 'Fila',
      img: 'https://i1.adis.ws/i/jpl/jd_165044_a?qlt=80&w=600&h=425&v=1&fmt=webp'
    },
    {
      id: 11,
      name: 'Air Force 1 Shadow',
      price: '110 $',
      brand: 'Nike',
      img: 'https://i1.adis.ws/i/jpl/jd_333411_a?qlt=80&w=600&h=425&v=1&fmt=webp'
    },
    {
      id: 12,
      name: 'Goldyn',
      price: '85 $',
      brand: 'Guess',
      img: 'https://i1.adis.ws/i/jpl/jd_173338_a?qlt=80&w=600&h=425&v=1&fmt=webp'
    },
    {
      id: 13,
      name: '452',
      price: '85 $',
      brand: 'New Balance',
      img: 'https://i1.adis.ws/i/jpl/jd_152456_a?qlt=80&w=600&h=425&v=1&fmt=webp'
    },
    {
      id: 14,
      name: 'Classic Leather',
      price: '100 $',
      brand: 'Reebok',
      img: 'https://i1.adis.ws/i/jpl/jd_151684_a?qlt=80&w=600&h=425&v=1&fmt=webp'
    }],
    todos: [{
      id: 648745874,
      name: 'sdfghj',
      price: '74158 $',
      brand: 'dcvbnhyg',
      img: 'https://picsum.photos/510/300?random'
    }]
  }),
  async addElement (shoes, index) {
    console.log(index)
    /* for (var i = 0; i < shoes.length; i++) {
     if (index === shoes.index) {
    this.todos.push({
      id: 78,
      name: 'shoes.name',
      price: 'shoes.price',
      brand: 'shoes.brand',
      img: 'shoes.img'
    })
     }
     }
    console.log('Added') */
  },
  rmElement (index) {
    console.log('index', index)
    this.todos.splice(index, 1)
  }
}
</script>
