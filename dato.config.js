module.exports = (dato, root) => {
	root.directory('data/current', dir => {
		dir.createDataFile('team.json', 'json', dato.team.toMap());

		const teamImages34 = dato.collectionsByType.teamImage34S;
		dir.createDataFile('teamImages34.json', 'json', teamImages34[0].toMap());

		const teamImages21 = dato.collectionsByType.teamImage21S;
		dir.createDataFile('teamImages21.json', 'json', teamImages21[0].toMap());

		const peopleData = dato.collectionsByType.people;
		dir.createDataFile('people.json', 'json', peopleData[0].toMap());

		dir.createDataFile(`services.json`, 'json', dato.service.toMap());

		dir.createDataFile(`home.json`, 'json', dato.home.toMap());

		dir.createDataFile('cases.json', 'json', mapCollection(dato.cases));

		dir.createDataFile('component-guide.json', 'json', dato.componentGuide.toMap());

		dir.createDataFile('work.json', 'json', dato.work.toMap());

		dir.createDataFile('update-overview.json', 'json', dato.updateOverview.toMap());

		dir.createDataFile('updates.json', 'json', mapCollection(dato.updates));
	});

	function mapCollection(collection) {
		return collection.reduce((acc,item) => {
			const mappedData = item.toMap();
			acc.push(mappedData);
			return acc;
		}, []);
	}
};
