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
   }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
