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
dytt : {
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
   },
      wujing: {
name: '无尽资源',
 api: 'https://api.wujinapi.cc/api.php/provide/vod/',
              },
    huawei: {
name: '华为吧资源',
 api: 'https://huaweiba.live/api.php/provide/vod/',
    },
         heimuer: {
name: '黑木耳资源站',
 api: 'https://mycj-json.heimuer.xyz/api.php/provide/vod/',
    },
    mozhua: {
name: '魔爪资源网',
 api: 'https://mozhuazy.com/api.php/provide/vod/',
    },
         douban: {
name: '豆瓣资源站',
 api:' https://caiji.dbzy.tv/api.php/provide/vod/,
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
name: 'bibili资源',
 api: 'https://www.caiji.cyou/api.php/provide/vod/?',
    },
    wolong: {
name: '卧龙采集资源',
 api: 'https://collect.wolongzy.cc/api.php/provide/vod/',
    },
    kuaiche: {
name: '快车资源网',
 api: 'https://caiji.kuaichezy.org/api.php/provide/vod/',
    },

    jisu: {
name: '极速资源网',
 api: 'https://jszyapi.com/api.php/provide/vod/',
    },
         haohua: {
name: '豪华资源站',
 api: 'https://hhzyapi.com/api.php/provide/vod/',
    },
    niuniu: {
name: '牛牛资源站',
 api: 'https://api.niuniuzy.me/api.php/provide/vod/',
    },
    jiuling: {
name: '九零采集资源',
 api: 'https://oknnews.com/api.php/provide/vod/',
    },
    siquan: {
name: '四个圈采集',
 api: 'https://pg.fenwe078.cf/api.php/provide/vod/',
    },
     
 OK: {
name: 'OK资源网采集',
 api: 'https://okzyw9.com/api.php/provide/vod/',
    },
         modu: {
name: '魔都资源站',
 api: 'https://www.mdzyapi.com/api.php/provide/vod/',
    },
    zuida: {
name: '最大采集',
 api: 'https://zuida.xyz/api.php/provide/vod/',
    },
    tianya: {
name: '天涯资源网',
 api: 'https://tyyszyapi.com/api.php/provide/vod/',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
