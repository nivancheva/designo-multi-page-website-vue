<script setup>
const props = defineProps({
  name: String,
  street: String,
  city: String,
  telephone: String,
  email: String,
  abbreviation: String,
  position: Array
  
})

import Map from '../Map.vue'
</script>

<template>
<div className="country_expand-wrapper">
    <div className='map-img'>
        <Map :position="position"/>
    </div> 
    
    <div className="country-details">
        <h2>{{name}}</h2>
        <div className='country-details-info'>
            <div className='margin-contact'>
                <p className='font-bold'>Designo AU Office</p>
                <p>{{street}}</p>
                <p>{{city}}</p>
            </div>
            <div>
                <p className='font-bold'>Contact</p>
                <p>P : {{telephone}}</p>
                <p>M : {{email}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.country-details {
    background-color: var(--clr-very-light-peach);
    background-image: url('/bg-images/bg-pattern-two-circles.svg');
    background-repeat: no-repeat;
    background-position: center;
    
    padding: 5rem 1.5rem;
}

.country-details h2 {
    color: var(--clr-peach);
    margin-bottom: 1.5rem;
}

.map-img {
    height: 20rem
}

.map-img > * {
    height: 100%;
}

/* mobile */
@media (max-width:639px) {
    .country-details {
        text-align: center;
    }

}

/* tablet */
@media (min-width:640px) {
    .country_expand-wrapper {
        max-width: 680px;
        margin-inline: auto;
        width: 90%;

        display: grid;
        gap: 1.5rem
    }

    .map-img > * {
        border-radius: var(--border-radius);
    }

    .country-details {
        padding: 5.5rem 4.625rem;
        border-radius: var(--border-radius);
    }
    
    .country-details-info {
        display: flex;
        justify-content: space-between;
        gap: 1rem
    }
}

/* desktop */
@media (min-width:864px) {
   .country_expand-wrapper {
        max-width: 1111px;

        gap: 1.875rem;
        grid-template-columns: auto auto;
   }

   .country-details {
        height: 100%;
   }

    .country_expand-wrapper:nth-child(2n+1) .country-details{
        order: -1;
   }
   .map-img {
        min-width: 200px;
        height: 100%;
    }
}
</style>