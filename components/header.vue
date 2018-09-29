<template>
	<header>
	    <div class="wrap-header-info">
	        <div class="main-width">
	            <div class="row no-gutters">
	                <div class="col-lg-6 col-md-6 col-sm-12">
	                    <p class="time">September 28, 2018</p>
	                </div>
	                <div class="col-lg-6 col-md-6 col-sm-12">
	                    <ul>
	                        <li>
	                            <a href="#" title="ENG">
	                                <i class="fa fa-search" aria-hidden="true"></i>
	                            </a>
	                            <form method="post" action="" style="display: none;">
	                                <input type="text" name="keyword" placeholder="Keywords" required="">
	                            </form>
	                        </li>
	                        <li>
	                            <a href="#" title="ENG">
	                                ENG
	                            </a>
	                        </li>
	                        <li>
	                            <a href="/contact" title="Contact">
	                                Contact
	                            </a>
	                        </li>
	                        <li>
	                            <a href="/advertise" title="advertise">
	                                Advertise
	                            </a>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	    </div>
	    <div class="wrap-header">
	        <div class="main-width">
	            <div class="row no-gutters">
	                <div class="col-lg-2 col-md-2 col-sm-12">
	                    <a href="/" title="Logo">
	                        <img src="/images/logo.png" height="45" title="Logo" alt="Logo">
	                    </a>
	                </div>
	                <div class="col-lg-10 col-md-10 col-sm-12">
	                	<menu>
							<div class="wrap-menu">
								<div class="">
									<div class="c-menu-mobile">
										<a class="animateddrawer" id="ddsmoothmenu-mobiletoggle" href="https://iholding.io/#" style="display: none;">
											<span></span>
										</a>
									</div>
									<div id="smoothmenu1" class="ddsmoothmenu" style="display: block;">
										<ul>
											<li v-for="data in categories"><a :href="'/category/' + data.link">{{ data.name }}</a>
												<ul v-if="data.child && data.child.length > 0">
													<li v-for="data1 in data.child"><a :href="'/category/' + data1.link">{{ data1.name }}</a></li>
												</ul>
											</li>
										</ul>
										<div class="clear-main"></div>
									</div>
									<div class="clear-main"></div>
								</div>
							</div>
						</menu>
	                </div>
	            </div>
	        </div>
	    </div>
	</header>
</template>

<script>
export default {
	props: ['categories'],
    mounted : function () {
    	$("#document").ready(function () {
    		ddsmoothmenu.init({
			    mainmenuid: "smoothmenu1",
			    orientation: 'h',
			    classname: 'ddsmoothmenu',
			    contentsource: "markup"
			});
    	})
    }
}
</script>