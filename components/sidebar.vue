<template>
    <div class="content-two-box-right">
        <aside>
            <div class="b-title-bar-right">
                <label>
                    <i class="fa fa-bar-chart" aria-hidden="true"></i>
                    Select Currency
                </label>
            </div>
            <div class="b-content-char" v-if="coinData">
                <ul v-for="data in coinData">
                    <li>
                        <div class="padd">{{ data.name }}</div>
                    </li>
                    <li>
                        <div class="padd">
                            $ {{data.quotes.USD.price.toFixed(2)}}                   
                        </div>
                    </li>
                    <li>
                        <div class="padd">
                            <span v-if="data.quotes.USD.percent_change_24h < 0" class="down"><i class="fa fa-caret-down" aria-hidden="true"></i> {{data.quotes.USD.percent_change_24h}}%</span>
                            <span v-else class="up"><i class="fa fa-caret-up" aria-hidden="true"></i> {{data.quotes.USD.percent_change_24h}}%</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="b-title-bar-right">
                <label>
                    <i class="fa fa-tint" aria-hidden="true"></i>
                    Hot news
                </label>
            </div>
            <div class="b-content-hotnews">
                    </div>

        <!--    <div class="b-title-bar-right">-->
        <!--        <label>-->
        <!--            <i class="fa fa-envelope-o" aria-hidden="true"></i>-->
        <!--            NewsLetter-->
        <!--        </label>-->
        <!--    </div>-->
        <!--    <div class="b-content-email">-->
        <!--        <img src="--><!--images/email.jpg" title="email" alt="email"/>-->
        <!--        <p>Get the recent popular stories straight into your inbox</p>-->
        <!--        <form method="post" action="--><!--register-email">-->
        <!--            <div class="form-group">-->
        <!--                <input type="email" name="email" class="form-control form-control-lg" placeholder="Enter email" required />-->
        <!--            </div>-->
        <!--            <button type="submit" class="btn btn-primary btn-lg col-lg-12 col-md-12 col-sm-12 regisemail">Subscribe-->
        <!--            </button>-->
        <!--        </form>-->
        <!--    </div>-->

            <!--    Ads right 2-->
        <div class="text-center" style="padding: 0 0 15px 0;">
            <a href="https://bit.ly/2OCvHx7" target="_blank">
                <img src="/images/ads/v1/Slidebar-right1.gif">
            </a>
        </div>    <!--    Ads right 2-->
        <div class="text-center" style="padding: 0 0 15px 0;">
            <a href="https://bit.ly/2O4PqoH" target="_blank">
                <img src="/images/ads/v1/Slidebar-right2.gif">
            </a>
        </div>
    </aside>
</div>
</template>

<script>
export default {
    props: ['coinData']
}
</script>