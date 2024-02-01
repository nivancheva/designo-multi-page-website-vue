<script setup>
import Card from '../components/Card.vue'
import cards from '../graphiccards.json'
import GetInTouch from '../components/GetInTouch.vue'
import DesignLink from '../components/DesignLink.vue'
import designsJson from'../designs.json'

</script>

<template>
  <div className=''>
    <div className='design-heading'>
        <h1>Graphic Design</h1>
        <p>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
    </div>

    <div className='section-gap container grid cards-wrapper'>
        <Card v-for="card in cards" :key="card.id" v-bind="card"/>
    </div>

    <div className='links-designs grid section-gap container'>
        <DesignLink :design="designsJson.appDesign"/>
        <DesignLink :design="designsJson.webDesign"/>
    </div>

    <div className='translateY container'>
        <GetInTouch />
    </div>
</div>
</template>

<style scoped>
@import "./design.css";
.design-heading {
    background-image: url("/graphic-design/bg-pattern-intro-graphic.svg");
}
</style>