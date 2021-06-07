<template>
    <div >
        <div class="home">
            <!-- 宣传海报 -->
            <div class="screen"></div>
            <!-- 公司三大板块 -->
            <div class="wellcome-area">
                <div class="wellcome-box">
                    <div class="row">
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="item-box">
                                <div class="item-box-h">
                                    <span class="iconfont icon-weixing"></span>
                                </div>
                                <div class="item-box-b"><a href="#">
                                    <h5>精准定位 实时监控</h5></a>
                                    </div>
                                <div class="item-box-f">专用通讯终端，实时监控农机作业数据，在线状态、作业速度、作业里程、实时面积等。准确掌握农机作业过程。</div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="item-box">
                                <div class="item-box-h">
                                    <span class="iconfont icon-bhjlink"></span>
                                </div>
                                <div class="item-box-b"><a href="#">
                                    <h5>订单平台 连通供需</h5></a>
                                    </div>
                                <div class="item-box-f">农户可通过平台发布作业需求，农机合作社和农机手通过平台接洽订单。紧密连接供求双方，解决以往农机作业双方信息不对称问题。</div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="item-box">
                                <div class="item-box-h">
                                    <span class="iconfont icon-baobiaofenxi"></span>
                                </div>
                                <div class="item-box-b"><a href="#">
                                    <h5>精细作业 分析决策</h5></a>
                                    </div>
                                <div class="item-box-f">平台为机械化播种、插秧、植保、收割、深松整地、秸秆还田等农机作业，提供作业数据采集、自动化处理、统计分析、精细化管理等服务。</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 公司介绍海报 -->
            <div class="com-screen"></div>
            <!-- 解决方案轮播图 -->
            <div class="service-area">
                <div class="container">
                    <div class="service-area-title text-center">
                        <h2>解决方案</h2>
                    </div>
                    <div class="service-area-body">
                        <div class="content-are">
                            <div class="lunbo row" ref="lunbo_row">
                            <a href="#">
                                    <div class="show-area" ref="showWidth">
                                    <div class="box"><img src="../assets/img/services/5.jpg" alt=""></div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="show-area">
                                    <div class="box"><img src="../assets/img/services/6.jpg" alt=""></div>
                                    </div>
                                </a>

                                <a href="#">
                                    <div class="show-area">
                                    <div class="box"><img src="../assets/img/services/1.jpg" alt=""></div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="show-area">
                                    <div class="box"><img src="../assets/img/services/2.jpg" alt=""></div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="show-area">
                                    <div class="box"><img src="../assets/img/services/3.jpg" alt=""></div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="show-area">
                                    <div class="box"><img src="../assets/img/services/4.jpg" alt=""></div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="show-area">
                                    <div class="box"><img src="../assets/img/services/5.jpg" alt=""></div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="show-area">
                                    <div class="box"><img src="../assets/img/services/6.jpg" alt=""></div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="show-area">
                                    <div class="box"><img src="../assets/img/services/1.jpg" alt=""></div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="show-area">
                                    <div class="box"><img src="../assets/img/services/2.jpg" alt=""></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="service-area-btn">
                        <div class="btns">
                            <div class="btnlf"><span></span></div>
                            <div class="btnrf"><span></span></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 功能模块 -->
            <div class="counter-area">
                <div class="container">
                    <div class="counter-box col-md-3 col-sm-6 col-xs-12">
                        <div class="item">
                            <h5>已服务合作社</h5>
                            <div class="count-outer">
                            <div class="iconfont icon-hezuoshe"></div>
                            <span class="count-text" data-speed="2000" data-stop="280">58</span>
                            </div>
                        </div>
                    </div>
                    <div class="counter-box col-md-3 col-sm-6 col-xs-12">
                        <div class="item">
                            <h5>入驻农机手</h5>
                            <div class="count-outer">
                            <div class="iconfont icon-siji"></div>
                            <span class="count-text">280</span>
                            </div>
                        </div>
                    </div>
                    <div class="counter-box col-md-3 col-sm-6 col-xs-12">
                        <div class="item">
                            <h5>入驻农户</h5>
                            <div class="count-outer">
                            <div class="iconfont icon-nonghu"></div>
                            <span class="count-text">169</span>
                            </div>
                        </div>
                    </div>
                    <div class="counter-box col-md-3 col-sm-6 col-xs-12">
                        <div class="item">
                            <h5>完成作业</h5>
                            <div class="count-outer">
                            <div class="iconfont icon-mianji"></div>
                            <span class="count-text">389</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 客户案例 -->
            <div class="case-area">
                <div class="container">
                    <div class="case-title text-center">
                        <h2>客户案例</h2>
                    </div>
                    <div class="row">
                        <div class="photo-area col-md-3 col-sm-12 col-xs-12">
                            <div class="photo-box">
                                <img src="../assets/img/blog/1.jpg" alt="">
                                <p>图木舒克银丰现代农业装备有限公司</p>
                            </div>
                        </div>
                        <div class="photo-area col-md-3 col-sm-12 col-xs-12">
                            <div class="photo-box">
                                <img src="../assets/img/blog/2.jpg" alt="">
                                <p>湖州吴兴尹家圩粮油植保农机专业合作社</p>
                            </div>
                        </div>
                        <div class="photo-area col-md-3 col-sm-12 col-xs-12">
                            <div class="photo-box">
                                <img src="../assets/img/blog/3.jpg" alt="">
                                <p>长兴县银丰农机服务专业合作社</p>
                            </div>
                        </div>
                        <div class="photo-area col-md-3 col-sm-12 col-xs-12">
                            <div class="photo-box">
                                <img src="../assets/img/blog/4.jpg" alt="">
                                <p>安吉县万加丰水稻专业合作社</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 联系我们 -->
            <div class="connection-area">
                <div class="container">
                    <div class="connection-box">
                        <div class="connection-title text-center">
                            <h2>联系我们</h2>
                            <p>如有合作意向，或有任何意见和建议，请填写并提交以下内容，睿耘工作人员将竭诚为您服务。</p>
                        </div>
                        <form name="contact_form" class="default-form contact-form" method="post" onsubmit="return check(this)" >
                            <div class="row">
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                   <div class="form-group">
                                        <input type="text" name="name" placeholder="联系人" >
                                   </div>
                                    <div class="form-group">
                                        <input type="text" name="phone" placeholder="电话" >                                        
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <div class="form-group">                                    
                                        <input type="email" name="email" placeholder="Email" >
                                        <button type="submit" class="form-btn">提交</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- 返回顶部按钮设置 -->
            <div ref="btnFlag" class="go-top" @click="backTop"></div>
        </div>
    </div>
