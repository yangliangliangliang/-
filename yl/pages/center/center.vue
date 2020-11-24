<template>
	<view class="container">
		<!-- <scroll> -->
			<!-- 常见问题 -->
			<view class="problem">
				<view class="problem_title">
					<text>常见问题</text>
					<image src="@/static/imgs/center/cjwt@2x.png" mode=""></image>
				</view>
				<view v-for="(item, index) in list" :key="index">
					<!-- <uni-section :title="item.name" type="line"></uni-section> -->
					<uni-collapse ref="add" class="warp" @change="change">
						<uni-collapse-item v-for="(sub, key) in item.data" :key="key" :open="sub.open" :show-animation="sub.showAnimation" :disabled="sub.disabled" :title="sub.subName">
							<template v-if="!sub.type">
								<text class="content">{{ sub.content }}</text>
							</template>
							<template v-else>
								<uni-list>
									<uni-list-item v-for="(list, listIndex) in sub.subList" :key="listIndex" :title="list.title" :note="list.note" :thumb="list.thumb" :show-extra-icon="list.showExtraIcon" :extra-icon="list.extraIcon" :show-switch="list.showSwitch" @switchChange="change" />
								</uni-list>
							</template>
						</uni-collapse-item>
					</uni-collapse>
				</view>
			</view>
			
			
			<!-- 其他问题 -->
			<view class="problem">
				<view class="problem_title">
					<text>其他问题</text>
					<image src="@/static/imgs/center/cjwt@2x.png" mode=""></image>
				</view>
				<view v-for="(item, index) in list" :key="index">
					<!-- <uni-section :title="item.name" type="line"></uni-section> -->
					<uni-collapse ref="add" class="warp" @change="change">
						<uni-collapse-item v-for="(sub, key) in item.data_2" :key="key" :open="sub.open" :show-animation="sub.showAnimation" :disabled="sub.disabled" :title="sub.subName">
							<template v-if="!sub.type">
								<text class="content">{{ sub.content }}</text>
							</template>
							<template v-else>
								<uni-list>
									<uni-list-item v-for="(list, listIndex) in sub.subList" :key="listIndex" :title="list.title" :note="list.note" :thumb="list.thumb" :show-extra-icon="list.showExtraIcon" :extra-icon="list.extraIcon" :show-switch="list.showSwitch" @switchChange="change" />
								</uni-list>
							</template>
						</uni-collapse-item>
					</uni-collapse>
				</view>
			</view>
		<!-- </scroll> -->
	</view>
</template>



<script>
	import uniCollapse from '@/components/collapse/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/collapse/uni-collapse-item/uni-collapse-item.vue'
	import uniList from '@/components/collapse/uni-list/uni-list.vue'
	import uniListItem from '@/components/collapse/uni-list-item/uni-list-item.vue'
	// import uniSection from '@/components/collapse/uni-section/uni-section.vue'

	export default {
		components: {
			// uniSection,
			uniCollapse,
			uniCollapseItem,
			uniList,
			uniListItem
		},
		data() {
			const listData = 
			[
				{
					data: 
					[
				
						{
							type: false,//控制内容是否显示展开
							subName: '收益怎么算？',
							content: '折叠列表内容，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
						},
						{
							type: false,//控制内容是否显示展开
							subName: '机器质量如何保修吗？ ',
							content: '折叠列表内容，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
						},
						{
							type: false,//控制内容是否显示展开
							subName: '什么时候有收益？',
							content: '主网上线后，会每天发放收益，可在收益中查看，每天的搜收益收益是收益。'
						},
						
					]
				},
				{
					data_2: 
					[
				
						{
							type: false,//控制内容是否显示展开
							subName: '怎么修改密码？',
							content: '折叠列表内容，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
						},
						{
							type: false,//控制内容是否显示展开
							subName: '怎么充值？',
							content: '折叠列表内容，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
						},
						{
							type: false,//控制内容是否显示展开
							subName: '怎么提现？',
							content: '在个人中心，总资产板块点击提现按钮，然后按操作来就可以体系拿了了了提现了。'
						},
						
					]
				},
			]
			return {
				list: listData,
			}
		},
		methods: {
			change(e) {}
		}
	}
</script>

<style lang="scss" scoped>
	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('~@/static/uni.ttf') format('truetype');
	}
	
	/* #endif */
	
	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}
	
	.container{
		font-size: 28rpx;
		color: #333333;
		.problem{
			width: 718rpx;
			background: #FFFFFF;
			margin: auto;
			margin-top: 21rpx !important;
			.problem_title{
				// display: flex;
				// align-items: center;
				// flex: 1;
				// flex-shrink: 0;
				padding-left: 25rpx;
				padding-top: 42rpx;
				image{
					width: 36rpx;
					height: 36rpx;
					padding-left: 18rpx;
				}
			}
		}& .other{
			margin-top: 21rpx;
		}
		/* #endif */
		.example {
			padding: 0 30rpx;
		}
		
		.example-info {
			/* #ifndef APP-NVUE */
			display: block;
			/* #endif */
			padding: 30rpx;
			color: #3b4144;
			background-color: #ffffff;
			font-size: 30rpx;
		}
		
		.content {
			padding: 15px;
			font-size: 14px;
			line-height: 20px;
			background-color: #f9f9f9;
			color: #666;
		}
	}
</style>
