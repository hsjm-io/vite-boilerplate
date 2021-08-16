<template>
<main class="relative">

    <!-- Background gradient -->
    <div class="-z-10 absolute left-0 top-0 h-1/3 w-screen bg-gradient-to-br from-base-700 to-brand-500 ">
    </div>

    <!-- Background pattern -->
    <div class="-z-10 absolute left-0 top-0 h-1/3 w-screen heropattern-topography-brand-600 gradient-mask-t-0">
    </div>

    <!-- Hero -->
    <Content center transparent>

            <Title display center class="mb-24">The <strong>standard</strong> Lorem Ipsum passage, used <strong>since</strong> 1500.</Title>

            <!-- Hero text -->
            <p class="text-4xl mx-auto max-w-4xl font-bold mb-24">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>

            <!-- Hero action. -->
            <div class=" items-center inline-flex rounded-2xl bg-base-500 p-4 shadow-xl space-x-4">
                <Icon class="text-brand-500 ml-3 text-2xl" name="search"/>
                <input placeholder="Search for your content..." type="text" class="w-80 transition-all outline-none rounded-xl focus:bg-base-600 bg-base-500 text-on-base-500 h-12 px-4"/>
                <button class="shadow-lg px-4 self-stretch bg-gradient-to-r from-brand-400  to-brand-600 rounded-xl text-on-brand-500 font-bold transform hover:-translate-y-0.5 transition-transform">Search</button>
            </div>
        
    </Content>
    
    <!-- Features -->
    <Divider/>
    <Content class="text-center">

        <!-- Title and text -->
        <Title class="mb-6" center brand display>Features</Title>

        <p class="text-3xl max-w-3xl mx-auto mb-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>

        <div class="flex flex-nowrap justify-evenly space-x-3">
            <LandingFeature icon="dashboard" label="Dashboard">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</LandingFeature>
            <LandingFeature icon="flag" label="Reports">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</LandingFeature>
            <LandingFeature icon="traffic" label="Traffic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</LandingFeature>
        </div>
    </Content>

    <!-- Products -->
    <Divider darker flip large tall/>
    <Content darker class="flex">

        <!-- Hero text -->
        <div class="grid grid-cols-2 gap-4 items-stretch w-1/2">
            <LandingCard name="Feature" icon="badge" action="Search" to="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</LandingCard>
            <LandingCard name="Documentation" icon="picture_as_pdf" action="Read" to="about">Lorem ipsum dolor sit amet, consectetur <strong>adipiscing</strong> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</LandingCard>
            <LandingCard name="On demand" icon="content_cut" action="Read about" to="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <strong>tempor</strong> incididunt ut labore et dolore magna aliqua.</LandingCard>
            <LandingCard name="Google Drive" icon="add_to_drive" action="Let's go" to="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</LandingCard>
        </div>

        <!-- Left content -->
        <div class="w-1/2 text-right">
            <Title class="mb-6" large brand>What are we capable of ?</Title>
            <p class="text-lg font-light max-w-md ml-auto mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br/><br/>
                Ut enim ad minim veniam, <strong>quis nostrud exercitation</strong> ullamco laboris nisi
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br/><br/>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <strong>quis nostrud exercitation</strong> incididunt ut labore et dolore magna aliqua.
                <br/><br/>
                Ut enim ad minim veniam, <strong>sit amet</strong> exercitation ullamco laboris nisi
            </p>
            <Button large label="Search" brand icon="search"/>
        </div>
    </Content>

    <!-- Sponsors -->
    <Divider darker bottom/>
    <Content class="flex justify-evenly">
        <Title display class="!text-base-600 select-none">Apple</Title>
        <Title display class="!text-base-600 select-none">Google</Title>
        <Title display class="!text-base-600 select-none">Microsoft</Title>
    </Content>

    <Divider flip darker/>
    <section class="py-24 bg-base-600 text-on-base-500">
        <div class="container mx-auto flex items-top justify-evenly">

            <!-- Info title and text -->
            <div>
                <Title class="mb-3" brand>Features</Title>
                <p class="text-2xl font-bold max-w-xs"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
            </div>

            <div class="flex items-top space-x-8">
                <Icon class="shadow-xl text-5xl text-base-500 flex items-center justify-center rounded-full w-16 h-16 bg-gradient-to-r from-brand-400 to-brand-600" name="star"></Icon>
                <div>
                    <h4 class="text-2xl font-bold mb-3">Built for impact</h4>
                    <p class="max-w-xs mx-auto text-base text-opacity-75 text-on-base-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, consectetur adipiscing elit, sed do eiusmod tempor, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
            </div>

            <div class="flex items-top space-x-8">
                <Icon class="shadow-xl text-5xl text-base-500 flex items-center justify-center rounded-full w-16 h-16 bg-gradient-to-r from-brand-400 to-brand-600" name="sync"></Icon>
                <div>
                    <h4 class="text-2xl font-bold mb-3">In sync with you</h4>
                    <p class="max-w-xs mx-auto text-base text-opacity-75 text-on-base-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, consectetur adipiscing elit, sed do eiusmod tempor, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
            </div>
        </div>

    </section>

</main>
</template>
