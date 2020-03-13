<template>
<div>
  <nav :class="{ 'scrolled': !view.atTopOfPage }" class="duration-500 ease-in-out bg-green-700 fixed flex w-full items-center justify-between flex-wrap m-auto top-0 animated">
    <div class="flex items-center flex-shrink-0 text-white mr-0 sm:px-2 lg:px-10">
        <nuxt-link to="/"><img class="h-20" src="~assets/images/cityofmati.png" alt="Tailwind"></nuxt-link>
  </div>
    <div @click="isOpen = !isOpen" class="block lg:hidden px-5 text-center">
        <button class="flex items-center px-3 py-2 border rounded text-gray-400 border-white hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
    </div>
    <div :class="isOpen ? 'hidden' : 'block bg-green-900 pb-10 '" class=" w-full block flex-grow lg:flex lg:items-center lg:w-auto px-10">
    <div class="text-sm lg:flex-grow">
      
    </div>
    <div>
      <!-- <a class="text block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
        <nuxt-link to="/about">About</nuxt-link>
       -->
      <!-- <button class="transition duration-500 ease-in-out inline-block text-sm px-4 py-2 leading-none rounded text-gray-400 hover:text-white bg-green-900 border-green-500 border hover:bg-transparent mt-4 lg:mt-0 transform hover:-translate-y-1 hover:scale-110  text-lg" @click="toggleModal1">Logout</button> -->
      <!-- <button class="transition duration-500 ease-in-out inline-block text-sm px-4 py-2 leading-none rounded text-white hover:text-white bg-green-500 hover:bg-green-700 mt-4 lg:mt-0 transform hover:-translate-y-1 hover:scale-110  text-lg" @click="toggleModal">Logout</button> -->
		<!-- </a> -->
     <div class="relative">
        <img class="w-10 h-10 rounded-full"
          src="@/assets/images/avatar.png"
          alt="" />
     </div>
      <div class="dropdown inline-block relative pr-20">
	<button class="bg-green-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
         <svg class="h-4 float-right fill-current text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                  <g>
                    <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                  </g>
                </svg>
	</button>
	<ul class="dropdown-content absolute hidden text-gray-700 pt-1">
		<li>
             <nuxt-link to="/profile" class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Your Profile </nuxt-link></li>
		<li><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Notification</a></li>
      	<li class="dropdown">
          <a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Setting 🠞</a>
          	<ul class="dropdown-content absolute hidden text-gray-700 pl-5 ml-24 -mt-10">
          		<li><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 3-1</a></li>
              	<li><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 3-2</a></li>
            </ul>
      	</li>
		<li> <nuxt-link to="/" class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Logout</nuxt-link></li>
	</ul>
</div>
	</div>
  </div>
  </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
      view: {
            atTopOfPage: true
        },
	  modal: false,
	  modal1: false,
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
},
methods: {
  toggleModal() {
      this.modal = !this.modal
	},
	toggleModal1() {
      this.modal1 = !this.modal1
	},
	// the function to call when the user scrolls, added as a method
    handleScroll(){
        // when the user scrolls, check the pageYOffset
        if(window.pageYOffset>0){
            // user is scrolled
            if(this.view.atTopOfPage) this.view.atTopOfPage = false
        }else{
            // user is at top of page
            if(!this.view.atTopOfPage) this.view.atTopOfPage = true
        }
    }
}
}
</script>

<style>
nav {
    z-index: 10
}
.dropdown:hover > .dropdown-content {
	display: block;
}
nav.scrolled {
    @apply transition;
    @apply bg-green-700;
    border-bottom: 0px;
}

.bg-smoke {
  background-color: rgba(0, 0, 0, 0.8);
}

.beck {
	background-image: url('~assets/images/login1.jpg');
}

.that {
	overflow: auto;
}
</style>