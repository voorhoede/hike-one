function getDateFormat(date) {
	const newDate = new Date(date);
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const month = monthNames[newDate.getMonth()];
	return `${newDate.getDate()} ${month} ${newDate.getFullYear()}`;
}

export default getDateFormat;
