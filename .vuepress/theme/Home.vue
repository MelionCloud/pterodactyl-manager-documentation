<template>
    <div class="home">
        <div class="header section bg-blue text-grey-lightest less-padding emphasize">
            <div class="container z-10">
                <div class="text-center">
                    <div>
                        <img class="max-w-xl w-full inline-block" src="https://cdn.pterodactyl.io/logos/new/pterodactyl_logo_transparent.png" alt="Pterodactyl">
                    </div>
                    <div class="mt-4">
                        <router-link class="btn inline-block" to="/panel/getting_started.html">Let's Get Started!</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="section bg-white">
            <div class="container text-center">
                <h1 class="text-blue mb-4">Pterodactyl Panel</h1>
                <h3 class="border-0 font-normal leading-normal mx-auto" style="max-width: 50rem">
                    PterodactylManager&reg; is a free, open-source extension for Pterodactyl&reg; that allows you to manage your addons and themes from your panel.
                </h3>
                <h3 class="border-0 leading-normal mx-auto mt-4" style="max-width: 50rem">
                    Stop wasting your time on outdated or complicated addon installations. Just drag, drop or click!
                </h3>
                <img class="max-w-lg w-full m-4 inline-block" src="https://cdn.pterodactyl.io/site-assets/mockup-macbook-grey-1.0.png">
            </div>
        </div>
        <div class="section bg-blue text-grey-lightest">
            <div class="container text-center">
                <h1 class="mb-4">Why PterodactylManager&reg;</h1>
                <div class="flex flex-wrap">
                    <div class="feature">
                        <span><i class="icon icon-lock"></i></span>
                        <h3>Compability Checker</h3>
                        <p>No more unsupported addons that break your entire panel. With our integrated compability checker you only install the addons that are working for you.</p>
                    </div>
                    <div class="feature">
                        <span><i class="icon icon-beaker"></i></span>
                        <h3>Update Checker</h3>
                        <p>We integrated an easy way to automaticly update all of your addons and themes to the latest version.</p>
                    </div>
                    <div class="feature">
                        <span><i class="icon icon-anchor"></i></span>
                        <h3>Clean addon structure</h3>
                        <p>To provide the best compability and support for you addons, every addon should be build after our <a href="/developer/guidelines">Developer Guidelines</a>.</p>
                    </div>
                    <div class="feature">
                        <span><i class="icon icon-wallet"></i></span>
                        <h3>Free to use</h3>
                        <p>PterodactylManager is 100% free. To support the project you can buy our addons from the market.</p>
                    </div>
                    <div class="feature">
                        <span><i class="icon icon-browser"></i></span>
                        <h3>User Friendly</h3>
                        <p>Drag and drop as well as one click installations are the future. Don't do the hard work manually.</p>
                    </div>
                    <div class="feature">
                        <span><i class="icon icon-expand"></i></span>
                        <h3>Extendable</h3>
                        <p>We provide you with the best panel extensions right out of the box. Just enable them in the addon manager.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="section bg-white">
            <div class="text-center">
                <h1>Screenshots (to be changed)</h1>
                <div class="screenshots">
                    <slick ref="slick" :options="slickOptions">
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-1.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-1.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-2.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-2.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-3.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-3.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-4.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-4.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-5.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-5.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-6.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-6.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-7.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-7.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-8.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-8.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-9.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-9.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-10.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-10.png">
                        </a>
                        <a href="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-11.png">
                            <img src="https://cdn.pterodactyl.io/site-assets/carousel/screenshot-11.png">
                        </a>
                    </slick>
                </div>
            </div>
        </div>
        <div class="section bg-blue text-grey-lightest">
            <div class="container text-center">
                <h1>Get Started</h1>
                <p class="m-4">Ready to fly on the Pterodactyl?</p>
                <div class="mt-4">
                    <router-link class="btn inline-block" to="/project/introduction.html">About the project</router-link>
                    <a class="btn inline-block" href="https://discord.gg/devsky">Discord</a>
                </div>
            </div>
        </div>
        <div class="section bg-black text-grey-lighter text-sm less-padding">
            <div class="container text-center">
                <div>
                    <img class="h-20" :src="$withBase('logos/banner_logo.png')" alt="pterodactyl banner logo">
                </div>
                <div class="text-left md:flex">
                    <div class="flex-none w-full md:w-1/2 md:pr-12">
                        <p class="my-4">
                            Since 2022 PterodactylManager&reg; helps you to manage your Pterodactyl server.
                        </p>
                        <p class="my-4">
                            We are a team of developers who love to create software.
                        </p>
                    </div>
                    <div class="hidden md:block md:flex-1 md:pr-12">
                        <p><a class="text-grey-lightest" href="https://github.com/MelionCloud">GitHub</a></p>
                        <p><a class="text-grey-lightest" href="/panel/troubleshooting.html">Troubleshooting</a></p>
                    </div>
                    <div class="text-center mt-8 md:flex-1 md:mt-0">
                        <a href="https://discord.gg/pterodactyl" target="_blank" rel="nofollow noopener">
                            <img src="https://cdn.pterodactyl.io/site-assets/discord.png" class="w-3/4">
                        </a>
                    </div>
                </div>
                <div class="footer">PterodactylManager&reg; Copyright &copy; 2022 DevSky.one</div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavLink from './NavLink.vue';
    import Slick from './SlickCarousel.vue';

    export default {
        components: { NavLink, Slick },
        data() {
            return {
                slickOptions: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '0',
                    speed: 1000,
                    autoplay: true,
                    variableWidth: true,
                    arrows: false,
                    dots: true,
                    pauseOnHover: false,
                    pauseOnDotsHover: true,
                },
            }
        },
        computed: {
            data() {
                return this.$page.frontmatter;
            },
            actionLink() {
                return {
                    link: this.data.actionLink,
                    text: this.data.actionText
                };
            }
        },
    };
</script>
