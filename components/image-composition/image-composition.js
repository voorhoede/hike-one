
import React from 'react';

import TeamImage2_1 from '../team-image-2-1/team-image-2-1';
import TeamImage2_1Data from '../../data/current/teamImages21.json';

import TeamImage3_4 from '../team-image-3-4/team-image-3-4';
import TeamImage3_4Data from '../../data/current/teamImages34.json';

import Person from '../person/person';
import PeopleData from '../../data/current/people.json';

const ImageComposition = ({children}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');
	
	return (
		<div className="image-composition">
			{parallaxLayerBack}
			<TeamImage2_1 image={TeamImage2_1Data}  />
			<TeamImage3_4 image={TeamImage3_4Data}  />
			<Person image={PeopleData}  />	
			{parallaxLayerFront}
		</div>
	)
};

export default ImageComposition;