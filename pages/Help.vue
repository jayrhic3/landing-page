<template>
<div>
    <Logout />
<div class="px-20 mt-20">
    <div class="flex mb-4 py-5 shadow-2xl pb-16">
        <div class="w-1/6 h-12 pl-10">
        <button class="bg-indigo hover:bg-indigo-dark text-white font-bold py-2 px-4 w-full inline-flex items-center">
         <!-- <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                    </svg> -->
        <img src ="@/assets/images/avatar.png" class="h-20">
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
        <div class="w-1/5 "><button href="#" class=" text-md transition duration-500 ease-in-out inline-block text-sm px-4 py-2 leading-none text-white hover:text-white bg-green-500 hover:bg-green-700 rounded mt-4 lg:mt-0 transform hover:-translate-y-1 hover:scale-110">Select Transaction</button></div>
    </div>
    <!-- <div class="box help-content">
    <code v-if="lang ==='profile'"> -->
    <div class="flex mb-4 pb-16">
        <div class="w-1/3 bg-white rounded shadow" data-aos="fade-down-left">
         <div class="flex mt-4 p-2 m-2">
             <ul>
            <li><h5 class="text-grey-darkest py-3"><b>Our Location</b></h5></li>
            <li><h5 class="text-grey-darkest text-xs py-2"><b>City of Mati,Davao Oriental, Philippines</b></h5></li>
            <li><h5 class="text-grey-darkest text-sm py-2"><b>+63(2)85277804</b></h5></li>
            <li><h5 class="text-grey-darkest text-sm text-blue-500 py-2"><b>mati@gmail.com</b></h5></li>
             </ul>
        </div>
        </div>
        <div class="w-2/3 bg-white rounded ml-4 shadow w-full" data-aos="fade-down-right">
        <div class="flex mt-4 p-4 m-4">
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
<Footer />
</div>
</template>
<script>
import Logout from '~/components/Logout.vue' 
import Footer from '~/components/Footer.vue'
export default {
     name: 'HelpComponent',
    components: {
        Logout,
        Footer
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
