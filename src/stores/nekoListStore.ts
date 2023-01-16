import { reactive } from 'vue'
import { defineStore } from 'pinia'

// 使用setup模式定义
export const nekoNameListStore = defineStore('binder', () => {
	const nekoNameList = reactive([
		{
			id: 0,
			gender: 'Man',
			name: '小明',
			birth: '2003-06-18',
			detail: '长得帅，黑皮体育生',
			like: '胆子大，亲人，可爱',
			location: '力学实验楼',
			coverImg: '../../static/imgs/QQ20221226-1.jpg',
		},
		{
			id: 1,
			gender: 'Man',
			name: '小明',
			birth: '2003-06-18',
			detail: '长得帅，黑皮体育生',
			like: '胆子大，亲人，可爱',
			location: '力学实验楼',
			coverImg: '../../static/imgs/QQ20221226-1.jpg',
		},
	])
	return { nekoNameList }
})
