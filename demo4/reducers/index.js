// 分类看触发的是哪一步

export default function counter(state=0, action){
	switch(action.type){
		case "INCREMENT":
			return state+1
		case "DECREMENT":
			return state-1
		default:
			return state
	}
}