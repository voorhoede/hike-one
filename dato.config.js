module.exports = (dato, root, i18n) => {

	root.directory("data/current/services", (servicesDir) => {

		const mappedServicesData = dato.service.toMap();
		servicesDir.createDataFile(`services.json`, 'json', mappedServicesData);
	});
};
