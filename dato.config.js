module.exports = (dato, root) => {

	root.directory("data/current", dir => {
		const mappedTeamData = dato.team.toMap();
		dir.createDataFile('team.json', 'json', mappedTeamData);

		const teamImages34 = dato.collectionsByType.teamImage34S;
		dir.createDataFile('teamImages34.json', 'json', teamImages34[0].toMap());

		const teamImages21 = dato.collectionsByType.teamImage21S;
		dir.createDataFile('teamImages21.json', 'json', teamImages21[0].toMap());

		const peopleData = dato.collectionsByType.people;
		dir.createDataFile('people.json', 'json', peopleData[0].toMap());

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

		const mappedWorkData = dato.work.toMap();
		dir.createDataFile('work.json', 'json', mappedWorkData);
		
		const mappedUpdateData = dato.update.toMap();
		dir.createDataFile('update.json', 'json', mappedUpdateData);

	});
};
