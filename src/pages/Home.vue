<script setup>
import imagePhone from '../assets/image-hero-phone.png'
import GetInTouch from '../components/GetInTouch.vue'
import Quality from '../components/Quality.vue'
import qualities from '../qualities.json'
import designsJson from'../designs.json'
import DesignLink from '../components/DesignLink.vue'

</script>

<template>
     <div className="container">
      <div className='page-heading'>
        <div>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p className='margin-b'>With over 10 years in the industry, we are experienced in creating fully responsive websites, apps, and engaging brand experiences. Find out more about our services.</p>
          <button className='button-secondary'>Learn more</button>
        </div>
        <div>
          <img className='phone-img' :src="imagePhone" alt='image of a phone'/>
        </div>
      </div>

      <div className='section-gap grid gap-[1.5rem] design-link-wparrer'>
        <DesignLink :design="designsJson.webDesign" :large="true"/>
        <DesignLink :design="designsJson.appDesign"/>
        <DesignLink :design="designsJson.graphicDesign"/>
      </div>

      <div className='qualities-container section-gap'>
        <Quality v-for="quality in qualities" :key="quality.id" v-bind="quality"/>
      </div>


      
      <div className='translateY'>
        <GetInTouch />
      </div>
    
    </div>
</template>

<style scoped>
.qualities-container {
    display: grid;
    gap: 2rem;
}

/* mobile */
@media (max-width:639px) {
    .qualities-container {
        gap: 5rem;
    }
}

/* desktop */
@media (min-width:864px) {
    .qualities-container {
        grid-template-columns: repeat(3, 1fr);
        gap: 1.875rem;
    }
}
</style>