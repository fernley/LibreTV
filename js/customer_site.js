const CUSTOMER_SITES = {
     qiqi: {
name: '七七资源',
 api: 'https://www.qiqidys.com/api.php/provide/vod',
     },
    fantuan: {
     name: '饭团影视',
 api: 'https://www.fantuan.tv/api.php/provide/vod/',
    },
      ysgc: {
name: '影视工厂 ',
 api: 'https://cj.lziapi.com/api.php/provide/vod/',
    },
     feifan: {
name: '非凡采集站',
 api: 'http://ffzy5.tv/',
     },
    aikun: {
name: '爱坤资源',
 api: 'https://www.ikunzy.com/ikun/help.html',
    },
   baofeng: {
name: '暴风资源',
 api: 'https://bfzy.tv/help/?home',
   },
    pingguo: {
name: '苹果cms官方',
 api: 'https://www.applecms.cc',
    },
    zanpian: {
name: '赞片cms官网',
 api: 'https://www.zanpiancms.com/',
    },
    liangzi: {
name: '量子资源网',
 api: 'http://lzizy.net/help/',
    },
    xinlang: {
name: '新浪资源网',
 api: 'https://www.xinlangzy.com/help/',
    },
    huya: {
name: '虎牙资源网',
 api: 'http://huyazy.net/help/',
    },
    guangsu: {
name: '光速资源网',
 api: 'https://www.guangsuzy.com/help/',
    },
    jisu: {
name: '极速资源网',
 api: 'https://www.jisuzy.com/index.php/help/index.html',
    },
   hongniu: {
name: '红牛资源网',
 api: 'https://hongniuzy.net/help/',
   },
    ruyi: {
name: '如意资源网',
 api: 'https://www.ryzy3.tv/',
    },
    mozhua: {
name: '魔爪资源网',
 api: 'https://mzzy.me/',
    },
    huawei: {
name: '华为吧资源',
 api: 'https://huawei8.live/',
    },
    douban: {
name: '豆瓣资源站',
 api: 'https://dbzy.com/',
    },
    maotai: {
name: '茅台资源站',
 api: 'https://mtzy.me/',
    },
    suoni: {
name: '索尼资源',
 api: 'https://suonizy.net/',
    },
    uku: {
name: 'U酷资源站',
 api: 'https://ukuzy0.com/',
    },
    kuaiche: {
name: '快车资源站',
 api: 'https://kuaichezy.com/',
    },
    jinying: {
name: '金鹰资源站',
 api: 'https://jinyingzy.com/',
    },
    taopian: {
name: '淘片资源站',
 api: 'https://www.taopianzy.com/',
    },
    wulong: {
name: '卧龙资源站',
 api: 'https://wolongzyw.com/',
    },
    niuniu: {
name: '牛牛资源站',
 api: 'https://niuniuzy.cc/',
    },
    xmianyang: {
name: '小绵羊资源站',
 api: 'https://vs.okcdn100.top/',
        },
    xiami: {
name: '虾米资源站',
 api: 'https://zy.hls.one/',},
    qiling: {
name: '麒麟资源站',
 api: 'https://www.qilinzyz.com/',
    },
   fengchao: {
name: '蜂巢资源站',
 api: 'https://fczy908.com/',
   },
    haohua: {
name: '豪华资源站',
 api: 'https://haohuazy.com/',
    },
    modu: {
name: '魔都资源站',
 api: 'https://moduzy.com/',
    },
    huohua: {
name: '火花资源站',
 api: 'https://cj.huohua.live/',
    },
    subo: {
name: '速播资源站',
 api: 'https://www.suboziyuan.net/',
    },
    heimuer: {
name: '黑木耳资源站',
 api: 'https://heimuer.tv/',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