</template>

<script>
    function check(form) {
        if(form.name.value==''){
            alert("请输入联系人");
            form.name.focus();
            return false;
        }
        return true;
    }
    
export default {
    // 监听滚动事件
    mounted() {
        window.addEventListener('scroll',this.scrollToTop);
        let num=this.$refs.showWidth.clientWidth;
        // console.log(num);
        this.$refs.lunbo_row.style.left=-2*(num+15)+'px';
    },
    // 移开页面时需要将监听事件移除，不然会报错
    destroyed() {
        window.removeEventListener('scroll',this.scrollToTop)
    },
    methods: {
        scrollToTop(){
            const that=this;
            that.scrollTop=window.pageYOffset || document.documentElement.scrollTop;     
            // // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏   
            if (that.scrollTop > 160) {
                that.$refs.btnFlag.style.display="block"
                } else {
                    that.$refs.btnFlag.style.display="none"
                }    
        },
        // 点击图片回到顶部方法，加计时器是为了过渡顺滑
        backTop () {
            const that = this
            console.log(that)
            let timer = setInterval(() => {
              let ispeed = Math.floor(-that.scrollTop / 5)
              document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
              if (that.scrollTop == 0) {
                // console.log('111')
                clearInterval(timer)
              }
            }, 16)
        },

    },
}
</script>

