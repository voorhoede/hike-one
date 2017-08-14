module.exports = (dato, root) => {

	root.directory("data/current", dir => {
		const mappedTeamData = dato.team.toMap();
		dir.createDataFile(`team.json`, 'json', mappedTeamData);

		const mappedServicesData = dato.service.toMap();
		dir.createDataFile(`services.json`, 'json', mappedServicesData);

		const mappedHomeData = dato.home.toMap();
		dir.createDataFile(`home.json`, 'json', mappedHomeData);

		const casesData = dato.cases.reduce((acc,item) => {
			const mappedData = item.toMap();
			acc.push(mappedData);
			return acc;
		}, []);

		dir.createDataFile('cases.json', 'json', casesData);

		const mappedGuideData = dato.componentGuide.toMap();
		dir.createDataFile('component-guide.json', 'json', mappedGuideData);

	});
};
