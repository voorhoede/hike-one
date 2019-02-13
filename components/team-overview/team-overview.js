import Collage from '../collage/collage';
import Contact from '../contact/contact';
import * as ContactShapes from '../contact/contact-shapes';
import FiftyFifty from '../50-50/50-50';
import ImageCombo from '../image-combo/image-combo';
import ImageCompositionSmall from '../image-composition-small/image-composition-small';
import * as ImageCompositionSmallShapes from '../image-composition-small/image-composition-small-shapes';
import ImageGallery from '../image-gallery/image-gallery';
import StatisticsBlock from '../statistics-block/statistics-block';
import TeamImage from '../team-image/team-image';
import TextCenter from '../text-center/text-center';

const teamOverview = ({data}) => (
    <div>
        <Collage
            title={data.collage.title}
            text={data.collage.text}
            imageMedium={data.collage.imageBig.url}
            imageSmall={data.collage.imageSmall.url}>
        </Collage>

        <ImageCombo>
            <ImageGallery
                title={data.galleryTitle}
                items={[
                    {
                        title: 'AMS',
                        url: data.amsterdamOffice.url
                    },
                    {
                        title: 'RTM',
                        url: data.rotterdamOffice.url
                    },
                    {
                        title: 'EHV',
                        url: data.eindhovenOffice.url
                    }
                ]}/>
            <StatisticsBlock
                color='blue'
                alignment='text-block-right'
                summary={{
                    label: data.statistics.summaryLabel,
                    count: data.statistics.summaryCount
                }}
                groups={[
                    {
                        label: data.statistics.group1Label,
                        count: data.statistics.group1Count
                    },{
                        label: data.statistics.group2Label,
                        count: data.statistics.group2Count
                    },{
                        label: data.statistics.group3Label,
                        count: data.statistics.group3Count
                    }
                ]}
                link={{
                    target: data.statistics.linkTarget,
                    label: data.statistics.linkLabel,
                }} />
        </ImageCombo>

        { data.content.map((component, index) => {
            switch (component.itemType) {
                case '40_60_text_right':
                    return (
                        <FiftyFifty
                            key={index}
                            title={component.title}
                            text={component.text}
                            imageLarge="true"
                            image={component.image.url} >
                        </FiftyFifty>
                    );
                case '40_60_text_left':
                    return (
                        <FiftyFifty
                            key={index}
                            title={component.title}
                            contentLeft="true"
                            text={component.text}
                            imageLarge="true"
                            image={component.image.url} >
                        </FiftyFifty>
                    );
                case 'text_center':
                    return (
                        <TextCenter
                            key={index}
                            title={component.title}
                            text={component.text} />
                    );
            }
        })}

        { data.imageComposition &&
            <ImageCompositionSmall
                image21={data.imageComposition.teamImage21}
                image34={data.imageComposition.teamImage34Large}
                image34Small={data.imageComposition.teamImage34Small} >
                <ImageCompositionSmallShapes.variation1Front position="front"/>
                <ImageCompositionSmallShapes.variation1Back position="back"/>
            </ImageCompositionSmall>
        }

        {
            data.teamImage916 &&
            <TeamImage
                title={data.teamImage916.title}
                image={data.teamImage916.photo.url}
            />
        }

        <Contact
            title={data.contact.title}
            button={data.contact.button}
            link={data.contact.externalLink}
            target='_blank' >
            <ContactShapes.variation1Front position="front" />
        </Contact>
    </div>
);

export default teamOverview;
