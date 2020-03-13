<template>
    <div><button class="bg-green-500 rounded px-2 py-2" @click="toggleModal"> Modal </button>
        <div v-if="modal" @click.self="toggleModal" class="w-screen fixed z-50 pin bg-smoke -mt-64 ">
            <div class="flex justify-center " data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease">
                <div class="w-2/5 cursor-pointer border bg-gray-200 rounded flex flex-col justify-center items-center text-center p-6 ">
                    <span class="flex text-2xl font-bold text-gray-900">
                                <img class="h-10" src="@/assets/svg/icon-search.svg" /> Select Transanction</span>
                    <div class="flex pt-5">
                            <div class="px-2 py-2 m-2 bg-gray-400 shadow-md transform hover:-translate-y-1 hover:scale-110">
                                <img class="h-24" src="@/assets/images/cityofmati1.png" />
                            </div>
                            <div class="px-2 py-2 m-2 bg-gray-400 shadow-md transform hover:-translate-y-1 hover:scale-110">
                                <img class="h-24" src="@/assets/images/cityofmati1.png" />
                            </div>
                    </div>
                    <div class="flex">
                            <div class="px-2 py-2 m-2 bg-gray-400 shadow-md transform hover:-translate-y-1 hover:scale-110">
                                <img class="h-24" src="@/assets/images/cityofmati1.png" />
                            </div>
                            <div class="px-2 py-2 m-2 bg-gray-400 shadow-md transform hover:-translate-y-1 hover:scale-110">
                                <img class="h-24" src="@/assets/images/cityofmati1.png" />
                            </div>
                    </div>
                    <div class="flex">
                            <div class="px-2 py-2 m-2 bg-gray-400 shadow-md transform hover:-translate-y-1 hover:scale-110">
                                <img class="h-24" src="@/assets/images/cityofmati1.png" />
                            </div>
                            <div class="px-2 py-2 m-2 bg-gray-400 shadow-md transform hover:-translate-y-1 hover:scale-110">
                                <img class="h-24" src="@/assets/images/cityofmati1.png" />
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