<template>
    <div class="foot-home">
        <div class="foot-body">
            <div class="row clearfix">
                <div class="foot-nav">
                    <ul>
                        <li><a href="#"><span></span>  关于睿耘</a></li>
                        <li><a href="#"><span></span>  解决方案</a></li>
                        <li><a href="#"><span></span>  客户案例</a></li>
                        <li><a href="#"><span></span>  APP下载</a></li>
                        <li><a href="#"><span></span>  联系我们</a></li>
                        <li><a href="#"><span></span>  隐私条款</a></li>
                    </ul>
                </div>
                <div class="app">
                    <ul>
                        <li>
                            <h5>微信公众号</h5>
                            <img src="../assets/img/weixin.png">
                        </li>
                        <li>
                            <h5>合作社APP 下载</h5>
                            <img src="../assets/img/xiaz.png">
                        </li>
                        <li>
                            <h5>大田千里眼APP 下载</h5>
                            <img src="../assets/img/xiaz2.png">
                        </li>
                    </ul>
                </div>
                <div class="message">
                    <ul>
                        <li><span></span>0571-86839276</li>
                        <li><span></span>info@allyfarmer.com</li>
                        <li><span></span>杭州市滨江区高新软件园2号楼101室</li>
                        <li><span class="iconfont iconbeian"></span>浙ICP备 17043110号</li>
                        <li><span class="iconfont icongongan"></span>公安备案 33010802011602号</li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
    .foot-home {
        position: relative;
        bottom: 0;
        right: 0;
        border-top: 5px solid #00cc99;
        background: rgba(38, 44, 55, 0.95);
        padding: 60px 0px;
    }
    .foot-nav,
    .app,
    .message {
        float: left;
    }
    .foot-nav ul {
        margin-top: -5px;
    }
    .foot-nav ul li {
        text-align: center;
        padding: 2px 0px;
    }
    .foot-nav ul li a {
        font-size: 14px;
        line-height: 26px;
        font-weight: 400;
        color: #d4dae3;
        font-family: 'Roboto', sans-serif;
        transition: all 500ms ease;
    }

    .foot-nav ul li a:hover{
        color:#00cc99;
        text-decoration: none;
    }

    .foot-nav ul li a span {
        font-family: 'icomoon';
        margin-right: 8px;
    }

    .app ul li {
        float: left;
    }

    .app ul li h5 {
        font-size: 14px;
        line-height: 26px;
        font-weight: 400;
        color: #d4dae3;
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }

    .app ul li img {
        display: block;
        margin: 5px auto;
        width: 100px;
    }
    
    .message {
        margin-left: 15px;
    }
    .message ul li {
        font-size: 14px;
        line-height: 26px;
        padding: 2px 0px;
        font-weight: 400;
        color: #d4dae3;
        font-family: 'Roboto', sans-serif;
     }

    .message ul li span {
        font-family: 'icomoon';
        margin-right: 8px;

     }
    
    @media screen and (min-width: 1200px) {
        .row {
            width: 1200px;
            margin:auto; 
        }
        .foot-nav {
            width: 200px;
        }
        .app ul li {
            width: 200px;
        }
        .message {
            width: 300px;
        }
    }

    @media screen and (max-width: 1200px) {
        .row {
            width: 970px;
            margin: auto;
        }
        .foot-nav {
            width: 162px;
        }
        .app ul li {
            width: 162px;
        }
        .message {
            width: 242px;
        }
    }

    @media screen and (max-width: 991px) {
        .row {
            width: 750px;
            margin: auto;
        }
        .foot-home,
        .foot-nav,
        .app,
        .message,
        .app ul li {
            width: 100%;
            float: none;
        }
        .app ul li {
            margin-top: 10px;
        }

    }

     @media screen and (max-width: 767px) {
        .row {
            width: 100%;
            margin: auto;
        }
        .foot-nav,
        .app,
        .message,
        .app ul li {
            width: 100%;
            float: none;
        }
        .app ul li {
            margin-top: 10px;
        }

     }
</style>