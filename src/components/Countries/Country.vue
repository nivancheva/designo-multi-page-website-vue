<script setup>
const props = defineProps({
  image: String,
  name: String
})

</script>

<template>
    <div className="country-wrapper">
        <div className='bg-country'>
            <img :src="`countries/${image}.svg`"/>
        </div>
        <h3 className="uppercase mt-[3rem] mb-[2rem]">{{name}}</h3>
        <router-link :to="{name: 'Location'}"><button className="button-primary">See Location</button></router-link>
    </div>
</template>

<style scoped>
.country-wrapper {
    text-align: center;
}

.bg-country {
    background-image: url('/bg-images/bg-pattern-small-circle.svg');
    background-repeat: no-repeat;
    background-position: center;

    display: grid;
    place-content: center;
}
</style>
