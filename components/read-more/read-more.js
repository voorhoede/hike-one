import React from 'react';
import Link  from 'next/link';

import PrimaryButtonLink from  '../buttons/button-primary/button-primary-link';
import ArrowRight from '../icons/arrow-right/arrow-right';

class ReadMore extends React.Component {
    render() {
        const props = this.props;
        return (
            <section className="read-more container">
                <div className="read-more-highlight" style={{backgroundImage: `url(${props.imageBlock.image})`}} >
                    <h2>{props.imageBlock.title}</h2>
                    <PrimaryButtonLink href={props.imageBlock.buttonTarget} value={props.imageBlock.buttonValue} />
                </div>
                <div className="read-more-links">
                    {props.buttons.map((item, i) => {
                        return (
                            <div key={i}>
                                <Link href={item.link}><a>{item.title}<ArrowRight /></a></Link>
                                <p>{item.subtext}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}

export default ReadMore;
