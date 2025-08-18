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
   baofeng: {
name: '暴风资源',
 api: 'https://bf.xoxowin86cisyap.com//api.php/provide/vod/',
   },
dytt {
name: '电影天堂',
 api: 'http://caiji.dyttzyapi.com/api.php/provide/vod/',
   },
    maotai: {
name: '茅台资源站',
 api: 'https://caiji.maotaizy.cc/api.php/provide/vod/from/mtm3u8/',
    },
   fengchao: {
name: '蜂巢资源站',
 api: 'https://api.fczy888.me/api.php/provide/vod/',
   },
   wuxian: {
name: '无限资源',
 api: 'https://api.wuxianzy.net/api.php/provide/vod/?',
   },
liangzi: {
name: '量子资源',
 api: 'http://cj.lziapi.com/api.php/provide/vod/',
   },

     360: {
name: '360资源',
 api: 'https://360zy.com/api.php/provide/vod/',
     },
    feifan: {
name: '非凡采集站',
 api: 'http://api.ffzyapi.com/api.php/provide/vod/',
     },
     youzhi: {
name: '优质资源',
 api: 'https://api.yzzy-api.com/inc/api_mac10.php?ac',
     },
    ruyi: {
name: '如意资源网',
 api: 'https://cj.rycjapi.com/api.php/provide/vod/',

      wujing: {
name: '无尽资源',
 api: 'https://api.wujinapi.cc/api.php/provide/vod/',
    huawei: {
name: '华为吧资源',
 api: https://huaweiba.live/api.php/provide/vod/',
    },
         heimuer: {
name: '黑木耳资源站',
 api: https://mycj-json.heimuer.xyz/api.php/provide/vod/',
    },
    mozhua: {
name: '魔爪资源网',
 api: 'https://mozhuazy.com/api.php/provide/vod/',
    },
         douban: {
name: '豆瓣资源站',
 api: https://caiji.dbzy.tv/api.php/provide/vod/,
    },
    guangsu: {
name: '光速资源网',
 api: 'http://api.guangsuapi.com/api.php/provide/vod/',
    },
   hongniu: {
name: '红牛资源网',
 api: 'https://www.hongniuzy2.com/api.php/provide/vod/',
   },
    suoni: {
name: '索尼资源',
 api: 'https://suoniapi.com/api.php/provide/vod/',
    },
     yingtu: {
name: '影图资源',
 api: 'https://cj.vodimg.top/api.php/provide/vod/',
    },
          wuxian: {
name: '无限资源',
 api: 'https://api.wuxianzy.net/api.php/provide/vod/',
    },




     

     

    aikun: {
name: '爱坤资源',
 api: 'https://www.ikunzy.com/ikun/help.html',
    },

    pingguo: {
name: '苹果cms官方',
 api: 'https://www.applecms.cc',
    },
    zanpian: {
name: '赞片cms官网',
 api: 'https://www.zanpiancms.com/',
    },

    xinlang: {
name: '新浪资源网',
 api: 'https://www.xinlangzy.com/help/',
    },
    huya: {
name: '虎牙资源网',
 api: 'http://huyazy.net/help/',
    },

    jisu: {
name: '极速资源网',
 api: 'https://www.jisuzy.com/index.php/help/index.html',
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
    }

};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
