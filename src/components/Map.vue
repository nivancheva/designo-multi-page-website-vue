<script setup>
const props = defineProps({
  position: Array
})

import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet"
</script>

<template>
  <l-map ref="map" :zoom="13" :center="position" :useGlobalLeaflet="false">
    <l-tile-layer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        layer-type="base"
        name="Stadia Maps Basemap">
    </l-tile-layer>
    <l-marker :lat-lng="position" ></l-marker>
</l-map>
</template>

<style scoped>

</style>