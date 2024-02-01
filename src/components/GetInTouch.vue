<template>
    <div className='get-in-touch'>
            <div className='get-in-touch_heading grid gap-4'>
                <h2>Let&apos;s talk about your project</h2>
                <p className='opacity-90'>Ready to take it to the next level? Contact us today and find out 
                    how our expertise can help your business grow.
                </p>
            </div>
            <button className='button-secondary'>Get in touch</button>
        </div>
</template>

<style scoped>
  .get-in-touch {
    background-color: var(--clr-peach);
    background-image: url('../../../../public/bg-images/bg-pattern-call-to-action.svg');
    background-repeat: no-repeat;
    background-position: center;
    color: var(--clr-white);
    padding: 4rem 1.5rem;
    border-radius: var(--border-radius);
    text-align: center;
}

.get-in-touch_heading {
    margin-bottom: 2rem;
}

/* mobile */
@media (max-width:639px) {
    .get-in-touch {
        padding: 3.563rem;
    }
}

/* tablet */
@media (min-width:640px) {
    .get-in-touch {
        padding: 3.563rem;
    }    
    
}


/* desktop */
@media (min-width:864px) {
    .get-in-touch {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4.5rem 6rem 2.875rem;
        gap: 2rem;
        text-align: left;
    }

    .get-in-touch_heading {
        width: 23rem;
        margin-bottom: 0;
    }
}
</style>