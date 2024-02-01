<script setup>
import GetInTouch from "../components/GetInTouch.vue";
import CountryExpand from '../components/Countries/CountryExpand.vue'
import countries from '../../src/countries.json'
</script>

<template>
    <div>
        <div className="countries_container grid"> 
            <CountryExpand v-for="country in countries" :key="country.id" v-bind="country"/>
        </div>

        <div className='translateY container'>
            <GetInTouch />
        </div>
    </div>
</template>

<style scoped>
.countries_container {
    gap: 2.5rem;
}


/* mobile */
@media (max-width:639px) {
    .margin-contact {
        margin-bottom: 1.5rem;
    }
}

/* tablet */
@media (min-width:640px) {
    .countries_container {
        gap: 7.5rem;
    }
}

/* desktop */
@media (min-width:864px) {

}
</style>