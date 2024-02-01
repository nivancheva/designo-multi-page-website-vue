<script setup>
import Country from '../Countries/Country.vue'
import countries from '../../countries.json'

</script>

<template>
<div className="grid country-wrapper section-gap container">
    <Country v-for="country in countries" :key="country.id" v-bind="country"/>
</div>
</template>

<style scoped>
.country-wrapper {
    gap: 3rem;
}

/* mobile */
@media (max-width:639px) {

}

/* tablet */
@media (min-width:640px) {
    .country-wrapper {
        gap: 5rem;
    }
}

/* desktop */
@media (min-width:864px) {
    .country-wrapper {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>