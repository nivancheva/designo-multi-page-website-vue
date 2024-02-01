<script setup>
import Card from '../components/Card.vue'
import cards from '../webcards.json'
import GetInTouch from '../components/GetInTouch.vue'
import DesignLink from '../components/DesignLink.vue'
import designsJson from'../designs.json'

</script>

<template>
  <div className=''>
    <div className='design-heading'>
        <h1>Web Design</h1>
        <p>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
    </div>

    <div className='section-gap container grid cards-wrapper'>
        <Card v-for="card in cards" :key="card.id" v-bind="card"/>
    </div>

    <div className='links-designs grid section-gap container'>
        <DesignLink :design="designsJson.appDesign"/>
        <DesignLink :design="designsJson.graphicDesign"/>
    </div>

    <div className='translateY container'>
        <GetInTouch />
    </div>
</div>
</template>

<style scoped>
@import "./design.css";
.design-heading {
    background-image: url("/web-design/bg-pattern-intro-web.svg");
}
</style>