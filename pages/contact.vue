<template>
	<div>
		<iheader :categories="categories"/>
		<section>
			<div class="wrap-content-contact" v-if="setting">
			    <div class="main-width">
			        <div class="padd-contact">
			            <div class="row no-gutters">
			                <div class="col-lg-6 col-md-6 col-sm-12">
			                    <div class="wrap-content-view">
			                        <div class="title-contact">
			                            About us
			                        </div>
			                        <div class="content-view" v-html="setting.contactinfo"></div>
			                    </div>
			                </div>
			                <div class="col-lg-1 col-md-1 col-sm-12">

			                </div>
			                <div class="col-lg-5 col-md-5 col-sm-12">
			                    <div style="height: 60px;"></div>
			                    <img src="/images/ic-contact.jpg" width="350"/>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
			<div class="wrap-form-contact">
			    <div class="main-width">
			        <div class="padd-form-contact">
			            <div class="title-form-contact">Contact us for help</div>
			            <p class="shortdes-contact">We hope our site works for you. If you have any comments or suggestions, please
			                feel free to contact us!</p>
			            <div class="bt-email-contact">{{ setting.email }}</div>
			            <div class="follow-contact">
			                <div class="wrap-category">
			                    <label>Follow us</label>
			                </div>
			                <div class="wrap-link-share-contact">
			                    <ul>
			                        <li>
			                            <a :href="setting.tiwter"
			                               target="_blank">
			                                <i class="fa fa-twitter" aria-hidden="true"></i>
			                            </a>
			                        </li>
			                        <li>
			                            <a :href="setting.facebook"
			                               target="_blank">
			                                <i class="fa fa-facebook-official" aria-hidden="true"></i>
			                            </a>
			                        </li>
			                        <li>
			                            <a :href="setting.youtube"
			                               target="_blank">
			                                <i class="fa fa-youtube-play" aria-hidden="true"></i>
			                            </a>
			                        </li>
			                        <li>
			                            <a :href="setting.instagram"
			                               target="_blank">
			                                <i class="fa fa-instagram" aria-hidden="true"></i>
			                            </a>
			                        </li>
			                        <li>
			                            <a :href="setting.reddit"
			                               target="_blank">
			                                <i class="fa fa-reddit-alien" aria-hidden="true"></i>
			                            </a>
			                        </li>
			                        <li>
			                            <a :href="setting.telegram"
			                               target="_blank">
			                                <i class="fa fa-paper-plane" aria-hidden="true"></i>
			                            </a>
			                        </li>
			                        <li>
			                            <a :href="setting.google"
			                               target="_blank">
			                                <i class="fa fa-google-plus" aria-hidden="true"></i>
			                            </a>
			                        </li>
			                    </ul>
			                </div>
			            </div>

			            <div class="wrap-form-enter">
			                <form method="post" action="">
			                    <div class="row no-gutters">
			                        <div class="col-lg-4 col-md-4 col-sm-12">
			                            <label>Fullname</label><span>*</span>
			                        </div>
			                        <div class="col-lg-4 col-md-4 col-sm-12">
			                            <label>Phone</label><span>*</span>
			                        </div>
			                        <div class="col-lg-4 col-md-4 col-sm-12">
			                            <label>Email</label><span>*</span>
			                        </div>
			                    </div>
			                    <div class="row">
			                        <div class="col-lg-4 col-md-4 col-sm-12">
			                            <input type="text" name="name" class="form-control" required />
			                        </div>
			                        <div class="col-lg-4 col-md-4 col-sm-12">
			                            <input type="text" name="phone" class="form-control" required />
			                        </div>
			                        <div class="col-lg-4 col-md-4 col-sm-12">
			                            <input type="email" name="email" class="form-control" required />
			                        </div>
			                    </div>
			                    <div class="row no-gutters">
			                        <div class="col-lg-12 col-md-12 col-sm-12">
			                            <label>Subject</label>
			                        </div>
			                    </div>
			                    <div class="row no-gutters">
			                        <div class="col-lg-12 col-md-12 col-sm-12">
			                            <input type="text" name="title" class="col-lg-12 col-md-12 col-sm-12 form-control" />
			                        </div>
			                    </div>
			                    <div class="row no-gutters">
			                        <div class="col-lg-12 col-md-12 col-sm-12">
			                            <label>Message</label>
			                        </div>
			                    </div>
			                    <div class="row no-gutters">
			                        <div class="col-lg-12 col-md-12 col-sm-12">
			                            <textarea name="content" class="col-lg-12 col-md-12 col-sm-12 form-control"></textarea>
			                        </div>
			                    </div>
			                    <div class="btsm">
			                        <input type="submit" class="ipsmf" value="Send" />
			                    </div>
			                </form>
			            </div>

			        </div>
			    </div>
			    <img src="images/bg-contact.jpg" style="width: 100%;">
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
			title: "Contact us | " + this.setting.title,
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