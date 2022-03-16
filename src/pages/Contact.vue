<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    setup() {
        

        const contactForm = reactive({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        })

        return { contactForm }
    },
})
</script>



<template>
<main>
    <Content class="!max-w-7xl">

        <!-- Header title & text -->
        <Title class="mb-3" center display brand>Contact Us !</Title>
        <Text class="mb-12" center large>If you have any question or remarks? Just write use a message, we'll make sure to answer !</Text>

        <!-- Main content card -->
        <Card class="flex space-x-12 mx-auto" large brand darker>

            <!-- Left - Contact informations -->
            <Card class="flex flex-col z-10 relative w-1/3 overflow-hidden" large>

                <!-- Title and text -->
                <Title class="mb-3" small>Contact information</Title>
                <Text class="mb-12" small>Fill up the form and our Team will get back to you within 24 hours.</Text>

                <!-- Contact informations -->
                <Text class="mb-9 font-medium" large><Icon left name="phone"/>+0123 4567 8910</Text>
                <Text class="mb-9 font-medium" large><Icon left name="mail"/>hello@hsjm.io</Text>
                <Text class="mb-9 font-medium" large><Icon left name="place"/>1000 Mason Street</Text>

                <div class="flex flex-wrap space-x-3 mt-auto">
                    <!-- <Button text fab icon="facebook" class="hover:!bg-facebook hover:!text-on-base-500"/>
                    <Button text fab icon="facebook" class="hover:!bg-twitter hover:!text-on-base-500"/>
                    <Button text fab icon="facebook" class="hover:!bg-instagram hover:!text-on-base-500"/>
                    <Button text fab icon="facebook" class="hover:!bg-linkedin hover:!text-on-base-500"/> -->
                </div>

                <!-- Background Gradient & Pattern -->
                <div class="-z-10 absolute left-0 top-0 h-full w-full bg-gradient-to-br from-base-700 to-brand-600 "/>
                <div class="-z-10 absolute left-0 top-0 h-full w-full heropattern-topography-brand-600 gradient-mask-t-0"/>
            </Card>

            <!-- Right - Contact form -->
            <div class="flex-grow">

                <!-- Form -->
                <div class="grid grid-cols-2 gap-6 content-start">
                    <Input label="First Name" placeholder="Your first name" icon="label_outline" v-model="contactForm.firstName"/>
                    <Input label="Last Name" placeholder="Your last name" icon="label_outline" v-model="contactForm.lastName"/>
                    <Input label="Email" placeholder="Your email address" icon="mail" v-model="contactForm.email"/>
                    <Input label="Phone" placeholder="Your phone number" icon="phone" v-model="contactForm.phone"/>
                </div>

                <!-- Separator -->
                <hr class="border-base-400 my-12"/>

                <!-- Checkboxes -->
                <Title class="mb-6" small>What kind of website do you need ?</Title>
                <div class="flex justify-evenly space-x-6 mb-6">
                    <Switch label="Web design"/>
                    <Switch label="Web development"/>
                    <Switch brand label="Logo design"/>
                    <Switch contrast label="Other"/>
                </div>

                <!-- Message -->
                <Input type="textarea" class="mb-12" label="Message" placeholder="Write your message..." icon="message" v-model="contactForm.message"/>

                <!-- Submit button. -->
                <Button class="float-right" outlined icon="send" large square>Send message</Button>
            </div>

        </Card>

    </Content>

    <Divider darker tall/>
    <Content darker center class="!max-w-7xl">

        <!-- Header title & text -->
        <Title class="mb-3" center display brand>The old way</Title>
        <Text class="mb-24" center large>Let's get to know each other ! If you want to contact us the old way, feel free to use our contact informations.</Text>
        
        <!-- Contact cards -->
        <div class="flex mx-auto space-x-12">
            <ContactCard class="w-1/4" to="tel:+12345678910" icon="phone" title="Give us a call!">+0123 4567 8910</ContactCard>
            <ContactCard class="w-1/4" icon="mail_outline" title="Send us an email!">hello@hsjm.io</ContactCard>
            <ContactCard class="w-1/2" icon="domain" title="Come find us!">1000 Mason Street, San-Francisco, CA</ContactCard>
        </div>

    </Content>
</main>
</template>