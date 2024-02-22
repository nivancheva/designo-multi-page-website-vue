<script setup>
import logo from '../assets/logo/logo-dark.png'
import hamburger from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'
import { ref } from 'vue'

let isOpen = ref(false)
function handleClick() {
    isOpen.value = !isOpen.value
}
</script>

<template>
    <div className="navbar">
            <div className="container flex items-center justify-between">
                <router-link :to="{name:'Home'}">
                        <img
                            :src="logo"
                            alt='Logo image and home page button'
                            width=200px
                            height=37px
                        />
                </router-link>
                <div>
                    <button @click="handleClick" className="mobile-menu">
                        <img :src="`${isOpen ? close : hamburger}`"  alt='open menu'/>
                        
                    </button>
                    <div :className="`navbar-links ${isOpen ? 'open' : 'close'}`">
                        <router-link :to="{name:'Company'}">Our company</router-link>
                        <router-link :to="{name:'Location'}">Location</router-link>
                        <router-link :to="{name:'Contact'}">Contact</router-link>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="isOpen" className="navbar-overlay">
        </div>
</template>

<style scoped>
.navbar {
    padding-block: 2.188rem;
    background-color: var(--clr-white);
}

.navbar-links {
    text-transform: uppercase;
    letter-spacing: 2px;
}

.navbar-links > *:hover {
    text-decoration: underline;
}

/* mobile */
@media (max-width:639px) {
    .navbar {
        position: relative;
        z-index: 1002;
    }

    .navbar-links {
        position: absolute;
        flex-direction: column;
        width: 100%;
        background-color: var(--clr-black);
        color: var(--clr-white);
        font-size: 1.5rem;
        left: 0;
        margin-top: 2.188rem;
        padding: 3rem 1.5rem;
    }

    .open {
        display: flex;
    }

    .close {
        display: none;
    }

    .navbar-overlay {
        position: fixed;
        inset: 0;
        background: var(--clr-black);
        opacity: 0.6;
        z-index: 1001;
    }
}

/* tablet */
@media (min-width:640px) {
    .navbar {
        padding-block: 4rem;
    }

    .navbar-links {
        display: flex;
        gap: 2.625rem;
        font-size: .875rem;
    }

    .mobile-menu {
        display: none;
    }
}
</style>