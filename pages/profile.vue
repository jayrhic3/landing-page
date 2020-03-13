<template>
<div>
<<<<<<< HEAD
    <Navbar2 />
<div class="px-40 pt-20">
    <div class="flex mb-4 py-5 shadow-2xl pb-16">
        <div class="w-1/6 h-12 pl-10 "><img src ="~assets/avatar/5.png" class="h-20"></div>
        <div class="w-5/6  h-12">
        <h1 class="text-2xl font-bold">Maribel Sapugay</h1>
        <p class="text-xs">renghianbel2124@gmail.com</p>
        <nav class="flex flex-col sm:flex-row">
            <button class="text-gray-600 py-4 px-6 block hover:text-green-700 focus:outline-none text-green-500 border-b-2 font-medium  border-green-500">
                Profile
            </button><button class="text-gray-600 py-4 px-6 block hover:text-green-700 focus:outline-none hover:text-green-500 border-b-2 border-white hover:font-medium hover:border-green-500">
                Application
            </button><button class="text-gray-600 py-4 px-6 block hover:text-green-700 focus:outline-none hover:text-green-500 border-b-2  border-white hover:font-medium hover:border-green-500">
                Help
=======
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
>>>>>>> a9073120ad8c06fa26aa79d32038cbb2b3b51d72
                </button>
        </nav>
        </div>
        <div class="w-1/5">
            <button class="flex transition duration-500 ease-in-out -ml-10 text-sm  py-2 leading-none rounded text-gray-900 hover:text-white bg-green-500 hover:bg-green-700 mt-4 lg:mt-0 transform hover:-translate-y-1 hover:scale-110  text-base px-8 py-5" @click="toggleModal"> 
                <img src="~assets/svg/icon-file.svg" class="h-5 " />
                Select Transaction </button>
            <div v-if="modal" @click.self="toggleModal" class="w-screen fixed z-50 pin bg-smoke top-0 left-0">
            <div class="flex justify-center py-32" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease">
                <span @click="toggleModal" class="absolute pl-64 ml-32 pt-5">
              <svg class="h-12 w-12 text-white hover:text-gray-100  transform hover:-translate-y-1 hover:scale-105" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
                <div class="w-2/5 cursor-pointer border bg-white rounded flex flex-col justify-center items-center text-center p-6 ">
                    <span class="flex text-2xl font-bold text-gray-900">
                                <img class="h-10" src="@/assets/svg/icon-search.svg" /> Select Transanction</span>
                    <div class="flex pt-5">
                            <div class="px-2 py-2 m-2 bg-gray-400 shadow-md transform hover:-translate-y-1 hover:scale-105 rounded">
                                <img class="h-20" src="@/assets/images/cityofmati1.png" />
                            </div>
                            <div class="px-2 py-2 m-2 bg-gray-400 shadow-md transform hover:-translate-y-1 hover:scale-105 rounded">
                                <img class="h-20" src="@/assets/images/cityofmati1.png" />
                            </div>
                    </div>
                    <div class="flex">
                            <div class="px-2 py-2 m-2 bg-gray-400 shadow-md transform hover:-translate-y-1 hover:scale-105 rounded">
                                <img class="h-20" src="@/assets/images/cityofmati1.png" />
                            </div>
                            <div class="px-2 py-2 m-2 bg-gray-400 shadow-md transform hover:-translate-y-1 hover:scale-105 rounded">
                                <img class="h-20" src="@/assets/images/cityofmati1.png" />
                            </div>
                    </div>
                    <div class="flex">
                            <div class="px-2 py-2 m-2 bg-gray-400 shadow-md transform hover:-translate-y-1 hover:scale-105 rounded">
                                <img class="h-20" src="@/assets/images/cityofmati1.png" />
                            </div>
                            <div class="px-2 py-2 m-2 bg-gray-400 shadow-md transform hover:-translate-y-1 hover:scale-105 rounded">
                                <img class="h-20" src="@/assets/images/cityofmati1.png" />
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div class="flex mb-4 pb-16">
<<<<<<< HEAD
        <div class="w-1/3 bg-white rounded shadow-2xl  ">
         <div class="flex mt-4 p-2 m-2">
            <h5 class="text-grey-darkest"><b>Personal information</b></h5>
=======
        <div class="w-1/3 bg-white rounded shadow" data-aos="fade-down-left">
         <div class="flex mt-4 p-1 m-1">
            <h5 class="text-grey-darkest text-sm"><b>Personal Information</b></h5>
>>>>>>> a9073120ad8c06fa26aa79d32038cbb2b3b51d72
            <div class="ml-16">
                <button href="#" style="float:right" class="text-md transition duration-500 ease-in-out inline-block text-sm px-4 py-2 leading-none text-white hover:text-white bg-gray-700 hover:bg-gray-500 rounded mt-4 lg:mt-0 transform hover:-translate-y-1 hover:scale-110">Edit</button>
           </div>
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
<<<<<<< HEAD
        <div class="w-2/3 bg-white rounded ml-4 shadow-2xl w-full  ">
=======
        <div class="w-2/3 bg-white rounded ml-4 shadow w-full" data-aos="fade-down-right">
>>>>>>> a9073120ad8c06fa26aa79d32038cbb2b3b51d72
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
                  <button href="#" class="text-md transition duration-500 ease-in-out inline-block text-sm px-4 py-2 leading-none text-white hover:text-white bg-gray-700 hover:bg-gray-500 rounded mt-4 lg:mt-0 transform hover:-translate-y-1 hover:scale-110">      
                      <svg class="fill-current pointer-events-none text-grey-darkest w-4 h-4 inline" src="~assets/svg/icon-search.svg" viewBox="0 0 20 20">
		                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
	                  </svg> Search</button>
            </div>
        <div class="w-1/5 flex-none p-2">
        <button href="#" class="flex text-md transition duration-500 ease-in-out inline-block text-sm px-4 py-2 leading-none text-black hover:text-black bg-white hover:bg-gray-500 rounded mt-4 lg:mt-0 transform hover:-translate-y-1 hover:scale-110">
            Refresh</button>
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
<<<<<<< HEAD
<Footer2 />
</div>

=======
<Footer />
</div>
>>>>>>> a9073120ad8c06fa26aa79d32038cbb2b3b51d72
</template>

<script>
<<<<<<< HEAD
import Navbar2 from '@/components/Navbar2.vue'
import Footer2 from '@/components/Footer2.vue'

export default {
    components: {
        Navbar2,
        Footer2
    },
    data () {
        return {
            modal: false,
        }
    },
    methods: {
        toggleModal() {
        this.modal = !this.modal
	},
    }
}
</script>

<style>
.container2 {
  margin: 0 auto;
  min-height: 11vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.bg-smoke {
  background-color: rgba(0, 0, 0, 0.5);
}
=======
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
>>>>>>> a9073120ad8c06fa26aa79d32038cbb2b3b51d72
</style>