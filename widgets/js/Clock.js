class DateDayTimeYear_Clock extends Widget {

	constructor(uid, widgetId) {
		super(uid, widgetId);
		this.up = true;
		this.refresh();
		this.interval = setInterval(()=>this.refresh(), 500);
	}

	stop() {
		clearInterval(this.interval)
	}

	refresh() {
		const today = new Date();
		const h = String(today.getHours()).padStart(2, '0');
		const m = String(today.getMinutes()).padStart(2, '0');
		if (this.up) {
			this.myDiv.innerHTML = `${h}:${m}`;
		} else {
			this.myDiv.innerHTML = `${h} ${m}`;
		}
		this.up = !this.up;
	}
}
