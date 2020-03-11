import React from 'react';

export const CompareCareers = (props) => {
	return (
		<div className='compare-careers'>
				<h1>Compare Careers</h1>

				<div className='careers-box'>
					<div>
                        <select style={{backgroundColor: "white" }}>
                            <option>Plumbing</option>
							<option>Carpentry</option>
							<option>Nursing</option>
							<option>Electrician</option>
							<option>Welding</option>
							<option>Human Services</option>
							<option>Hospitality</option>
							<option>Construction</option>
                        </select>

						{
							props.career1.map(row => 
								<div className='careers-row'>
									{row.image
										? <div className='icon'><img src={require(`../assets/images/${row.image}`)}  alt='' /></div>
										: null
									}
									<label>{row.label}</label>
								</div>
							)
						}
					
						<div className='careers-row careers-row-btn'>
							<button>Learn More</button>
						</div>
					</div>

					<div>
                        <select style={{backgroundColor: "white" }}>
                            <option>Carpentry</option>
							<option>Plumbing</option>
							<option>Nursing</option>
							<option>Electrician</option>
							<option>Welding</option>
							<option>Human Services</option>
							<option>Hospitality</option>
							<option>Construction</option>
                        </select>
						{
							props.career2.map(row => 
								<div className='careers-row'>
									{row.image
										? <div className='icon'><img src={require(`../assets/images/${row.image}`)}  alt='' /></div>
										: null
									}
									<label>{row.label}</label>
								</div>
							)
						}
					
						<div className='careers-row careers-row-btn'>
							<button>Learn More</button>
						</div>
					</div>
				</div>
				
			</div>
	)
};

export default CompareCareers;
