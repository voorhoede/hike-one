module.exports = (dato, root) => {

	root.directory("data/current/services", (servicesDir) => {

		const mappedServicesData = dato.service.toMap();
		servicesDir.createDataFile(`services.json`, 'json', mappedServicesData);
	});

	root.directory("data/current/home", (homeDir) => {

		const mappedHomeData = dato.home.toMap();
		homeDir.createDataFile(`home.json`, 'json', mappedHomeData);
	});

	root.directory('data/current/cases', (caseDir) => {

		const casesData = dato.cases.reduce((acc,item) => {
			const mappedData = item.toMap();
			acc.push(mappedData);
			return acc;
		}, []);

		caseDir.createDataFile('cases.json', 'json', casesData);
	});
};
