<script setup>
const props = defineProps({
  title: String,
  text: String,
  image: String,
  category: String
})
</script>

<template>
  <div className='card'>
        <img :src="`${category}/${image}.jpg`" alt='card images'/>
        <div className='card-text'>
            <h3 className='title'>{{title}}</h3>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<style scoped>
   .card {
    border-radius: var(--border-radius);
    overflow: hidden;
    }

    .card-text {
        background-color: var(--clr-very-light-peach);
        padding: 2rem;
    }

    .card-text:hover {
        cursor: pointer;
        background-color: var(--clr-light-peach);
        color: var(--clr-white)
    }

    .title {
        color: var(--clr-peach);
        margin-bottom: 1rem;
    }
</style>