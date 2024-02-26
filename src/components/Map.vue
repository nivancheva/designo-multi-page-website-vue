<script setup>
const props = defineProps({
  position: Array
})

import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet"
</script>

<template>
  <l-map ref="map" :zoom="13" :center="position" :useGlobalLeaflet="false">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :lat-lng="markerLatLng"></l-marker>
      <l-marker :lat-lng="position" ></l-marker>
</l-map>
</template>

<style scoped>

</style>