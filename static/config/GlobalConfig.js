/*
 * @Author: caijinzhang
 * @Date:   2020-05-28 20:12:44
 * @Last Modified by: wengrenzi
 * @Last Modified time: 2020-06-09 14:52:30
 */
var WebGISAPPConfig = {
    coordinate: [106.87763683991672, 26.769010516956843],//初始化地图坐标中心点
    zoom : 10,
    gisUserName: 'bs01',
    gisPassword: '1',
    appUrl: window.location.origin,
    rptApiUrl : "http://172.16.12.39:2008" + "/rptApi/dataview",
    searchApiUrl: window.location.origin + '/searchApi',
    poiType: 'geoServer',
    poiToken: '37222f6b4cc74a37ae4645a7fc37fa7f',
  
}
  
WebGISAPPConfig.AssetsUrl = WebGISAPPConfig.appUrl + "/static/assets";

window.WebGISAPPConfig = WebGISAPPConfig;