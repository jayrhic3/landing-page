<template>
<div>
  <nav :class="{ 'scrolled': !view.atTopOfPage }"  class="duration-500 ease-in-out bg-transparent fixed flex w-full items-center justify-between flex-wrap m-auto top-0 animated">
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
      <a class="text block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
        <nuxt-link to="/about">About</nuxt-link>
      
      <button class="transition duration-500 ease-in-out inline-block text-sm px-4 py-2 leading-none rounded text-gray-400 hover:text-white bg-green-900 border-green-500 border hover:bg-transparent mt-4 lg:mt-0 transform hover:-translate-y-1 hover:scale-110  text-lg" @click="toggleModal1">Login</button>
      <button class="transition duration-500 ease-in-out inline-block text-sm px-4 py-2 leading-none rounded text-white hover:text-white bg-green-500 hover:bg-green-700 mt-4 lg:mt-0 transform hover:-translate-y-1 hover:scale-110  text-lg" @click="toggleModal">Sign up now</button>
		</a>
	</div>
  </div>
  </nav>

  <div v-if="modal" @click.self="toggleModal" class="w-screen fixed z-50 pin bg-smoke">
			<div class="flex justify-center px-6 my-5 md:my-56 lg:my-24" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<!-- Col -->
					<div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg beck">
					
					</div>
					<!-- Col -->
					<div class="w-full lg:w-7/12 bg-gray-900 p-5 rounded-lg lg:rounded-l-none">
            <span @click="toggleModal" class="absolute right-0 px-4 lg:px-56">
              <svg class="h-12 w-12 text-white hover:text-gray-100" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
						<h3 class="pt-4 text-2xl text-center text-white">Create an Account!</h3>
						<form class="px-8 pt-6 pb-8 mb-4 bg-gray-900 rounded">
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-green-300" for="firstName">
										First Name
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										placeholder="First Name"
									/>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-green-300" for="lastName">
										Last Name
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-green-300" for="email">
									Email
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
								/>
							</div>
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-green-300" for="password">
										Password
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-900 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="******************"
									/>
									<p class="text-xs italic text-red-500">Please choose a password.</p>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-green-300" for="c_password">
										Confirm Password
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-900 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="c_password"
										type="password"
										placeholder="******************"
									/>
								</div>
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-green-700 rounded-full hover:bg-green-900 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Register Account
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a
									class="inline-block text-sm text-green-700 align-baseline hover:text-green-400"
									href="#"
								>
									Forgot Password?
								</a>
							</div>
							<div class="text-center">
								<a
									class="inline-block text-sm text-green-700 align-baseline hover:text-green-400"
									href="./index.html"
								>
									Already have an account? Login!
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!--Modal #2 -->
		<div v-if="modal1" @click.self="toggleModal1" class="w-screen fixed z-50 pin bg-smoke">
			<div class="flex justify-center px-6 my-5 mb-64 md:my-56 lg:my-24" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<!-- Col -->
					<div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg beck">
					
					</div>
					<!-- Col -->
					<div class="w-full lg:w-7/12 bg-gray-900 p-5 rounded-lg lg:rounded-l-none">
            <span @click="toggleModal1" class="absolute right-0 px-4 lg:px-56">
              <svg class="h-12 w-12 text-white hover:text-gray-100" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
						<h3 class="pt-4 text-2xl text-center text-white">Login to your Account</h3>
						
						<form class="px-8 pt-6 pb-8 mb-4 gray-900 rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-green-300" for="username">
									Username
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
									placeholder="Username"
								/>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-green-300" for="password">
									Password
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
								/>
								<p class="text-xs italic text-red-500">Please choose a password.</p>
							</div>
							<div class="mb-4">
								<input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
								<label class="text-sm text-green-300" for="checkbox_id">
									Remember Me
								</label>
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-green-700 rounded-full hover:bg-green-900 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Sign In
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a
									class="inline-block text-sm text-green-700 align-baseline hover:text-green-400"
									href="./register.html"
								>
									Create an Account!
								</a>
							</div>
							<div class="text-center">
								<a
									class="inline-block text-sm text-green-700 align-baseline hover:text-green-400"
									href="./forgot-password.html"
								>
									Forgot Password?
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
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