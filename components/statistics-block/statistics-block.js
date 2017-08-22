
const StatisticsBlock = ({color = '', alignment='', statisticsSingle='', statisticsCombination=[], jobOpenings=''}) => (	
	<div className={`text-block ${color} ${alignment}`}>
			<div className="statistics">
				{ statisticsSingle &&
					<div className="statistics-large statistics-large-divider">
						<span className="statistics-amount-large">{statisticsSingle.amount}</span>
						<span className="statistics-title-large">{statisticsSingle.title}</span>
					</div>		
				}
				{ statisticsCombination &&
					<div className="statistic-combination">
						<div className="statistic-combination-items">
						{ 
							Object.values(statisticsCombination).map(
								(item, index) => {		
									return (
										<div key={index} className="statistics-normal">
											<span className="statistics-amount-normal">{item.amount}</span>
											<span className="statistics-title-normal">{item.title}</span>
										</div>
									)
								}
							)
						}
						</div>
						{ jobOpenings &&
							<div className="statistics-call-to-action">
								<a href={jobOpenings.target} className="btn-primary">
									<span>{jobOpenings.title}</span>
								</a>
							</div>
						}
					</div>
				}
			</div>
	</div>
);

export default StatisticsBlock;