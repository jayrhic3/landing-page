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
            <button class="active">
                 <nuxt-link to="/profile"> Profile</nuxt-link>
            </button><button class="text-gray-600 py-4 px-6 block hover:text-green-700 focus:outline-none">
                <nuxt-link to="/transaction">Application</nuxt-link>
            </button><button class="text-gray-600 py-4 px-6 block hover:text-green-700 focus:outline-none">
               <nuxt-link to="/Help"> Help</nuxt-link>
                </button>
        </nav>
        </div>
        <div class="w-1/5 "><button href="#" class=" text-md transition duration-500 ease-in-out inline-block text-sm px-4 py-2 leading-none text-white hover:text-white bg-green-500 hover:bg-green-700 rounded mt-4 lg:mt-0 transform hover:-translate-y-1 hover:scale-110">Select Transaction</button></div>
    </div>
    <div class="flex mb-4 pb-16">
        <div class="w-1/3 bg-white rounded shadow" data-aos="fade-down-left">
         <div class="flex mt-4 p-1 m-1">
            <h5 class="text-grey-darkest text-sm"><b>Personal Information</b></h5>
            <div class="ml-16">
            <button href="#" style="float:right" class="text-md transition duration-500 ease-in-out inline-block text-sm px-4 py-2 leading-none text-white hover:text-white bg-gray-700 hover:bg-gray-500 rounded mt-4 lg:mt-0 transform hover:-translate-y-1 hover:scale-110">Edit</button></div>
           </div>
            <div class="border-b-2 m-0 px-2"></div>
            <div class="p-2 m-2">
                <table class="table-fixed">
                     <tbody class="text-xs">
                        <tr>
                        <td class="border px-4 py-2">Firstname:</td>
                        <td class="border px-4 py-2">Unknown</td>
                        </tr>
                        <tr>
                        <td class="border px-4 py-2">Middlename:</td>
                        <td class="border px-4 py-2">Unknown</td>
                        </tr>
                        <tr>
                        <td class="border px-4 py-2">Lastname:</td>
                        <td class="border px-4 py-2">Unknown</td>
                        </tr>
                        <tr>
                        <td class="border px-4 py-2">Email Address:</td>
                        <td class="border px-4 py-2">unknown@gmail.com</td>
                        </tr>
                        <tr>
                        <td class="border px-4 py-2">Mobile Number:</td>
                        <td class="border px-4 py-2">12345678901</td>
                        </tr>
                        <tr>
                        <td class="border px-4 py-2">Address:</td>
                        <td class="border px-4 py-2">Panabo City</td>
                        </tr>
                     </tbody>
                </table>
            </div>
        </div>
        <div class="w-2/3 bg-white rounded ml-4 shadow w-full" data-aos="fade-down-right">
        <div class="flex mt-4 p-4 m-4">
            <h5 class="text-grey-darkest"><b>Transaction History (0)</b></h5>
            <div class="border-b-2 m-0 px-2"></div>
            <div  style="float:right">
                <select class="form-select mt-1 block w-full" style="float:right">
                    <option></option>
                    <option>1 per page</option>
                    <option>2 per page</option>
                    <option>3 per page</option>
                    <option>4 per page</option>
                    <option>5 per page</option>
                </select>
            </div>
        </div>
        <div class="flex flex-no-wrap bg-gray-200">
            <div class="w-1/5 flex-none p-2">
                 <select class="form-select mt-1 block w-full" style="float:right">
                    <option></option>
                    <option>Select Status</option>
                 </select>
            </div>
            <div class="w-3/5 flex-none p-2">
                  <input class="w-64 ml-10 rounded mb-8 focus:outline-none focus:shadow-outline shadow-lg" placeholder="Search by transaction ID">
                  <button href="#" class="text-md transition duration-500 ease-in-out inline-block text-sm px-4 py-2 leading-none text-white hover:text-white bg-gray-700 hover:bg-gray-500 rounded mt-4 lg:mt-0 transform hover:-translate-y-1 hover:scale-110">      <svg class="fill-current pointer-events-none text-grey-darkest w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
		<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
	  </svg> Search</button>
            </div>
        <div class="w-1/5 flex-none p-2">
        <button href="#" class="text-md transition duration-500 ease-in-out inline-block text-sm px-4 py-2 leading-none text-black hover:text-black bg-white hover:bg-gray-500 rounded mt-4 lg:mt-0 transform hover:-translate-y-1 hover:scale-110">Refresh</button>
        </div>
        </div>
        <div class="flex mt-4 p-4 m-4">
            <center><img src ="@/assets/images/no_item.jpg" width="30%"></center>
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