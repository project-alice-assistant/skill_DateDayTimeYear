class DateDayTimeYear_Date extends Widget{
	constructor(uid, widgetId) {
		super(uid, widgetId);
		this.dateUpdate();
	}

	dateUpdate() {
		const today = new Date();
		const d = String(today.getDate()).padStart(2, '0');
		const m = String(today.getMonth() + 1).padStart(2, '0');
		const y = String(today.getFullYear());
		this.myDiv.innerHTML = `${d}.${m}.${y}`;
		setTimeout(this.dateUpdate.bind(this), 10000);
	}
}
