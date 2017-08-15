import TeamImage1_2 from '../team-image-1-2/team-image-1-2';
import TeamImage4_3 from '../team-image-4-3/team-image-4-3';
import Person from '../person/person';
import * as ImageCompositionShapes from '../image-composition/image-composition-shapes';

const ImageComposition = ({images=[]}) => (
	<div className="image-composition">
	<ImageCompositionShapes.variation1Front position="front" key="1" />
	<ImageCompositionShapes.variation2Front position="front" key="2" />
	<ImageCompositionShapes.variation1Back position="back" key="3" />
	<ImageCompositionShapes.variation2Back position="back" key="4" />
	<ImageCompositionShapes.variation3Back position="back" key="5" />
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