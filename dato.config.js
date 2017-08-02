module.exports = (dato, root) => {

	root.directory("data/current/services", (servicesDir) => {

		const mappedServicesData = dato.service.toMap();
		servicesDir.createDataFile(`services.json`, 'json', mappedServicesData);
	});

	root.directory("data/current/home", (homeDir) => {

		const mappedHomeData = dato.home.toMap();
		homeDir.createDataFile(`home.json`, 'json', mappedHomeData);
	});

	root.directory(`data/current/cases`, (caseDir) => {
		const indexData = {
			cases: []
		};

		dato.cases.map((item) => {
			const folderName =
				item.headerTitle
					.toLowerCase()
					.replace(/[^a-zA-Z0-9\s]/g,'') // remove all special characters
					.replace(/[\s]/g,'-'); // replace all spaces with dashes

			const indexObject = {
				id: folderName,
				label: item.headerTitle
			};

			const mappedItemData = item.toMap();
			caseDir.createDataFile(`${folderName}.json`, 'json', mappedItemData);
			indexData.cases.push(indexObject);
		});

		caseDir.createDataFile(`_index.json`, 'json', indexData);
	});
};
