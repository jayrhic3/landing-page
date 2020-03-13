<template>
    <nav :class="{ 'scrolled': !view.atTopOfPage }"  class="bg-green-900 fixed flex w-full items-center justify-between flex-wrap m-auto top-0 ">
    <div class="flex items-center flex-shrink-0 text-white mr-0 sm:px-2 lg:px-10">
        <nuxt-link to="/"><img class="h-20" src="~assets/images/cityofmati.png" alt="Tailwind"></nuxt-link>
  </div>
    <div @click="isOpen = !isOpen" class="block lg:hidden px-5 text-center">
        <button class="flex items-center px-3 py-2 border rounded text-gray-400 border-white hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
    </div>
    <div :class="isOpen ? 'hidden' : 'block bg-green-900 pb-10 '" class=" w-full block flex-grow lg:flex justify-end mr-10 lg:w-auto px-10">
    <div class="">
      <div class="dropdown inline-block relative cursor-pointer text-white hover:text-green-300">
        <a class="inline-flex items-center ">
            <img src ="~assets/avatar/5.png" class="h-10 mr-2">
          <span class="mr-2">Hello, Maribel</span>
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
        </a>
            <div class="w-1/4 rounded bg-white shadow-2xl dropdown-menu absolute hidden text-gray-900 pt-1 px-24">
                 <div class="-mr-24 py-2 -ml-24 px-5 text-right whitespace-no-wrap  transform hover:-translate-x-1 hover:scale-105 hover:font-bold duration-500 ease-in-out" ><nuxt-link to="#">Dashboard</nuxt-link></div>
                 <div class="-mr-24 py-2 -ml-24 px-5 text-right whitespace-no-wrap  transform hover:-translate-y-1 hover:scale-105 hover:font-bold duration-500 ease-in-out" ><nuxt-link to="/">Settings</nuxt-link></div>
                 <div class="-mr-24 py-2 -ml-24 px-5 text-right whitespace-no-wrap  transform hover:-translate-y-1 hover:scale-105 hover:font-bold duration-500 ease-in-out" ><nuxt-link to="/">Logout</nuxt-link></div>
            </div>
      </div>
	</div>
  </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
      view: {
            atTopOfPage: true
        },
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
},
methods: {
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

nav.scrolled {
    @apply bg-green-900;
    border-bottom: 0px;
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>