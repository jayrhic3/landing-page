<template>
    <div class="px-2 py-2">
         <nav class="tabs help-tabs flex flex-col sm:flex-row">
             <ul data-menu class="md:flex hidden flex-wrap items-center justify-start">
            <li :class="[ lang === 'profile' ? 'is-active' : '']">
                <nuxt-link to="/profile" class="px-2 py-2 bor"> Profile</nuxt-link>
            </li><li :class="[ lang === 'application' ? 'is-active' : '']">
                <a @click="lang='application'"><nuxt-link to="/transaction" class="px-2 py-2">Application</nuxt-link></a>
            </li><li :class="[ lang === 'help' ? 'is-active' : '']">
               <a @click="lang='help'"> <nuxt-link to="/Help" class="px-2 py-2"> Help</nuxt-link></a>
                </li>
             </ul>
        </nav>
<div class="box help-content">
                    <code v-if="lang ==='cront'">
                        {{monitor.schedule}} your_script.sh && curl -fsS --retry 3 {{monitor.url_code}>
                        /dev/null
                    </code>
                    <code v-if="lang ==='php'">
                        file_get_contents({{monitor.url_code}});
                    </code>
                    <code v-if="lang ==='bash'">
                        curl --retry 2 {{monitor.url_code}}
                    </code>
                    <code v-if="lang ==='python'">
                        # using urllib2:
                        import urllib2
                        urllib2.urlopen("{{monitor.url_code}}")
                    </code>
                    
                </div>
    </div>
</template>
<script>
    export default {
        name: 'HelpComponent',
        data() {
            return {
                monitor: {
                },
                lang: 'profile',
            }
        },
    }
</script>
<style lang="css" scoped>
    .help-content {
        background-color: white !important;
    }
    .help-tabs {
        margin-bottom: 10px !important;
    }
    .tabs li.is-active a {
        border-bottom-color: #000000;
        color: rgb(33, 167, 89);
        border-bottom: 3px solid;
        font-weight: bold;
        padding: 1rem;
    }
    code, pre {
        color: #1b1e21 !important;
        background-color: white !important;
    }
</style>