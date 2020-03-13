<template>
<div>
    <Navbar2 />
<div class="px-20 mt-32">
    <div class="flex mb-4 py-5 shadow-2xl pb-16">
        <div class="w-1/6 h-12 pl-10">
        <button class="bg-indigo hover:bg-indigo-dark text-white font-bold py-2 px-4 w-full inline-flex items-center">
         <img src ="~assets/avatar/5.png" class="h-20">
        </button>
        </div>
        <div class="w-5/6  h-12">
        <h1><b>Unknown Unknown</b></h1>
        <p class="text-xs">unknown@gmail.com</p>
       <nav class="flex flex-col sm:flex-row">
            <button class="text-gray-600 py-4 px-6 block hover:text-green-700 focus:outline-none">
                 <nuxt-link to="/profile"> Profile</nuxt-link>
            </button><button class="text-gray-600 py-4 px-6 block hover:text-green-700 focus:outline-none">
                <nuxt-link to="/transaction">Application</nuxt-link>
            </button><button class="active">
               <nuxt-link to="/Help"> Help</nuxt-link>
                </button>
        </nav>
        </div>
        <div class="w-1/5 ">
            <modal />
        </div>
    </div>
    <!-- <div class="box help-content">
    <code v-if="lang ==='profile'"> -->
    <div class="flex mb-4 pb-16 " style="min-height: 80vh;">
        <div class="w-1/3 bg-white rounded shadow-2xl" data-aos="fade-down-left">
         <div class="p-2 py-5 bg-white text-left rounded  shadow-2xl">
                <div class="border-b-2 border-gray-300 pb-2">
                    <span class="text-lg text-black ">Our Location</span>
                </div>
                <div class="flex border-b-2 border-gray-300 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-5" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                    <span class="text-base text-black ">City of Mati, Davao del Sur, Philippines</span>
                </div>
                <div class="flex border-b-2 border-gray-300 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-5" width="24" height="24" viewBox="0 0 24 24"><path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"/></svg>
                    <span class="text-base text-black "> +63 (2) 85277804</span>
                </div>
                <div class="flex border-b-2 border-gray-300 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-5" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>
                    <span class="text-base text-black "> cityofmati@gmail.com</span>
                </div>
            </div>
        </div>
        <div class="w-2/3 bg-white rounded ml-4 shadow w-full shadow-2xl" data-aos="fade-down-right">
        <div class="flex mt-4 p-4 m-4 ">
            <!-- <h5 class="text-grey-darkest"><b>Transaction History (0)</b></h5> -->
        </div>
    </div>
    <!-- <div class="flex mb-4 pb-16 bg-gray-500">
        <div class="w-1/3 bg-white rounded shadow" data-aos="fade-down-left">
         <div class="flex mt-4 p-2 m-2">
            <h5 class="text-grey-darkest"><b>We Accept Payment Visa</b></h5>
         </div>
        </div>
    </div> -->
</div> 
<!-- </code>
    </div> -->
</div>
<Footer2 />
</div>
</template>
<script>
import Navbar2 from '~/components/Navbar2.vue' 
import Footer2 from '~/components/Footer2.vue'
import modal from '~/components/modal.vue'

export default {
     name: 'HelpComponent',
    components: {
        Navbar2,
        Footer2,
        modal
    }
}
</script>
<style scoped>
 .active  {
        border-bottom-color: #000000;
        color: rgb(33, 167, 89);
        border-bottom: 3px solid;
        font-weight: bold;
        padding: 1rem;
    }
</style>
