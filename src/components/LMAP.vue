<template>
  <div id="map"></div>
</template>
<script>
/* eslint-disable */
import typhoon from '../assets/data.json'
import Icon from '../assets/typhoon.png'
export default {
  data() {
    return {
      mapContext: null,
      baseMap: null,  // 切片图层,
    };
  },
  mounted() {
    this.initMap();
    
  },
  computed: {
    typhoonData() {
      const points = typhoon.points.map( item => [Number(item.lat), Number(item.lng)])
      return points
    }
  },
  methods: {
    // 创建map 对象
    initMap() {
      this.mapContext = L.map("map", {
        center: [45.51, -122.2],
        zoom: 6,
      })
      this.setTile()
      this.setBounds();
      setTimeout(() => {
        this.animatePolyline()
      }, 200);
      
    },
    // 创建瓦片图层
    setTile() {
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
        foo: "bar"
      }).addTo(this.mapContext);
    },
    //设置折线区域的范围
    setBounds() {
      const bounds = L.polyline(this.typhoonData, { color: "red" }).getBounds()
      // 设置给定的地理范围
      this.mapContext.fitBounds(bounds)
    },
    animatePolyline() {
      let stopIndex = 2
      let layer = null
      let maker = null
      const data = this.typhoonData
      const timer = setInterval(() => {
        if(stopIndex > data.length ) {
          // 弹窗显示台风信息
          const latlng = this.typhoonData[0]
          const popupConten = `
            台风信息：<br />
            名称：${typhoon.name}<br />
            经纬度：${latlng[0]},${latlng[1]}<br />
            等级：${typhoon.warnlevel}<br />
            开始时间：${typhoon.starttime}<br />
            结束时间： ${typhoon.endtime}
          `
          maker.bindPopup(popupConten).openPopup();
            clearInterval(timer)
            return
          }
        // 清除之前绘制的折线，和标记
        if(layer) this.mapContext.removeLayer(layer);
        if(maker) this.mapContext.removeLayer(maker);
        
        const _data = this.typhoonData.slice(0, stopIndex)
        layer = L.polyline(_data, {color: 'red'}).addTo(this.mapContext)
        var typhIcon = L.icon({
          iconUrl: Icon,
          iconSize: [38, 38],
        });
        maker = L.marker(_data[_data.length -1], {
          icon: typhIcon
        }).addTo(this.mapContext)
        stopIndex ++
      }, 100);
    }
  }
};
</script>
<style lang="less" scoped>
#map {
  width: 500px;
  height: 500px;
}
</style>