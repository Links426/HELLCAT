<template>

	<view class="index-bg">
		<view class="index-top-bg">
            <view>das</view>
        </view>
	</view>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { nekoNameListStore } from '@/stores/nekoListStore'
const nekoStore = nekoNameListStore()
const { nekoNameList } = storeToRefs(nekoStore)
const nekoList = nekoNameList.value
</script>

<style scoped>
.index-bg {
	background: #fff;
	height: 100%;
	width: 750rpx;
}
.index-top-bg {
	height: 102px;
	width: 100%;
	background: #598df9;
}
</style>
