const CUSTOMER_SITES = {
    qiqi: {
name: '七七资源',
 api: 'https://www.qiqidys.com/api.php/provide/vod' ，
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
