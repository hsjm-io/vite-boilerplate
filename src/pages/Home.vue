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

        <!-- Title and text -->
        <Title h2 display center class="mb-24">The <strong>standard</strong> Lorem Ipsum passage, used <strong>since</strong> 1500.</Title>
        <Text display center class="mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</Text>

        <!-- Action. -->
        <div class=" items-stretch inline-flex rounded-2xl bg-base-500 p-4 shadow-xl space-x-4 max-w-2xl w-full">
            <Icon right brand name="search"/>
            <input placeholder="Search for your content..." type="text" class="w-full transition-all outline-none rounded-xl focus:bg-base-600 bg-base-500 text-on-base-500 h-12 px-4"/>
            <Button brand square label="Search" icon="search"/>
        </div>
    </Content>
    
    <!-- Features -->
    <Divider tall/>
    <Content class="-mt-16">

        <!-- Title and text -->
        <Title h3 class="mb-6" center brand display>Features</Title>
        <Text large center class="mb-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>

        <!-- Feature items -->
        <div class="flex flex-nowrap justify-evenly space-x-3">
            <LandingFeature icon="dashboard" label="Dashboard">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</LandingFeature>
            <LandingFeature icon="flag" label="Reports">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</LandingFeature>
            <LandingFeature icon="traffic" label="Traffic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</LandingFeature>
        </div>
    </Content>

    <!-- Products -->
    <Divider shape="triangle" darker flip tall/>
    <Content darker class="flex space-x-6">

        <!-- Hero text -->
        <div class="grid grid-cols-2 gap-6 items-stretch w-1/2">
            <LandingCard name="Feature" icon="badge" action="Search" to="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</LandingCard>
            <LandingCard name="Documentation" icon="picture_as_pdf" action="Read" to="about">Lorem ipsum dolor sit amet, consectetur <strong>adipiscing</strong> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</LandingCard>
            <LandingCard name="On demand" icon="content_cut" action="Read about" to="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <strong>tempor</strong> incididunt ut labore et dolore magna aliqua.</LandingCard>
            <LandingCard name="Google Drive" icon="add_to_drive" action="Let's go" to="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</LandingCard>
        </div>

        <!-- Left content -->
        <div class="w-1/2 text-right">
            <Title h3 class="mb-6" large brand>What are we capable of ?</Title>
            <Text large class="ml-auto mb-9" brand :md="
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
                'Ut enim ad minim veniam, **quis nostrud exercitation** ullamco laboris nisi'+ '\n\n'+
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'+ '\n\n'+
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do **quis nostrud exercitation** incididunt ut labore et dolore magna aliqua.'+
                'Ut enim ad minim veniam, **sit amet** exercitation ullamco laboris nisi'
            "/>
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

    <!-- Annotations -->
    <Divider flip darker/>
    <Content darker class="flex justify-between">

        <!-- Info title and text -->
        <div class>
            <Title h3 class="mb-3" brand>tldr;</Title>
            <Text display class="!max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </div>

        <LandingAnnotation label="Build for impact" icon="star">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,
            consectetur adipiscing elit, sed do eiusmod tempor, consectetur adipiscing elit,
            sed do eiusmod tempor
        </LandingAnnotation>

        <LandingAnnotation label="In sync with you" icon="sync">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,
            consectetur adipiscing elit, sed do eiusmod tempor, consectetur adipiscing elit,
            sed do eiusmod tempor
        </LandingAnnotation>
    </Content>

</main>
</template>
