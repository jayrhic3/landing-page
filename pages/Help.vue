<template>
<div>
    <Navbar2 />
<div class="px-20 mt-32 font-mono">
    <div class="flex mb-4 py-5 shadow-2xl pb-16">
        <div class="w-1/6 h-12 pl-10">
        <button class="bg-indigo hover:bg-indigo-dark text-white font-bold py-2 px-4 w-full inline-flex items-center">
         <img src ="~assets/avatar/5.png" class="h-20">
        </button>
        </div>
        <div class="w-1/2  h-12">
        <h1 class="text-3xl font-bold">Jane Doe</h1>
        <p class="text-base font-mono">unknown@gmail.com</p>
        <nav class="flex flex-col sm:flex-row">
            <button class="flex text-gray-600 py-4 px-6 block hover:text-green-700 focus:outline-none">
                <svg width="24" height="24" class="mr-2" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z"/></svg>
                 <nuxt-link to="/profile"> Profile</nuxt-link>
            </button>
            <button class=" flex text-gray-600 py-4 px-6 block hover:text-green-700 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mr-2" viewBox="0 0 24 24"><path d="M22 6v12h-16v-12h16zm2-6h-20v20h20v-20zm-22 22v-19h-2v21h21v-2h-19z"/></svg>
                <nuxt-link to="/transaction">Application</nuxt-link>
            </button>
            <button class="active flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mr-2" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm1.024 13.975c0 .566-.458 1.025-1.024 1.025-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024zm1.141-8.192c-.498-.505-1.241-.783-2.09-.783-1.786 0-2.941 1.271-2.941 3.237h1.647c0-1.217.68-1.649 1.261-1.649.519 0 1.07.345 1.117 1.004.052.694-.319 1.046-.788 1.493-1.157 1.1-1.179 1.633-1.173 2.842h1.643c-.01-.544.025-.986.766-1.785.555-.598 1.245-1.342 1.259-2.477.008-.758-.233-1.409-.701-1.882z"/></svg>
               <nuxt-link to="/Help"> Help</nuxt-link>
                </button>
        </nav>
        </div>
        <div class="w-1/2 px-10 pl-64">
            <modal />
    </div>
    </div>
    <!-- <div class="box help-content">
    <code v-if="lang ==='profile'"> -->
    <div class="flex mb-4 pb-16 ">
        <div class="w-1/3" data-aos="fade-down-left">
        <div class="block">
            
            <div class="p-2 py-5 bg-white text-left rounded  shadow-2xl">
                <div class="border-b-2 border-gray-300 pb-2">
                    <span class="text-lg text-black ">Our Location</span>
                </div>
                <div class="flex border-b-2 border-gray-300 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-5" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                    <span class="text-base text-black ">City of Mati, Davao Oriental, Philippines</span>
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
        
        </div>
        <div class="w-2/3 bg-white rounded ml-4 shadow w-full shadow-2xl" data-aos="fade-down-right">
        <div class="flex mt-1 m-1 ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507209.5509320832!2d126.05101723230186!3d6.699487463833517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fbc90b16f3401b%3A0x7c4fb4ac278e164d!2sMati%2C%20Davao%20Oriental!5e0!3m2!1sen!2sph!4v1584088062228!5m2!1sen!2sph" width="880" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
