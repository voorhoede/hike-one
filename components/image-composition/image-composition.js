import TeamImage1_2 from '../team-image-1-2/team-image-1-2';
import TeamImage4_3 from '../team-image-4-3/team-image-4-3';
import Person from '../person/person';

const ImageComposition = ({images=[]}) => (
	<div className="image-composition">
		{ Object.values(images).map((image, index) => {	
			return <div key={index}>
					{
						image.itemType === 'team_image_1_2' ? 
							<TeamImage1_2 image={image} /> 
							: ''
					}
					{
						image.itemType === 'team_image_4_3' ? 
							<TeamImage4_3 image={image} /> 
							: ''
					}
					{
						image.itemType === 'person' ? 
							<Person image={image} /> 
							: ''
					}
			</div>
		})}
	</div>
);

export default ImageComposition;