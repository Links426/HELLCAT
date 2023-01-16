<template>
	<view class="index-bg">
		<!-- 顶部 -->
		<view>
			<input type="text" placeholder="搜索猫猫名字" class="index-top-search" />
		</view>
		<!-- 内容 -->
		<view class="index-content">
			<view
				class="index-content-card"
				v-for="item in nekoList"
				:key="item.id"
				@click="toDeatil"
			>
				<!-- 顶部图片 -->
				<view
					class="index-content-card-top"
					:style="{
						backgroundImage: 'url(' + item.coverImg + ')',
						backgroundSize: 'cover',
					}"
				>
				</view>
				<!-- 底部信息 -->
				<view class="index-content-card-bottom">
					<!-- 名字 -->
					<view class="index-content-card-bottom-name-woman">
						<view>{{ item.name }}</view>
						<view class="index-content-card-bottom-gender-woman">
							<img
								src="@/static/icons/woman.png"
								class="index-content-card-bottom-gender-woman-img"
							/>
						</view>
					</view>
					<!-- 信息 -->
					<view class="index-content-card-bottom-message">
						<!-- 生日 -->
						<view class="index-content-card-bottom-message-birth">
							<img
								src="@/static/icons/birth.png"
								class="index-content-card-bottom-message-birth-img"
							/>
							<view class="index-content-card-bottom-message-birth-text">{{
								item.birth
							}}</view>
						</view>
						<!-- 信息 -->
						<view class="index-content-card-bottom-message-birth">
							<img
								src="@/static/icons/card.png"
								class="index-content-card-bottom-message-birth-img"
							/>
							<view class="index-content-card-bottom-message-birth-text">{{
								item.detail
							}}</view>
						</view>
						<!-- 爱好 -->
						<view class="index-content-card-bottom-message-like">
							<view class="flex">
								<img
									src="@/static/icons/like.png"
									class="index-content-card-bottom-message-birth-img"
								/>
								<view class="index-content-card-bottom-message-birth-text">{{
									item.like
								}}</view>
							</view>
							<!-- 位置 -->
							<view class="index-content-card-bottom-message-location">
								<img
									src="@/static/icons/location.png"
									class="index-content-card-bottom-message-location-img"
								/>
								<view>{{ item.location }}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { nekoNameListStore } from '@/stores/nekoListStore'
const nekoStore = nekoNameListStore()
const { nekoNameList } = storeToRefs(nekoStore)
const nekoList = nekoNameList.value
const toDeatil = () => {
	uni.navigateTo({
		url: '/pages/index/index-detail',
	})
}
</script>

<style>
.index-bg {
	background: #f7f7f9;
	height: 100%;
	width: 750rpx;
	padding-top: 28rpx;
}
.index-top-search {
	width: 620rpx;
	height: 60rpx;
	font-size: 24rpx;
	margin-left: 28rpx;
	padding-left: 36rpx;
	border-radius: 36rpx;
	color: #777777;
	background: #fff;
}
.index-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 44rpx;
}
.index-content-card {
	width: 620rpx;
	height: 776rpx;
	margin-bottom: 40rpx;
	background: #ffffff;
	box-shadow: 0rpx 8rpx 28rpx 6rpx rgba(159, 209, 255, 0.2);
	border-radius: 16rpx 16rpx 16rpx 16rpx;
}
.index-content-card-top {
	height: 506rpx;
	width: 100%;
	border-radius: 16rpx 16rpx 0rpx 0rpx;
}
.index-content-card-bottom {
	padding: 20rpx 28rpx 28rpx 28rpx;
}
.index-content-card-bottom-name-woman {
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #fc937b;
	letter-spacing: 8rpx;
}
.index-content-card-bottom-name-man {
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #598df9;
	letter-spacing: 8rpx;
	font-weight: 600;
}
.index-content-card-bottom-gender-woman {
	width: 52rpx;
	height: 52rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fc937b;
	border-radius: 36rpx 36rpx 36rpx 36rpx;
}
.index-content-card-bottom-gender-woman-img {
	width: 36rpx;
	height: 36rpx;
}
.index-content-card-bottom-message {
	display: flex;
	flex-direction: column;
}
.flex {
	display: flex;
}
.index-content-card-bottom-message-birth-img {
	width: 32rpx;
	height: 32rpx;
	margin-right: 12rpx;
}
.index-content-card-bottom-message-birth {
	display: flex;
	padding-top: 20rpx;
	font-size: 24rpx;
	color: #979797;
}
.index-content-card-bottom-message-like {
	display: flex;
	justify-content: space-between;
	padding-top: 12rpx;
	align-items: center;
	font-size: 24rpx;
	color: #979797;
}
.index-content-card-bottom-message-location {
	padding-left: 24rpx;
	padding-right: 24rpx;
	height: 52rpx;
	display: flex;
	align-items: center;
	color: #fff;
	background: #598df9;
	border-radius: 40rpx;
	opacity: 1;
}
.index-content-card-bottom-message-location-img {
	width: 36rpx;
	height: 36rpx;
}
.flex {
	display: flex;
}
.test {
	height: 6000rpx;
	width: 40rpx;
	background: #000;
}
</style>
