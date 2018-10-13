<template>
	<div>
		<iheader :categories="categories"/>
		<section>
		    <div class="wrap-content">
				<div class="text-center" style="padding: 0 0 15px 0;">
				    <a href="https://bit.ly/2OCvHx7" target="_blank">
				        <img src="images/ads/v1/Banner-Top.gif">
				    </a>
				</div>
				<div class="wrap-top-news" v-if="lastest && lastest.length > 0">
					<div class="main-width">
						<div class="wrap-content-slide">
					        <div class="wrap-content-slide-left">
					            <div class="b-display-content">
					                <a :href="'/post/' + lastest[0].link" :title="lastest[0].name">
					                    <div class="bg-rgb"></div>
					                </a>
					                <div class="info-slide">
					                    <div class="author-time">
					                        <span class="category">
					                            <a :href="'/category' + lastest[0].category.link" :title="lastest[0].category.name">{{ lastest[0].category.name }}</a>
					                        </span>
					                        <span>- <i class="fa fa-clock-o" aria-hidden="true"></i> {{ lastest[0].publish_at | moment("dddd, DD-MM-YYYY HH:mm") }}</span>
					                    </div>
					                    <a :href="'/post/' + lastest[0].link" :title="lastest[0].name" class="font-bold titlesite">{{ lastest[0].name }}</a>
					                </div>
					                <a :href="'/post/' + lastest[0].link" :style="'width: 100%;height: 371px;background-size:cover;background-position:center;background-image:url('+IMAGE_URL + lastest[0].images+')'" class="image" :title="lastest[0].name" :alt="lastest[0].name">
					                    <!-- <img :src="IMAGE_URL + lastest[0].images"> -->
					                </a>
					            </div>
					        </div>

					        <div class="wrap-content-slide-right">
					            <div v-for="data,key in lastest" v-if="key != 0" :class="'b-display-content topnew' + key">
					                <a :href="'/post/' + data.link">
					                    <div class="bg-rgb1"></div>
					                </a>
					                <div class="info-slide">
					                    <a :href="'/post/' + data.link" :title="data.name" class="font-bold">{{ data.name }}</a>
					                </div>
					                <a :href="'/post/' + data.link" :title="data.name">
					                    <img :src="IMAGE_URL + data.images" :title="data.name">
					                </a>
					            </div>
					        </div>

					    </div>
					</div>
				</div>
				<div class="main-width" v-if="pressReleases && pressReleases.length > 0">
				    <div class="wrap-releases">
				        <div class="title-releases">
				            <a href="javascript:void(0);" title="Press Releases">
				                Press Releases
				            </a>
				        </div>
				        <ul>
				            <li v-for="data in pressReleases">
				                <div class="wrap-content-releases">
				                    <a :href="'/post/' + data.link" :title="data.name">
			                    		<div :style="'float:left;margin-right:5px;width: 100px;height: 82px;background-size:cover;background-position:center;background-image:url('+IMAGE_URL + data.images+')'" class="image" :title="data.name" :alt="data.name">
			                    		</div>
				                    </a>
				                    <p class="text-sponsored">Sponsored</p> <a :href="'/post/' + data.link" :title="data.name">{{ data.name }}</a>
				                </div>
				            </li>
				        </ul>
				    </div>
				</div>
				<div class="main-width">
				    <div class="wrap-content-two-box">
						<div class="content-two-box-left">
						    <div class="b-title-one">
						        <a href="/category/analysis" title="Analysis" class="font-bold">
						            <i class="fa fa-star" aria-hidden="true"></i>
						            Analysis </a>
						    </div>
						    <div class="wrap-list-data-one">
						        <ul>
						            <li v-for="data in analysis">
						                <div class="wrap-content-data-one">
						                    <div class="w-img-two img-outer">
						                        <a :href="'/post/' + data.link" :title="data.name">
						                        	<div :style="'float:left;margin-right:5px;width: 250px;height: 166px;background-size:cover;background-position:center;background-image:url('+IMAGE_URL + data.images+')'"></div>
						                        </a>
						                    </div>
						                    <div class="author-time">
						                        <span class="category">
						                            <a href="/category/analysis" title="Analysis">
						                                Analysis </a>
						                        </span>
						                        <span>- <i class="fa fa-clock-o" aria-hidden="true"></i> {{ data.publish_at | moment("dddd, DD-MM-YYYY HH:mm") }}</span>
						                    </div>
						                    <h3>
						                        <a :href="'/post/' + data.link" :title="data.name">{{data.name}}</a>
						                    </h3>
						                    <div class="shortdes">{{data.shortdes}}</div>
						                </div>
						            </li>
						        </ul>
						    </div>
						</div>
						<isidebar :coinData="coinData" />
				    </div>
				    <div class="wrap-content-all-box">
				        <div class="b-title-two">
				            <a href="" title="" class="font-bold">
				                <i class="fa fa-paperclip" aria-hidden="true"></i>
				                All News
				            </a>
				        </div>
						<div class="wrap-list-data-two" id="return_ajax_product">
					    <ul>
					        <li v-for="data,key in all">
								<!-- Ads -->
					            <div v-if="adsPossition.indexOf(key+1) != -1" class="text-center" style="padding: 0 0 0px 0;">
					                <a href="https://bit.ly/2LNjUPm" target="_blank">
					                    <img src="images/ads/v1/AllNew1.gif">
					                </a>
					            </div>
					            <!-- News -->
					            <div v-else class="wrap-content-data-two">
					                <div class="w-img-two img-outer" style="height: 200px;overflow: hidden;">
					                    <a :href="'/post/' + data.link" :title="data.name">
					                        <img class="image" :src="IMAGE_URL + data.images" :title="data.name">
					                    </a>
					                </div>
					                <div class="info-data">
					                    <h3>
					                        <a :href="'/post/' + data.link" :title="data.name">{{data.name}}</a>
					                    </h3>
					                    <div class="shortdes">{{data.shortdes.substring(1,200)}}</div>
					                    <div class="author-time">
					                        <span class="category">
					                            <a :href="'/category/' + data.category.link" :title="data.category.name">{{ data.category.name }}</a>
					                        </span>
					                        <span>- <i class="fa fa-clock-o" aria-hidden="true"></i> {{ data.publish_at | moment("dddd, DD-MM-YYYY HH:mm") }}</span>
					                    </div>
					                </div>
					            </div>
					        </li>
					    </ul>
					</div>
				    </div>
				</div>
				<div id="loadmore-home" class="cusor-load" style="margin-top: 35px;">
				    <button class="b-loadmore" @click="loadMore">
				        View more
				    </button>
				    <div class="load-more">
				        <img src="images/load-more.png" title="Load more" alt="Load more">
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
			title: this.setting.title,
			meta: [
				{name: 'description', content: this.setting.meta_des }
			]
		}
	},
   	asyncData : async function () {
		let res = await axios.get('/getHomeData')
		let categoryRes = await axios.get('/getCategory')
		let coinDataRes = await axios.get('https://api.coinmarketcap.com/v2/ticker/?limit=5')
		let settingRes = await axios.get('/getSetting')
	    return {
    		API_URL : config.API_URL,
    		IMAGE_URL : config.IMAGE_URL,
        	adsPossition: [2,8],
        	page: 0,
	    	lastest : res.data.lastest,
	    	pressReleases: res.data.pressReleases,
	    	analysis: res.data.analysis,
	    	all: res.data.all,
	    	categories: categoryRes.data.data,
	    	coinData: coinDataRes.data.data,
	    	setting: settingRes.data.data
	    }
	},
    methods: {
    	loadMore: async function (event) {
    		var _this = this;
    		$(event.target).waitMe();
    		try {
	    		let res = await axios.get('/getMorePost/' + (_this.page + 1));
	    		_this.all = _this.all.concat(res.data.data);
	    		$(event.target).waitMe('hide');
	    		_this.page++;
	    	} catch (e) {
	    		console.log(e);
	    	}
    	}
    }
}
</script>