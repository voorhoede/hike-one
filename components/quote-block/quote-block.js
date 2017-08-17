import React from 'react';

const QuoteBlock = ({color = '', alignment='', quote = '', citeImage, citeName = '', citeTitle = '', text='', openings=''}) => (
	<blockquote className={`quote-block ${color} ${alignment}`}>
		{ quote &&		
			<span className="content">
				“{quote}”
			</span>
		}
		<cite className="quote-cite">
			<img src={citeImage} alt="" />
			<div className="quote-cite-content content">
				{ 
					Object.values(text).map(
						(item, index)=> {
							if (item.title === 'amountFanatics'){
								return <div key={index}>
									<span className="quote-title-large">{item.title}</span>
									<span className="quote-amount-large">{item.amount}</span>
								</div>		
							} else {
								return <div key={index}>
									<span className="quote-title-normal">{item.title}</span>
									<span className="quote-amount-normal">{item.amount}</span>
								</div>		
							}
							
						}
					)
				}
				<a href={openings.target} className="button-primary">
					<span>{openings.title}</span>
				</a>					
				<p className="quote-cite-name">{citeName}</p>
				<p className="quote-cite-title">{citeTitle}</p>
			</div>
		</cite>
	</blockquote>
);


export default QuoteBlock;
