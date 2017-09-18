
const StatisticsBlock = ({color = '', alignment='', summary='', groups=[], link=''}) => (
	<div className={`text-block ${color} ${alignment}`}>
			<div className="statistics">
				{ summary &&
					<div className="statistics-large statistics-large-divider">
						<span className="statistics-amount-large">{summary.count}</span>
						<span className="statistics-title-large">{summary.label}</span>
					</div>
				}
				{ groups &&
					<div className="statistic-combination">
						<div className="statistic-combination-items">
						{ groups.map(
							(item, index) => (
								<div key={index} className="statistics-normal">
									<span className="statistics-amount-normal">{item.count}</span>
									<span className="statistics-title-normal">{item.label}</span>
								</div>
							)
						)}
						</div>
						{ link &&
							<div className="statistics-call-to-action">
								<a href={link.target} className="btn-primary">
									<span>{link.label}</span>
								</a>
							</div>
						}
					</div>
				}
			</div>
	</div>
);

export default StatisticsBlock;
