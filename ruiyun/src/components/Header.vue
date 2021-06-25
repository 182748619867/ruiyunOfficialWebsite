<template>
    <div>
        <div class="home">
        <div class="box" ref="fxd">
        <header class="clearfix">
            <div class="lf">
                <button class="btn" @click="showAdd"><span></span><span></span><span></span></button>          
                <div class="logo">
                    <a href="javascript:;">
                        <img src="./../assets/img/logo.png" alt="">
                    </a>
                </div>
            </div>
            <div class="rf clearfix">
                <ul v-if="show1" class="clearfix" ref="add" >
                    <li><a href="javascript:;">首页</a></li>
                    <li><a href="javascript:;">关于睿耘</a></li>
                    <li><a href="javascript:;">解决方案</a></li>
                    <li><a href="javascript:;">客户案例</a></li>
                    <li><a href="javascript:;">APP下载</a></li>
                    <li><a href="javascript:;">联系我们</a></li>
                </ul>
            </div>
        </header>
    </div>
    <div ref="btnFlag" class="go-top" @click="backTop"></div>
    </div>
    </div>
</template>

<script>

export default {
    name:"Index",
    data() {
        return {
            scrollTop:0,
            show1:true
        }
    },
    // 监听滚动事件
    mounted() {
        window.addEventListener('scroll',this.scrollToTop)
    },
    // 移开页面时需要将监听事件移除，不然会报错
    destroyed() {
        window.removeEventListener('scroll',this.scrollToTop)
    },
    methods: {
        // 最小页面下控制导航栏的隐藏与展示
        showAdd(){
            this.show1 = !this.show1;
            // this.$refs.add.style.display="block !important" ;
            // console.log('2');
        },
        // 滚动一定距离后，导航栏变为固定定位
        scrollToTop(){
            const that=this;
            // console.log(that);
            that.scrollTop=window.pageYOffset || document.documentElement.scrollTop;     
            that.$refs.fxd.style.position = that.scrollTop > 105 ? 'fixed' : 'relative';
            // that.scrollTop > 105 ? that.$refs.fxd.style.position="fixed" : that.$refs.fxd.style.position="relative"
            // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏   
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
                console.log('111')
                clearInterval(timer)
              }
            }, 16)
        },

    },
    created() {
        
    },
}
</script>

<style scoped>
    /* .home {
        height: 1500px;
    } */
    .box {
        position: relative;
        width: 100%;
        /* z-index: 9999; */
        padding: 25px 0px;
    }
    .btn {
        display: none;
        width: 50px;
        height: 50px;
        background-color:#00cc99;
        float: left;
        border: none;
    }
    .btn span {
        display: block;
        width: 22px;
        height: 5px;
        margin: auto;
        border-top: 2px solid #fff;
    }
    .rf li {
        float: left;
        margin-right: 45px;
    }
    .rf li a {
        font-size: 14px;
        color: #222222;
        line-height: 55px;
    }
    .rf li a:hover {
        color: #00cc99;
        transition: all 500ms ease;
    }
    @media screen and (min-width: 1200px){
        header {
            width: 1170px;
            margin: auto;
        }
    }
    @media screen and (max-width: 1200px){
        .lf {
            display: block;
            float: none;
            text-align: center;
            margin-bottom: 15px;
        }
        .rf {
            float: none;
            text-align: center;
        }
        .rf>ul {
            display: inline-block !important;
        }
    }
    @media screen and (max-width: 767px){
        .btn {
            display: inline-block;
        }
        header {
            margin: 0px 15px;
        }
        .rf>ul {
            /* display: none !important; */
            box-sizing: border-box;
            float: none !important;
            margin: 0px !important;
            width: 100% !important;
            background: #272a36;
            border: 1px solid #ffffff;
            border-top: none;
            
        }
        .rf>ul>li {
            display: block !important;
            background: #00cc99;
            width: 100%;
            border-bottom: 1px solid #ffffff;
            cursor: pointer;
        }
        .rf>ul>li>a {
            color: #ffffff;
            float: left;
            margin-left: 10px;
        }
        .rf>ul>li:hover{
            color: #fff;
            background: #272a36;
            transition: all 1s ease;
        } 
        

    }
    .go-top {
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