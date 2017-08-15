import TeamImage1_2 from '../team-image-1-2/team-image-1-2';
import TeamImage4_3 from '../team-image-4-3/team-image-4-3';
import Person from '../person/person';

const ImageComposition = ({images=[]}) => (
	<div className="image-composition">
		{ Object.values(images).map((image, index) => {	
			switch (image.itemType) {
				case 'team_image_1_2': 
					return <TeamImage1_2 image={image}  key={index} />; 
				case 'team_image_4_3':
					return <TeamImage4_3 image={image} key={index} />;
				case 'person':
					return <Person image={image} key={index} />; 					
			}
		})}
	</div>
);

export default ImageComposition;