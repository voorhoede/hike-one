module.exports = (dato, root, i18n) => {

	root.directory("data/services", (servicesDir) => {

		// const itemsData = dato.servicesItems.reduce((acc, record) => {
		// 	const mappedData = record.toMap();
		// 	acc.items.push(mappedData);
		// 	return acc;
		// }, {items: []});
		//
		// servicesDir.createDataFile(`items.json`, 'json', itemsData);
		//
		// const approachData = dato.servicesApproach.toMap();
		// servicesDir.createDataFile(`approach.json`, 'json', approachData);
		//
		// const introData = dato.servicesIntro.toMap();
		// servicesDir.createDataFile(`intro.json`, 'json', introData);
		//
		// const overviewData = dato.servicesOverview.toMap();
		// servicesDir.createDataFile(`overview.json`, 'json', overviewData);

		const mappedServicesData = dato.service.toMap();
		servicesDir.createDataFile(`services.json`, 'json', mappedServicesData);
	});
};
