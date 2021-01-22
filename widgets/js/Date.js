class DateDayTimeYear_Date {
	constructor(uid) {
		this.uid = uid;
		this.div = document.querySelector(`[data-ref="DateDayTimeYear_date_${this.uid}"]`);
		this.dateUpdate();
	}

	dateUpdate() {
		const today = new Date();
		const d = String(today.getDate()).padStart(2, '0');
		const m = String(today.getMonth() + 1).padStart(2, '0');
		const y = String(today.getFullYear());
		this.div.innerHTML = `${d}.${m}.${y}`;
		setTimeout(this.dateUpdate.bind(this), 10000);
	}
}
