const displayArea = document.getElementById("display")
const powerArea = document.getElementById("power")
let id
let time = 0
let isRunning = false
const start = () => {
	clearInterval(id)
	isRunning = true
	const power = powerArea.value < 0 ? 0 : 1 * powerArea.value
	id = setInterval(() => {
		displayArea.innerText = shapingTime(time)
		time += power
	}, 10)
}
const stop = () => {
	clearInterval(id)
	isRunning = false
}
const reset = () => {
	if(isRunning)return
	clearInterval(id)
	time = 0
	displayArea.innerText = shapingTime(time)
}

const shapingTime = (time) => {
	const now = time
	const hoge = now % 100 < 10 ? "0" + (now % 100) : "" + (now % 100)
	const sec = (now / 100 % 60 | 0) < 10 ? "0" + (now / 100 % 60 | 0) : "" + (now / 100 % 60 | 0)
	const min = (now / 6000 % 60 | 0) < 10 ? "0" + (now / 6000 % 60 | 0) : "" + (now / 6000 % 60 | 0)
	const hour = now / 360000 | 0
	return hour + ":" + min + "'" + sec + '"' + hoge
}
