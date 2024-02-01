<script setup>
import Card from '../components/Card.vue'
import cards from '../appcards.json'
import GetInTouch from '../components/GetInTouch.vue'
import DesignLink from '../components/DesignLink.vue'
import designsJson from'../designs.json'

</script>

<template>
  <div className=''>
    <div className='design-heading'>
        <h1>App Design</h1>
        <p>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
    </div>

    <div className='section-gap container grid cards-wrapper'>
        <Card v-for="card in cards" :key="card.id" v-bind="card"/>
    </div>

    <div className='links-designs grid section-gap container'>
        <DesignLink :design="designsJson.webDesign"/>
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
    background-image: url("../../../../public/app-design/bg-pattern-intro-app.svg");
}
</style>