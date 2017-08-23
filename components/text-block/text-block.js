import TextBlockList from '../text-block-list/text-block-list';

const TextBlock = ({color = '', alignment='', size='', listValues=''}) => (
	<div className={`text-block ${color} ${alignment} ${size}`}>
		{ listValues && 
			<TextBlockList listValues={listValues} />
		}
	</div>
);

export default TextBlock;