<template>
    <div>
        <button class="flex transition duration-500 ease-in-out -ml-10 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded transform hover:-translate-y-1 hover:scale-110  text-base px-8 py-5" @click="toggleModal"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 12h10v1h-10v-1zm7.816-3h-7.816v1h9.047c-.45-.283-.863-.618-1.231-1zm-7.816-2h6.5c-.134-.32-.237-.656-.319-1h-6.181v1zm13 3.975v2.568c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h9.5c.312-.749.763-1.424 1.316-2h-12.816v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-3.886c-.623.26-1.297.421-2 .475zm4-6.475c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2.156-.882l-.696-.696-2.116 2.169-.992-.941-.696.697 1.688 1.637 2.812-2.866z"/></svg>
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
</template>

<script>
export default {
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
.bg-smoke {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>