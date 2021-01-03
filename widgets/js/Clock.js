class DateDayTimeYear_Clock {
	constructor(uid) {
		this.uid = uid;
		this.myDiv = document.querySelector(`[data-ref="DateDayTimeYear_clock_${this.uid}"]`);
		this.clockUpdate();
	}

	clockUpdate() {
		const today = new Date();
		const h = String(today.getHours()).padStart(2, '0');
		const m = String(today.getMinutes()).padStart(2, '0');
		const s = today.getSeconds();
		if (s === 0 || s % 2 === 0) {
			this.myDiv.innerHTML = `${h}:${m}`;
		} else {
			this.myDiv.innerHTML = `${h} ${m}`;
		}
		setTimeout(this.clockUpdate.bind(this), 500);
	}
}
