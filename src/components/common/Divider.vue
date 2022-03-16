<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props: {

        //--- SVG Shape
        shape: {
            type: String, 
            default: 'waves', 
            validator: (v:string) => [
                'waves',
                'waves-opacity',
                'curve',
                'curve-asymetric',
                'triangle',
                'triangle-asymetric',
                'tilt',
                'arrow',
                'split',
                'book',
            ].includes(v)
        },

        //--- Sizes
        large: Boolean,
        tall: Boolean,
        short: Boolean,

        //--- Color
        darker: Boolean,

        //--- Orientation
        flip: Boolean,
        bottom: Boolean,
        
    },
})
</script>

<template>
    <div class="divider" :class="{flip, bottom, large, tall, short, darker}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">

            <!-- Waves -->
            <path v-if="shape === 'waves'" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"/>
        
            <!-- Waves Opacity -->
            <template v-else-if="shape === 'waves-opacity'">
                <path class="flip" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"/>
                <path class="flip" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"/>
                <path class="flip" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"/>
            </template>
        
            <!-- Curve -->
            <path v-else-if="shape === 'curve'" d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"/>
    
            <!-- Curve asymetric -->
            <path v-else-if="shape === 'curve-asymetric'" d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"/>
            
            <!-- Triangle -->
            <path v-else-if="shape === 'triangle'" d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"/>
            
            <!-- Triangle asymetric -->
            <path v-else-if="shape === 'triangle-asymetric'" d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"/>
    
            <!-- Tilt -->
            <path v-else-if="shape === 'tilt'" class="flip" d="M1200 120L0 16.48 0 0 1200 0 1200 120z"/>
            
            <!-- Arrow -->
            <path v-else-if="shape === 'arrow'" d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"/>
    
            <!-- Split -->
            <path v-else-if="shape === 'split'" d="M600,16.8c0-8.11-8.88-13.2-19.92-13.2H0V120H1200V3.6H619.92C608.88,3.6,600,8.66,600,16.8Z"/>

            <!-- Book -->
            <path v-else-if="shape === 'book'" d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"/>
        </svg>
    </div>
</template>

<style lang="postcss">
.divider {

    & > svg > path.flip {
        transform: rotate(180deg) translate(-100%, -100%);
    }

    @apply w-full overflow-hidden;
    line-height: 0;

    /* --- Orientation */
    &.flip { transform: scaleX(-100%)}
    &.bottom { transform: scaleY(-100%)}
    &.bottom.flip { transform: scale(-100%)}

    /* --- Sizes */
    & > svg {@apply h-16; width: calc(100% + 1.3px)}
    &.tall > svg {@apply h-32}
    &.short > svg {@apply h-8}
    &.large > svg {width: calc(150% + 1.3px)}

    /* --- Colors */
    @apply bg-transparent fill-current text-base-500;
    &.darker{@apply text-base-600}
}
</style>