<style scoped>
    .screen {
        height: 500px;
        background: url(../assets/img/background/9.png);
    }
    .com-screen {
        height: 360px ;
        background: url(../assets/img/background/1.jpg)
    }
    .wellcome-area {
        padding: 90px 0px;
    }
    .row {
        margin: auto;
    }
    .item-box {
        padding: 30px;
        text-align: center;
    }
    .item-box-h {
        width: 60px;
        height: 60px;
        background-color: #00cc99;
        border-radius: 50%;
        margin:  0 auto;
    }
    .item-box-h span {
        display: block;
        font-size: 24px;
        text-align: center;
        line-height: 60px;
        color: #fff;
    }
    .item-box-b h5 {
        display: inline-block;
        font-size: 24px;
        font-weight: 600;
        line-height: 36px;
        color: #222222;
        padding-top: 10px;
        font-family: 'Roboto', sans-serif;
        margin:  0 auto;
    }
    .item-box-f {
        font-size: 14px;
        font-weight: 400;
        line-height: 26px;
        color: #848484;
        font-family: 'Roboto', sans-serif;
    }
    @media screen and (min-width: 1200px) {
        .row {
            width: 1200px;
        }
    }
    @media screen and (max-width: 1200px) {
        .row {
            width: 970px;
        }
    }
    @media screen and (max-width: 970px) {
        .row {
            width: 750px;
        }
    }
    @media screen and (max-width: 767px) {
        .row {
            width: 100%;
        }
    }
    .service-area {
        padding: 90px 0px;
    }
    .service-area-title h2 {
        position: relative;
        font-size: 36px;
        color: #222222;
        line-height: 60px;
        font-weight: 600;
        padding-bottom: 14px;
        margin-bottom: 10px;
    }
    .service-area-title h2:before {
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0px;
        margin: auto;
        width: 100px;
        height: 3px;
        background: #fff;
        border-bottom: 3px double #00cc99;
        content: '';
    }
    .service-area-body {
        position: relative;
        overflow: hidden;
        height: 230.5px;
    }
    .content-are .row {
        position: absolute;
        width: 4000px;
    }
    .show-area {
        float: left;
        margin-right: 30px;
        cursor: pointer;
    }
    .show-area img {
        width: 100%;
    }
    @media screen and (min-width: 1200px) {
        .container {
        padding: 0px;
        }
        .show-area {
            width: 370px;
        }
    }
    @media screen and (max-width: 1200px) {
        .show-area {
            width: 293.333px;
        }
    }
    @media screen and (max-width: 970px) {
        .show-area {
            width: 345px;
        }
    }
    @media screen and (max-width: 768px) {
       
    }
    .service-area-btn {
        margin-top: 10px;
        text-align: center;
    }
    .btns {
        display: inline-block;
        overflow: hidden;
    }
    .btnlf,
    .btnrf {
        width: 64px;
        height: 58px;
        text-align: center;
        line-height: 64px;
        float: left;
        font-size: 20px;
    }
    .btnlf span,
    .btnrf span {
        font-family: 'icomoon';
        display: inline-block;
        width: 50px;
        height: 50px;
        background: none;
        line-height: 48px;
        color: #b2b2b2;
        font-size: 16px;
        border: 2px solid #f6f6f6;
        border-radius: 6px;
        transition: all 0.5s;
        cursor: pointer;
    }
    .btnlf span:hover {
        background: #00cc99;
        color: #fff;
    }
    .btnrf span:hover {
        background: #00cc99;
        color: #fff;
    }
    /* 功能模块 */
    .counter-area {
        padding: 80px 0 40px;
        background: url(../assets/img/background/2.png);
    }
    .counter-box {
        margin-bottom: 40px;
    }
    .counter-box .item {
        border: 1px solid #D4DAE3;
        text-align: center;
        padding: 15px 40px;
    }
    .counter-box .item h5 {
        font-size: 15px;
        font-weight: 600;
        color: #ffffff;
        line-height: 28px;
        padding: 15px 0px 8px 0px;
        margin: 0px;
        font-family: 'Roboto', sans-serif;
    }
    .count-outer {
        font-weight: 600;
        color: #00cc99;
        padding-bottom: 15px;
        font-family: 'Roboto', sans-serif;
    }
    .count-outer .iconfont {
        margin-top: 20px;
        font-size: 50px;
    }
    .count-outer .count-text {
        display: inline-block;
        margin-top: 30px;
        font-size: 50px;
    }
    /* 案例模块 */
    .case-area {
        margin-top: 90px;
        padding-bottom: 60px;
    }
    .case-area .row {
        margin-left: -15px;
    }
    .case-title {
        margin-bottom:40px;
    }
    .case-title h2 {
        position: relative;
        font-size: 36px;
        color: #222222;
        line-height: 60px;
        font-weight: 600;
        padding-bottom: 14px;
        margin-bottom: 10px;
    }
    .case-title h2::before {
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        margin: auto;
        width: 100px;
        height: 3px;
        background: #fff;
        border-bottom: 3px double #00cc99;
        content: '';
    }
    .photo-box {
        transition: all 500ms ease;
        border: 2px solid rgba(0, 0, 0, 0.1);
    }
    .photo-box:hover {
        border-color: #00cc99;
    }
    .photo-box img {
        width: 100%;
        margin-bottom: 20px;
    }
    .photo-box p {
        font-size: 20px;
        line-height: 26px;
        font-weight: 600;
        color: #222222;
        padding-bottom: 20px;
        margin: 0 12px;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .photo-box p::before {
        position: absolute;
        bottom: 18px;
        left: 30px;
        width: 56px;
        content: '';
        border-bottom: 2px solid #00cc99;
    }
    /* 联系我们  */
    .connection-area {
        background: url(../assets/img/background/10.png);
    }
    .connection-box {
        padding: 80px 100px;
    }
    .connection-title h2 {
        position: relative;
        font-size: 36px;
        color: #222222;
        line-height: 60px;
        font-weight: 600;
        padding-bottom: 14px;
        margin-bottom: 10px;
    }
    .connection-title h2::before {
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0px;
        margin: auto;
        width: 100px;
        height: 3px;
        background: #fff;
        border-bottom: 3px double #00cc99;
        content: '';
    }
    .form-group {
        margin-bottom: 30px;
    }
    .connection-box .row {
        width: 100%;
        margin-right: -15px;
        margin-left: -15px;
    }
    .form-group input {
        color: #848484;
        display: block;
        font-size: 14px;
        height: 50px;
        padding: 0 20px;
        width: 100%;
        font-weight: 400;
        text-transform: capitalize;
        font-family: 'Roboto', sans-serif;
        border: 1px solid #f6f6f6;
        transition: all 500ms ease;
    }
    .form-btn {
        margin-top: 30px;
        font-size: 15px;
        color: #ffffff;
        line-height: 28px;
        font-weight: 600;
        padding: 10px 24px;
        background: #00cc99;
        border-radius: 6px;
        border: 1px solid #00cc99;
        text-transform: capitalize;
        display: inline-block;
        font-family: 'Roboto', sans-serif;
        transition: all 0.5s ease;
    }
    .form-btn:hover {
        color: #00cc99;
        background-color: transparent;
    }
    /* 回到顶部 */
    .go-top {
        position: relative;
        z-index: 2;
        font-family: 'icomoon';
        display: none;
        position: fixed;
        right: 40px;
        bottom: 40px;
        width: 45px;
        height: 45px;
        background-color: #00cc99;
        border: 1px solid #00cc99;
        line-height: 45px;
        text-align: center;
        color: #fff;
        font-size: 150%;
    }
    .go-top:hover {
        color: #00cc99;
        background-color: #fff;
    }
</style>