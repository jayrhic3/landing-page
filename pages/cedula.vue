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
            <button class="flex text-gray-600 py-4 px-6 block hover:text-green-700 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="mr-2" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm1.024 13.975c0 .566-.458 1.025-1.024 1.025-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024zm1.141-8.192c-.498-.505-1.241-.783-2.09-.783-1.786 0-2.941 1.271-2.941 3.237h1.647c0-1.217.68-1.649 1.261-1.649.519 0 1.07.345 1.117 1.004.052.694-.319 1.046-.788 1.493-1.157 1.1-1.179 1.633-1.173 2.842h1.643c-.01-.544.025-.986.766-1.785.555-.598 1.245-1.342 1.259-2.477.008-.758-.233-1.409-.701-1.882z"/></svg>
               <nuxt-link to="/Help"> Help</nuxt-link>
                </button>
                 <button class="active flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 12h10v1h-10v-1zm7.816-3h-7.816v1h9.047c-.45-.283-.863-.618-1.231-1zm-7.816-2h6.5c-.134-.32-.237-.656-.319-1h-6.181v1zm13 3.975v2.568c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h9.5c.312-.749.763-1.424 1.316-2h-12.816v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-3.886c-.623.26-1.297.421-2 .475zm4-6.475c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2.156-.882l-.696-.696-2.116 2.169-.992-.941-.696.697 1.688 1.637 2.812-2.866z"/></svg> 
                <!-- <nuxt-link to="/cedula"> Community Tax CertificateCTC/ CEDULA</nuxt-link> -->
                <nuxt-link to="/cedula">CEDULA</nuxt-link>
                </button>
        </nav>
        </div>
        <div class="w-1/2 px-10 pl-64">
            <modal />
    </div>
    </div>
   <div class="mb-4 pb-16 bg-white font-mono shadow-2xl">
        <div class="flex">
          <h1 class="text-lg font-bold px-10 py-10"> Community Tax CertificateCTC/ CEDULA</h1>
          <h1 class="text-lg font-bold pl-64 ml-64 py-10"> New Cedula - Individual</h1>
        </div>
      <div class="bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Firstname">
      <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
     <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Middle Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="MiddleName">
    <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Lastname">
    <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Tax Payer Account No.
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text">
    <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        Address
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Firstname">
      <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
     <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Sex
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="MiddleName">
    <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Civil Status
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Lastname">
    <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        Citizenship
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Firstname">
      <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
     <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        ACR No. (if alien)
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="MiddleName">
    <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Place of Birth
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Lastname">
    <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Date of Birth
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text">
    <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        Profession/Occupation Business
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Firstname">
      <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
     <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
       Height
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="MiddleName">
    <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Weight
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Lastname">
    <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Residence Tax Due
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text">
    <p class="text-red text-xs italic">Please fill out this field.</p>
    </div>
  </div>
<table class="table-fixed">
                     <tbody class="text-base">
                       <th>
                         ADDITIONAL RESIDENCE TAX on the following items owned or earned in the Philippines (Tax not exceeded ₱5,000.00)
                       </th>
                       <th>
                         TAXABLE AMOUNT
                       </th>
                       <th>
                         CEDULA AMOUNT
                       </th>
                        <tr class="bg-gray-100">
                        <td class="border px-4 py-2">1.) Income from Real Property (₱1.00 for every ₱1.000.00)</td>
                        <td class="border px-4 py-2"></td>
                        <td class="border px-4 py-2"></td>
                        </tr>
                        <tr>
                        <td class="border px-4 py-2">2.) Gross Receipts or Earnings derived from Business during the preceeding year (₱1.00 for every ₱1,000.00)</td>
                        <td class="border px-4 py-2"></td>
                        <td class="border px-4 py-2"></td>
                        </tr>
                        <tr class="bg-gray-100">
                        <td class="border px-4 py-2">3.) Salaries or Gross Receipts or earnings derived from exercise of profession or pursuit of any occupation (₱1.00 for every ₱1,000.00)</td>
                        <td class="border px-4 py-2"></td>
                        <td class="border px-4 py-2"></td>
                        </tr>
                        <tr>
                        <td class="border px-4 py-2">TOTAL (+₱5 Basic Amount)</td>
                        <td class="border px-4 py-2">₱ 0.00</td>
                        <td class="border px-4 py-2">₱ 5.00</td>
                        </tr>
                        <tr class="bg-gray-100">
                        <td class="border px-4 py-2">INTEREST (6%)</td>
                        <td class="border px-4 py-2"></td>
                        <td class="border px-4 py-2">₱ 0.30</td>
                        </tr>
                        <tr>
                        <td class="border px-4 py-2">TOTAL AMOUNT PAID</td>
                        <td class="border px-4 py-2"></td>
                        <td class="border px-4 py-2">₱ 5.30</td>
                        </tr>
                     </tbody>
                </table>
  <div class="relative ml-64 pl-64">
  <button href="#" @click="back()" class=" text-md transition duration-500 ease-in-out text-sm px-4 py-2 leading-none text-black hover:text-white bg-white hover:bg-green-700 rounded mt-4 lg:mt-0 transform hover:-translate-y-1 hover:scale-110">Cancel</button>
  <button href="#" @click="UpdateSubmit ()" class=" text-md transition duration-500 ease-in-out text-sm px-4 py-2 leading-none text-white hover:text-white bg-green-500 hover:bg-green-700 rounded mt-4 lg:mt-0 transform hover:-translate-y-1 hover:scale-110">Submit</button>
  </div>
</div>
    </div> 

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
