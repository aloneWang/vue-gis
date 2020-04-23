<template>
  <div id="map"></div>
</template>
<script>
/* eslint-disable */
export default {
	data() {
		return {
			mapContext: null
		}
	},
  mounted() {
		this.initMap()
		this.setTile()
		this.setPolyLine()
	},
  methods: {
		// 创建map 对象
    initMap() {
			this.mapContext = L.map('map',{
				center: [45.51, -122.2],
				zoom: 6
			})
		},
		// 创建瓦片图层
		setTile() {
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}',{ 
				foo: 'bar',
				})
			.addTo(this.mapContext)
		},
		// 绘制折线
		setPolyLine() {
			const latlngs = [
				[45.51, -122.68],
        [44.877, -122.43],
        [44.04, -118.2]
			]
			L.polyline(latlngs,{color:'red'}).addTo(this.mapContext)
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