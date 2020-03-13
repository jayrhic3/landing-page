<template>
<div>
  <Navbar />

    <div class="bg-green-900">
      <div class="container2">

      </div>
    </div>
    <div class="back h-full">
    <div class="text-white text-center">
      <div class="container3 shadow-2xl">
        <div class="text-6xl font-bold pt-10">About</div>
        <div class="text-lg">City of Mati Local Government System</div>
      </div>
    </div>
    </div>
    <div class="container4 text-left">
      <div class="block mb-4 md:flex lg:flex">
        <div class="w-full md:w-1/2 lg:w-1/2 ">
          <div class="flex md:flex-row-reverse flex-wrap">
            <img src="~assets/images/gadgets.png" />
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/2 md:h-12 lg:h-12 ">
          <div class="flex md:flex-row-reverse flex-wrap md:-ml-10 lg:-ml-10 text-center md:text-left lg:text-left  text-green-700 md:pr-24 lg:pr-24" >
              <p class="text-lg md:py-3 lg:py-3"><a class="text-left text-3xl md:py-3 lg:py-3">Making Smart Cities Happen</a><br><br>City of Mati Local Government System is a software solution designed and developed by DevCodic. LOGOS is made to empower Local Government Units to digitally transform and advance cities, municipalities, and baranggays to a self-reliant community, known as Smart City. By providing more digital accessibility to key city services and infrastructures such as transportation, electricity, water, healthcare, and more, LOGOS enables Smart</p>
              <p class="text-lg md:py-3 lg:py-3">Cities like yours to actively engage with its citizens and their wellbeing. This enhances the city’s performance, increase the attractiveness of the city, and may generate to new business opportunities in the long run. Pursuant to Republic Act 11032, an act promoting Ease of Doing Business and Efficient Delivery of Government Services. We are dedicated to effectively and efficiently deliver our utmost service to government offices and all the more towards improving the quality lives of every Filipino citizens.</p>
          </div>
        </div>
      </div>
    </div>
    
  <Footer />
</div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
}
</script>

<style>
.container1 {
  margin: 0 auto;
  min-height: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container2 {
  margin: 0 auto;
  min-height: 11vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container3 {
  margin: 0 auto;
  min-height: 30vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container4 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.back {
  background-image: url("~assets/images/about.jpg");
  background-repeat: no-repeat;
}
</style>
