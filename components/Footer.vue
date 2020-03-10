<template>
    <div class="bg-gray-900 py-10 px-10 jay">
        <div class="flex mb-4">
            <div class="w-1/2  h-12">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <img class="h-10 md:h-24 lg:h-24" src="~assets/images/cityofmati.png" alt="Tailwind">
                </div>
            </div>
            <div class="w-1/2 text-gray-500 h-12 jay">
                <div class="flex flex text-center -mr-12 md:mr-0 lg:mr-0">
                    <div class="w-1/6  h-12"></div>
                    <div class="w-1/6  h-12"></div>
                    <div class="w-1/6  h-12"></div>
                    <div class="w-1/6 hover:underline h-12 "><a href="#">About</a></div>
                    <div class="w-1/6 hover:underline h-12 hidden md:block lg:block"><a href="#">Login</a></div>
                    <div class="w-1/6 hover:underline h-12 hidden md:block lg:block"><a href="#">Sign up</a></div>
                </div>
            </div>
        </div>
        <div class="flex md:mb-4 lg:mb-4">
            <div class="w-1/2  h-12"></div>
            <div class="w-1/2  h-12">
                <div class="flex mb-4">
                    <div class="w-1/3  h-12"></div>
                    <div class="w-1/3  h-12"></div>
                    <div class="w-1/3  h-12">
                        <div class="flex mb-4">
                            <div class="w-1/3  h-12">
                                <a href="#" class="icoFacebook" title="Facebook"><img class="hidden md:block lg:block h-4 md:h-10 lg:h-10" src="~assets/images/facebook-official.png" /></a>
                            </div>
                            <div class="w-1/3  h-12">
                                <a href="#" class="icoTwitter" title="Twitter"><img class="hidden md:block lg:block hidden h-4 md:h-10 lg:h-10" src="~assets/images/twitter-tile.png" /></a>
                            </div>
                            <div class="w-1/3  h-12">
                                 <a href="#" class="icoLinkedin" title="Linkedin"><img class="hidden md:block lg:block h-4 md:h-10 lg:h-10" src="~assets/images/linkedin-icon.png" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex -mb-32 md:mb-4 lg:mb-4 text-gray-500 jay">
            <div class="w-1/2  h-12"></div>
            <div class="w-1/2 text-right h-12 hidden md:block lg:block">
                © 2020 City of Mati Local Governament System. All Rights Reserved.
            </div>
        </div>
    </div>
</template>

<style>
div.jay {
    overflow-x: hidden;
}

</style>