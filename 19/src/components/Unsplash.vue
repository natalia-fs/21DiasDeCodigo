<script>
import {defineComponent} from 'vue';
import axios from 'axios';

export default defineComponent({
  data(){
    return {
      images: [
        "https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
        "https://images.unsplash.com/photo-1624696612050-73b5891cafcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      ]
    }
  },

  methods: {
    async getNewImage(index){
      const newImage = await axios.get(
        'https://api.unsplash.com/photos/random', {
         headers: {
          'x-ratelimit-limit': "200",
          'Authorization': 
            `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
         },
      }).then(response => {
        this.images[index] = response.data.urls.regular;
        return response.data;
      });
    }
  }
});
</script>

<template>
  <div class="unsplash">
    <h1>Clique em uma imagem</h1>
    <div class="container">
      <img
        v-for="(image, key) in images"
        :key="key"
        :src="image"
        class="unsplash-image"
        @click="getNewImage(key)"
      >
    </div>
  </div>
</template>

<style scoped>

div.unsplash{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.unsplash h1{
  font-family: sans-serif;
  color: #e5e5e5;
  text-align: center;
}
.container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

img.unsplash-image{
  width: 16rem;
  height: 16rem;
  object-fit: cover;
  border: 4px solid #e5e5e5;
  border-radius: .75rem;
  transition: .25s ease;
}

img.unsplash-image:hover{
  transform: rotate(5deg) translateY(-1rem);
}
</style>
