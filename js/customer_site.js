const CUSTOMER_SITES = {
         ruyi: {
name: '如意资源',
 api: 'https://cj.rycjapi.com/api.php/provide/vod/',
   },
      baofeng: {
name: '暴风资源',
 api: 'https://bf.xoxowin86cisyap.com//api.php/provide/vod/',
   },
      
      maotai: {
name: '茅台资源',
 api: 'https://caiji.maotaizy.cc/api.php/provide/vod/from/mtm3u8/',
    },
360: {
name: '360资源',
 api: 'https://360zy.com/api.php/provide/vod/',
     },
         
       mozhua: {
name: '魔爪资源',
 api: 'https://mozhuazy.com/api.php/provide/vod/',
    },
      siquan: {
name: '四个圈',
 api: 'https://pg.fenwe078.cf/api.php/provide/vod/',
    },
         
      zuida: {
name: '最大资源',
 api: 'https://zuida.xyz/api.php/provide/vod/',
    },
     ikun: {
           name: 'iKun资源',
  api: 'https://ikunzyapi.com/api.php/provide/vod',
},
         
     wangwang: {
           name: '旺旺短剧',
  api: 'https://wwzy.tv/api.php/provide/vod',
},
     
      ysgc: {
name: '影视工厂 ',
 api: 'https://cj.lziapi.com/api.php/provide/vod/',
    },
  
dytt : {
name: '电影天堂',
 api: 'http://caiji.dyttzyapi.com/api.php/provide/vod/',
   },
   
   
liangzi: {
name: '量子资源',
 api: 'http://cj.lziapi.com/api.php/provide/vod/',
   },

    feifan: {
name: '非凡资源',
 api: 'http://api.ffzyapi.com/api.php/provide/vod/',
     },
     youzhi: {
name: '优质资源',
 api: 'https://api.yzzy-api.com/inc/api_mac10.php?ac',
     },

     wujing: {
name: '无尽资源',
 api: 'https://api.wujinapi.cc/api.php/provide/vod/',
},
     
     
    
    
      hongniu: {
name: '红牛资源',
 api: 'https://www.hongniuzy2.com/api.php/provide/vod/',
   },
         
      wuxian: {
name: '无限资源',
 api: 'https://api.wuxianzy.net/api.php/provide/vod/',
    },
     
      wolong: {
name: '卧龙资源',
 api: 'https://collect.wolongzy.cc/api.php/provide/vod/',
    },
      
    
     tianya: {
name: '天涯资源',
 api: 'https://tyyszyapi.com/api.php/provide/vod/',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
