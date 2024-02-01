<script setup>
import iconArrow from '/icon-right-arrow.svg'
const props = defineProps({
  design: Object,
  large: Boolean
})
</script>

<template>
    <router-link :to="{name: design.url}" :className="`design-link text-center ${large ? 'webLink' : ''} ${design.bgImage}`">
        <h2 className='z-10'>{{design.title}}</h2>
        <div className='flex gap-[1.25rem] items-center justify-center z-10'>
            <p className="uppercase tracking-[.25em] text-[15px]">View project</p>
            <img :src="iconArrow" alt='arrow image'/>
        </div>
    </router-link>
</template>

<style scoped>
.design-link {
    border-radius: var(--border-radius);
    color: var(--clr-white);
    position: relative;
}

.design-link:hover::after {
    opacity: .5;
    background-color: var(--clr-peach);
    content: '';
    position: absolute;
    inset: 0;
}

.image-app-design {
    background-image: url("../../../../public/design-link-images/mobile/image-app-design.jpg");
}

.image-web-design {
    background-image: url("../../../../public/design-link-images/mobile/image-web-design.jpg");
}

.image-graphic-design {
     background-image: url("../../../../public/design-link-images/mobile/image-graphic-design.jpg");
}

/* mobile */
@media (max-width:639px) {
   .design-link {
        padding-block: 5.625rem;
   }
}

/* tablet */
@media (min-width:640px) {
    .design-link {
        padding-block: 3.313rem;
   }

   .image-app-design {
       background-image: url("../../../../public/design-link-images/tablet/image-app-design.jpg");
   }

   .image-web-design {
       background-image: url("../../../../public/design-link-images/tablet/image-web-design.jpg");
   }
   
   .image-graphic-design {
        background-image: url("../../../../public/design-link-images/tablet/image-graphic-design.jpg");
   }
}

/* desktop */
@media (min-width:864px) {
    .design-link {
        padding-block: 6.688rem;

        display: grid;
        place-content: center;
   }

   .image-app-design {
       background-image: url("../../../../public/design-link-images/desktop/image-app-design.jpg");
   }

   .image-web-design {
       background-image: url("../../../../public/design-link-images/desktop/image-web-design-large.jpg");
   }
   
   .image-graphic-design {
        background-image: url("../../../../public/design-link-images/desktop/image-graphic-design.jpg");
   }
}
</style>