<script setup>
import GetInTouch from '../components/GetInTouch.vue'
import Countries from '../components/Countries/Countries.vue'

</script>

<template>
    <div className="">
            <div className='company-sections about'>
                <div className='company-img'>
                    <img src="/about/desktop/image-about-hero.jpg" class="desktop-img"/>
                    <img src="/about/tablet/image-about-hero.jpg" class="tablet-img"/>
                    <img src="/about/mobile/image-about-hero.jpg" class="mobile-img"/>
                </div>
              
                <div className='about-us_text padding-company'>
                    <h2>About Us</h2>
                    <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We&apos;ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We&apos;re always looking forward to creating brands, products, and digital experiences that connect with our clients&apos; audiences.</p>
                </div>
            </div>

            <div className='company-sections'>
                <div className='company-img'>
                    <img src="/about/desktop/image-world-class-talent.jpg" class="desktop-img"/>
                    <img src="/about/tablet/image-world-class-talent.jpg" class="tablet-img"/>
                    <img src="/about/mobile/image-world-class-talent.jpg" class="mobile-img"/>
                </div>

                <div className='world-talant_text padding-company'>
                    <h2>World-class talent</h2>
                    <p className='mb-[1.5rem]'>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
                    <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand&apos;s story and mission.</p>
                </div>
            </div>

            <Countries />

            <div className='company-sections section-gap'>
                <div className='company-img'>
                    <img src="/about/desktop/image-real-deal.jpg" class="desktop-img"/>
                    <img src="/about/tablet/image-real-deal.jpg" class="tablet-img"/>
                    <img src="/about/mobile/image-real-deal.jpg" class="mobile-img"/>
                </div>

                <div className='real-deal_text padding-company'>
                    <h2>The real deal</h2>
                    <p className='mb-[1.5rem]'>As strategic partners in our clients&apos; businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                    <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                </div>
            </div>

            <div className='translateY container'>
                <GetInTouch />
            </div>
        </div>
</template>

<style scoped>

.about-us_text {
    background-color: var(--clr-peach);
    color: var(--clr-white);
    background-image: url('/about/desktop/bg-pattern-hero-about-desktop.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.world-talant_text, 
.real-deal_text {
    background-color: var(--clr-very-light-peach);
}

.about-us_text h2,
.world-talant_text h2,
.real-deal_text h2 {
    margin-bottom: 1.5rem;
}

.world-talant_text h2,
.real-deal_text h2 {
    color: var(--clr-peach);
}

.padding-company {
    padding: 5rem 1.5rem;
    text-align: center;
}

.company-img img{
    margin-inline: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* mobile */
@media (max-width:639px) {
    .desktop-img,
    .tablet-img {
        display: none;
    }
}

/* tablet */
@media (min-width:640px) {
    .company-sections {
        max-width: 680px;
        margin-inline: auto;
        width: 90%;

        border-radius: var(--border-radius);
        overflow: hidden;
    }

    .padding-company {
        padding: 4.25rem 3.625rem;
    }

    .about {
        margin-bottom: 7.5rem;
    }

    .desktop-img,
    .mobile-img {
        display: none;
    }
}

/* desktop */
@media (min-width:864px) {
    .company-sections {
        display: grid;
        grid-template-columns: auto auto;
        place-content: center;
        max-width: 1111px;
    }

    .padding-company {
        text-align: left;
    }

    .about {
        margin-bottom: 10rem;
    }

    .about-us_text {
        order: -1;
        padding-inline: 5.938rem;
    }

    .tablet-img,
    .mobile-img {
        display: none;
    }

    .desktop-img {
        display: block;
    }
}
</style>