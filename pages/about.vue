<template>
<div>
  <Navbar />

    <div class="bg-green-700">
      <div class="container2">

      </div>
    </div>
    <div class="back h-full">
    <div class="text-white text-center">
      <div class="container3">
        <div class="text-6xl font-bold pt-10">About</div>
        <div class="text-lg">City of Mati Local Government System</div>
      </div>
    </div>
    </div>
    <div class="h-full">
    <div class="text-white text-center">
      <div class="container4">
        <div class="w-1/2 text-white text-left h-full" >
          <img src="~assets/images/gadgets.png" />
        </div>
        <div class="w-1/2 text-white h-full ml-10" >
          <div class="-ml-10  text-left text-green-700 pr-24"> 
              <p class="text-3xl">Making Smart Cities Happen</p>
              <p class="text-base py-3">City of Mati Local Government System is a software solution designed and developed by DevCodic. LOGOS is made to empower Local Government Units to digitally transform and advance cities, municipalities, and baranggays to a self-reliant community, known as Smart City. By providing more digital accessibility to key city services and infrastructures such as transportation, electricity, water, healthcare, and more, LOGOS enables Smart</p>
              <p class="text-base py-3">Cities like yours to actively engage with its citizens and their wellbeing. This enhances the city’s performance, increase the attractiveness of the city, and may generate to new business opportunities in the long run. Pursuant to Republic Act 11032, an act promoting Ease of Doing Business and Efficient Delivery of Government Services. We are dedicated to effectively and efficiently deliver our utmost service to government offices and all the more towards improving the quality lives of every Filipino citizens.</p>
          </div>
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
  min-height: 13vh;
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
  min-height: 70vh;
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
