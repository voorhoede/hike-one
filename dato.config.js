module.exports = (dato, root, i18n) => {

	root.directory("data/current/services", (servicesDir) => {

		const mappedServicesData = dato.service.toMap();
		servicesDir.createDataFile(`services.json`, 'json', mappedServicesData);
	});

	root.directory(`data/current/cases`, (caseDir) => {
		dato.cases.map((item) => {
			const folderName =
				item.headerTitle
					.toLowerCase()
					.replace(/[^a-zA-Z0-9\s]/g,'') // remove all special characters
					.replace(/[\s]/g,'-'); // replace all spaces with dashes

			const mappedItemData = item.toMap();
			caseDir.createDataFile(`${folderName}.json`, 'json', mappedItemData);
		});
	});
};
