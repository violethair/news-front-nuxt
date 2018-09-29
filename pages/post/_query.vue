<template>
	<div>
		<iheader :categories="categories"/>
		<section>
		    <div class="wrap-content-page" v-if="info">
		        <div class="main-width">
		            <div class="wrap-parent-catrgory">
		                <ul>
		                    <li class="parent">
		                        <a href="/" title="Home">Home</a>
		                    </li>
		                    <li class="ic">
		                        <i class="fa fa-angle-right" aria-hidden="true"></i>
		                    </li>
		                    <li class="parent">
		                        <a :href="'/category/' + info.category.link" :title="info.category.name">{{info.category.name}}</a>
		                    </li>
		                    <li class="ic">
		                        <i class="fa fa-angle-right" aria-hidden="true"></i>
		                    </li>
		                    <li class="child">
		                        <div class="line-bread">
		                            <a :href="'/post/' + info.link" :title="info.name">{{ info.name }}</a>
		                        </div>
		                    </li>
		                </ul>
		            </div>
		            <div class="wrap-content-two-box">
		                <div class="content-two-box-left">
		                    <div class="wrap-detail-post">
		                        <div class="position-relative" id="share-run">
		                            <div class="b-share">
		                                <div class="wrap-share-link">
		                                    <ul>
		                                        <li style="display: none;">
		                                            <div class="view-post">
		                                                <i class="fa fa-eye" aria-hidden="true"></i>
		                                                <p>1</p>
		                                            </div>
		                                        </li>
		                                        <li>
		                                            <div class="comment-post">
		                                                <i class="fa fa-comment" aria-hidden="true"></i>
		                                            </div>
		                                        </li>
		                                        <li>
		                                            <div class="back-post">
		                                                <i class="fa fa-reply" aria-hidden="true"></i>
		                                            </div>
		                                        </li>
		                                    </ul>
		                                </div>
		                            </div>
		                        </div>
		                        <div class="padding-content-detail">
		                            <h1 class="title font-bold">{{info.name}}</h1>
		                            <div class="bd-auttime">
		                                <div class="author-time">
		                                    <span class="category">
												<a :href="'/category/' + info.category.link" :title="info.category.name">{{ info.category.name }}</a>
											</span>
		                                    <span>- 
												<i class="fa fa-clock-o" aria-hidden="true"></i> {{ info.publish_at | moment("dddd, DD-MM-YYYY HH:mm") }}
											</span>
		                                </div>
		                            </div>
		                            <div class="content-post" v-html="info.content">
		                                <div class="clear-main"></div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		               	<isidebar :coinData="coinData" />
		            </div>
		        </div>
		    </div>
		    <div class="wrap-related" v-if="info && info.relate">
		        <div class="main-width">
		            <div class="title-related">Related News</div>
		            <div class="wrap-list-data-three">
		                <ul>
		                    <li v-for="data in info.relate">
		                        <div class="wrap-content-data-two">
		                            <div class="w-img-two img-outer">
		                                <a :href="'/post/' + data.link" :title="data.name">
		                                    <img class="image" :src="API_URL + '/postThumb/' + data.images" :title="data.name" :alt="data.name">
		                                </a>
		                            </div>
		                            <div class="info-data">
		                                <h3>
										<a :href="'/post/' + data.link" :title="data.name">{{ data.name }}</a>
										</h3>
		                                <div class="author-time">
	                                    <span>
											<i class="fa fa-clock-o" aria-hidden="true"></i> {{ data.publish_at | moment("dddd, DD-MM-YYYY HH:mm") }}
										</span>
		                                </div>
		                            </div>
		                        </div>
		                    </li>
		                </ul>
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
import config from '@/config.js'
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
            title: this.info.name,
            meta: [
                {name: 'description', content: this.setting.meta_des }
            ]
        }
    },
    asyncData : async function ({params}) {
    	let res = await axios.get('/getPostInfo/' + params.query); 
        let categoryRes = await axios.get('/getCategory')
        let settingRes = await axios.get('/getSetting')
        let coinDataRes = await axios.get('https://api.coinmarketcap.com/v2/ticker/?limit=5')
        return {
            API_URL : config.API_URL,
            info: res.data.data,
            categories: categoryRes.data.data,
            setting: settingRes.data.data,
            coinData: coinDataRes.data.data,
        }
    }
}
</script>