<template>
	<div>
		<iheader :categories="categories"/>
		<section v-if="info">
		    <div class="wrap-content-page">
		        <div class="b-title-category">
		            <div class="main-width">
		                <h1 class="font-bold">{{info.name}}</h1>
		            </div>
		        </div>
		        <div class="main-width">
		            <div class="wrap-content-two-box">
		                <div class="content-two-box-left">
		                    <div class="wrap-list-data-one">
		                        <ul id="return_ajax_product">
		                            <li v-for="data in info.post">
		                                <div class="wrap-content-data-one">
		                                    <div class="w-img-two img-outer">
		                                        <a :href="'/post/' + data.link" :title="data.name">
		                                        	<div style="width: 250px;height: 166px;overflow: hidden;float: left;">
		                                        		<img class="image" :src="API_URL + '/postThumb/' + data.images" :title="data.name" :alt="data.name">
		                                        	</div>
		                                        </a>
		                                    </div>
		                                    <div class="author-time">
		                                        <span><i class="fa fa-clock-o" aria-hidden="true"></i> {{ data.publish_at | moment("dddd, DD-MM-YYYY HH:mm") }}</span>
		                                    </div>
		                                    <h3>
		                                        <a :href="'/post/' + data.link" :title="data.name">{{data.name}}</a>
		                                    </h3>
		                                    <div class="shortdes" style="height: 80px;overflow: hidden;">{{ data.shortdes }}</div>
		                                </div>
		                            </li>
		                        </ul>
		                    </div>
		                    <div id="loadmore-category" class="cusor-load">
		                        <button class="b-loadmore" @click="loadMore">
		                        View more
		                        </button>
		                        <div class="load-more">
		                            <img src="/images/load-more.png" title="Load more" alt="Load more">
		                        </div>
		                    </div>
		                </div>
		                <isidebar :coinData="coinData" />
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
            title: this.info.name + " | " + this.setting.title,
            meta: [
                {name: 'description', content: this.setting.meta_des }
            ]
        }
    },
    asyncData : async function ({params}) {
    	let res = await axios.get('/getCategoryInfo/' + params.query); 
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
    },
    methods: {
    	loadMore: async function (event) {
    		var _this = this;
    		$(event.target).waitMe();
    		try {
	    		let res = await axios.get('/getMorePostInCategory/' + _this.info.id + '/' + (_this.page + 1));
	    		_this.info.post = _this.info.post.concat(res.data.data);
	    		$(event.target).waitMe('hide');
	    		_this.page++;
	    	} catch (e) {
	    		console.log(e);
	    	}
    	}
    }
}
</script>