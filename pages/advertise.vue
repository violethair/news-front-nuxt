<template>
    <div>
        <iheader :categories="categories"/>
        <section>
            <div class="position-relative">
                <div class="wrap-content-page-advertise">
                    <div class="main-width">
                        <div class="wrap-content-advertise position-relative">
                            <div class="title-advertise">
                                Advertise
                            </div>
                            <div class="email-contact-advertise">
                                Contact us:
                                <span v-if="setting">{{setting.email}}</span>
                            </div>

                            <div class="wrap-content-data-advertise">
                                <p>
                                    Welcome to iholding.io. We hope you have had a great experience on our news website.
                                </p>
                                <p>
                                    If you are looking to introduce or promote your company, product or event, advertising your information on iholding.io in the form of a press release or an ad banner is absolutely a good choice. Below is more information on how to advertise on iholding.io.
                                </p>
                                <div class="order-title-adv-main">
                                    <div class="head-adv">01</div>
                                    <p>Placing a press release on our website:</p>
                                </div>

                                <p>
                                    If you have already got your content written for the press release, please contact us via email iholdingofficial@gmail.com for the quotation to put your content on our website. We will reply to support you as soon as possible.
                                </p>
                                <p>
                                    If you haven’t got the content prepared, we could support you by having our editors to create one based on your information and documents provided. If you are interested, then the content will be put on our website as a press release. Please contact us via email <a href="/contact" title="email" v-if="setting">{{setting.email}}</a> for the quotation in details.
                                </p>

                                <div class="b-img-advertise">
                                    <img src="images/adv1.png" title="Advertise" alt="Advertise" />
                                </div>

                                <div class="order-title-adv-main">
                                    <div class="head-adv">02</div>
                                    <p>Placing an advertisement banner on our website:</p>
                                </div>

                                <p>
                                    * For PC version: We have a variety of positions up to your choice for an ad banner on the PC version. Since most of our viewers are experienced and active in the field of finance and investment, they are familiar with all the terms and concepts in the crypto world thus it is easy for your advertisements to draw their attentions. The following are details about our ad banner display on PC version:
                                </p>
                                <p>
                                    - Top Banner Homepage ( 1000x90px ): With 1 position.
                                </p>
                                <p>
                                    - Left Sidebar Banner Homepage ( 370x280px ): With 2 positions.
                                </p>
                                <p>
                                    - Footer Banner Homepage ( 361x456px ): With 3 positions.
                                </p>

                                <div class="b-img-advertise">
                                    <img src="images/adv2.png" title="Advertise" alt="Advertise" />
                                </div>

                                <p>
                                    * For mobile version: Our IT team always try their best to optimize the system for the best efficiency. Your ad banners will be displayed in suitable positions between our articles to catch the most attention from viewers. The following are details about our ad banner display on mobile version:
                                </p>
                                <p>
                                    - Banner Homepage - All New ( 710x725px ): With 3 positions.
                                </p>
                                <p>
                                    - Banner Homepage - Analysis ( 710x360px ): With 1 position.
                                </p>

                                <div class="b-img-advertise">
                                    <img src="images/adv3.png" title="Advertise" alt="Advertise" />
                                </div>

                                <div class="advertise-footer">
                                    Please contact us via email: <a href="/contact" title="email" v-if="setting">{{setting.email}}</a> for the quotation for an ad banner.
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ifooter :categories="categories" :setting="setting" />
    </div>
</template>

<script>
import iheader from '@/components/header'
import ifooter from '@/components/footer'
import isidebar from '@/components/sidebar'
import config from '../config.js'
import iaxios from 'axios'

var axios = iaxios.create({baseURL: config.API_URL});

export default {
    components : {
        iheader,
        ifooter,
        isidebar
    },
    head : function () {
        return {
            title: "Advertise | " + this.setting.title,
            meta: [
                {name: 'description', content: this.setting.meta_des }
            ]
        }
    },
    asyncData : async function () {
        let categoryRes = await axios.get('/getCategory')
        let settingRes = await axios.get('/getSetting')
        return {
            API_URL : config.API_URL,
            categories: categoryRes.data.data,
            setting: settingRes.data.data
        }
    },
}
</script>