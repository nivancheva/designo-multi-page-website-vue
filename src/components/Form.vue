<script setup>
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
const validationSchema = toTypedSchema(
  zod.object({
    name: zod.string().min(1, { message: "Can't be empty" }),
    email: zod.string().min(1, { message: "Can't be empty" }).email({ message: "Please enter a valid email address." }),
    phone: zod.string().min(1, { message: "Can't be empty" }),
    message: zod.string().min(1, { message: "Can't be empty" })
  })
);
const { handleSubmit, errors } = useForm({
  validationSchema,
});


const { value: name } = useField('name');
const { value: email } = useField('email');
const { value: phone } = useField('phone');
const { value: message } = useField('message');

const onSubmit = handleSubmit(values => {
  
})

</script>

<template>
    <form className='grid gap-[1.5rem]' @onSubmit="onSubmit">

            <div className='relative'>
                <input 
                    className='block'
                    placeholder='Name'
                    v-model="name"
                />
                <div v-if="errors.name" className='errors flex'>
                    <p>{{errors.name}}</p>
                    <div><img src='/contact/desktop/icon-error.svg'/></div>
                </div>

            </div>

            <div className='relative'>
                <input
                    className='block'
                    placeholder='Email Adress'
                    v-model="email"
                />

                <div v-if="errors.email" className='errors flex'>
                    <p>{{errors.email}}</p>
                    <div><img src='/contact/desktop/icon-error.svg'/></div>
                </div>

            </div>

            <div className='relative'>
                <input
                    className='block'
                    type="tel"
                    placeholder='Phone'
                    v-model="phone"
                />

                <div v-if="errors.phone" className='errors flex'>
                    <p>{{errors.phone}}</p>
                    <div><img src='/contact/desktop/icon-error.svg'/></div>
                </div>
            </div>
            
            <div className='relative'>
                <textarea
                    className='block message-input'
                    placeholder='Your message'
                    v-model="message"
                />
                <div v-if="errors.message" className='errors flex'>
                    <p>{{errors.message}}</p>
                    <div><img src='/contact/desktop/icon-error.svg'/></div>
                </div>
            </div>

            <button className='button-secondary form-button'>Submit</button>
        </form>
</template>

<style scoped>
input,
textarea {
    width: 100%;
    background-color: inherit;
    color: var(--clr-white);
    outline: 0;

    border-bottom: 1px solid var(--clr-white-opacity);
    padding-inline: 1rem;
    padding-bottom: .688rem;

    cursor: pointer;
}

input::placeholder,
textarea::placeholder {
    color: var(--clr-white);
    opacity: .6;
}

input:focus,
textarea:focus {
    border-bottom-color: var(--clr-white);
}

.message-input {
    padding-bottom: 3rem;
}

.errors {
    align-items: center;
    gap: .5rem;
    font-size: .75rem;
    font-style: italic;

    position: absolute;
    right: 0;
    bottom: .5rem;
}
/* mobile */
@media (max-width:639px) {
    .form-button {
        justify-self: center;
    }
}

/* tablet */
@media (min-width:640px) {
    .form-button {
        justify-self: end;
    }
}

/* desktop */
@media (min-width:864px) {
   
}
</style>