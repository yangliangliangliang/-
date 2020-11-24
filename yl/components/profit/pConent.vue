<template>
	<view class="qiun-columns">
		
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">总收益</view>
			<view class="qiun-title-dot-light">每日收益</view>
		</view>
		<view class="qiun-charts" >
			<!--#ifdef H5 || APP-PLUS-->
			<canvas canvas-id="canvasColumn" 
				id="canvasColumn" 
				class="charts" 
				:width="cWidth*pixelRatio" 
				:height="cHeight*pixelRatio" 
				:style="{'width':cWidth+'px','height':cHeight+'px'}" 
				@touchstart="touchColumn">
			</canvas>
			<!--#endif-->
			<!--#ifndef H5 || APP-PLUS-->
			<canvas canvas-id="canvasColumn" 
				id="canvasColumn" 
				class="charts" 
				@touchstart="touchColumn">
			</canvas>
			<!--#endif-->
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	import res from "@/common/data.json"
	import  { isJSON } from '@/common/checker.js';
	// import sortdata from '@/common/data.js'
	var _self;
	var canvaColumn=null;
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				textarea:""
				// textarea:JSON.parse(sortdata)
			}
		},
		
		created() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function (res) {
					if(res.pixelRatio>1){
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio =2;
					}
				}
			});
			//#endif
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			getServerData(){
				// uni.request({
				// 	url: 'https://www.ucharts.cn/data.json',
				// 	data:{ },
				// 	success: function(res) {
				// 		// console.log(res.data.data)
				// 		let Column={categories:[],series:[]};
				// 		//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				// 		Column.categories=res.data.data.ColumnB.categories;
				// 		Column.series=res.data.data.ColumnB.series;
				// 		_self.textarea = JSON.stringify(res.data.data.ColumnB);
				// 		_self.showColumn("canvasColumn",Column);
				// 	},
				// 	fail: () => {
				// 		_self.tips="网络错误，小程序端请检查合法域名";
				// 	},
				// });
				res.data.data = res.data;
				let Column={categories:[],series:[]};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				Column.categories=res.data.data.ColumnB.categories;
				Column.series=res.data.data.ColumnB.series;
				_self.textarea = JSON.stringify(res.data.data.ColumnB);
				_self.showColumn("canvasColumn",Column);
			},
			showColumn(canvasId,chartData){
				canvaColumn=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'column',
					padding:[15,5,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					fontSize:11,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid:true,
					},
					yAxis: {
            data:[{
              position:'right',
							axisLine:false,
              format:(val)=>{return val.toFixed(0)+'元'},
            }]
					},
					dataLabel: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						column: {
							type:'group',
							width: _self.cWidth*_self.pixelRatio*0.45/chartData.categories.length
						}
					  }
				});
				
			},
			touchColumn(e){
				canvaColumn.showToolTip(e, {
					format: function (item, category) {
						if(typeof item.data === 'object'){
							return category + ' ' + item.name + ':' + item.data.value 
						}else{
							return category + ' ' + item.name + ':' + item.data 
						}
					}
				});
				canvaColumn.touchLegend(e,{animation:true});
			},
			changeData(){
				if(isJSON(_self.textarea)){
					let newdata=JSON.parse(_self.textarea);
					canvaColumn.updateData({
						series: newdata.series,
						categories: newdata.categories,
						animation:true
					});
				}else{
					uni.showToast({
						title:'数据格式错误',
						image:'../../../static/images/alert-warning.png'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	
	// .qiun-columns {
	// 	width: 510upx;
	// 	// height: 1000upx;
	// 	// background-color: #FFB400 ;
	// 	.qiun-charts {
	// 		width: 710upx;
	// 		// height: 500upx;
	// 		.charts {
	// 			width: 710upx;
	// 			// height: 500upx;
	// 			// background-color: #FFFFFF;
	// 		}
	// 	}
	// }
	
	
	
</style>
