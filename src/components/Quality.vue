<script setup>
const props = defineProps({
  heading: String,
  text: String,
  image: String,
})
</script>

<template>
  <div className='quality-wrapper'>
        <img className='bg-qualities-image' :src="`qualities-images/${image}`" alt='qualities images' />
    <div>
        <h3 className='qualities-heading'>{{heading}}</h3>
        <p>{{text}}</p>
    </div>
</div>
</template>

<style scoped>
.qualities-heading {
    margin-bottom: 2rem;
    text-transform: uppercase;
}

.bg-qualities-image {
    background-image: url('/bg-images/bg-pattern-small-circle.svg');
    background-repeat: no-repeat;
    background-position: center;
}

/* mobile */
@media (max-width:639px) {
    .quality-wrapper  {
        text-align: center;
    }

    .bg-qualities-image {
        margin-inline: auto;
    }

    .qualities-heading {
        margin-top: 3rem;
    }
}

/* tablet */
@media (min-width:640px) {
    .quality-wrapper {
        display: flex;
        align-items: center;
        gap:3rem
    }

    .qualities-heading {
        margin-bottom: 1rem;
    }

    .bg-qualities-image {
        background-size: cover;
    }
}


/* desktop */
@media (min-width:864px) {
   .quality-wrapper {
        display: block;
        text-align: center;
   }

   .bg-qualities-image {
        background-size: auto;
        margin-inline: auto
   }

   .qualities-heading {
    margin-top: 3rem;
}
}
</style>