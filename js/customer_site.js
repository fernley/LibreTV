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
   }

};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
