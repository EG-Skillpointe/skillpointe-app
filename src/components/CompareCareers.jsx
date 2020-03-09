import React from 'react';

export const CompareCareers = (props) => {
	return (
		<div className='compare-careers'>
				<h1>Compare Careers</h1>

				<div className='careers-box'>
					<div>
                        <select>
                            <option>Plumbing</option>
                        </select>

						{
							props.career1.map(row => 
								<div className='careers-row'>
									{row.image
										? <img src={require(`../assets/images/${row.image}`)}  alt='' />
										: null
									}
									<label>{row.label}</label>
								</div>
							)
						}
					
						<div className='careers-row'>
							<button>Learn More</button>
						</div>
					</div>

					<div>
                        <select>
                            <option>Carpentry</option>
                        </select>
						{
							props.career2.map(row => 
								<div className='careers-row'>
									{row.image
										? <img src={require(`../assets/images/${row.image}`)}  alt='' />
										: null
									}
									<label>{row.label}</label>
								</div>
							)
						}
					
						<div className='careers-row'>
							<button>Learn More</button>
						</div>
					</div>
				</div>
				
			</div>
	)
};

export default CompareCareers;
