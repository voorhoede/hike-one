import React from 'react';
import Link  from 'next/link';

import PrimaryButtonLink from  '../buttons/button-primary/button-primary-link';
import ArrowRightRound from '../icons/arrow-right-round/arrow-right-round';

class ReadMore extends React.Component {
    render() {
        const props = this.props;
        return (
            <section className="read-more container">
                <div className="read-more-highlight" style={{backgroundImage: `url(${props.highlight.image})`}} >
                    <h2>{props.highlight.title}</h2>
                    <PrimaryButtonLink href={props.highlight.href} value={props.highlight.linkLabel} />
                </div>
                <div className="read-more-links">
                    {props.links.map((item, i) => {
                        return (
                            <div key={i}>
                                <Link href={item.href}><a>{item.title} <ArrowRightRound /></a></Link>
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
