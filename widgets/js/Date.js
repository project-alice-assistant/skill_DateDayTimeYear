class DateDayTimeYear_Date extends Widget{

	constructor(uid, widgetId) {
		super(uid, widgetId);
		this.refresh();
		this.interval = setInterval(()=>this.refresh(), 10000);
	}

	stop() {
		clearInterval(this.interval)
	}

	refresh() {
		const today = new Date();
		const d = String(today.getDate()).padStart(2, '0');
		const m = String(today.getMonth() + 1).padStart(2, '0');
		const y = String(today.getFullYear());
		this.myDiv.innerHTML = `${d}.${m}.${y}`;
	}
}
