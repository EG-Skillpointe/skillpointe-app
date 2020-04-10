import React ,{Component} from 'react';
import industries from "../assets/mockData/industries";

class FilterTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.industry ? this.props.industry : ''
    }
  }

  onHandleFilterClick = (event) => {
    this.setState({
      selected: event.target.name
    });

    this.props.filter(event.target.name.toLowerCase());
  };

  render() {
    return (
        <div style={{    margin: '5px 0',
          boxShadow: '0 1px 6px 0 rgba(0,0,0,.16)',
          padding: '8px',
          borderBottom: '5px solid #ddd'}}>
          <h3 className= 'filter-title'> Explore By Industry</h3>
          <div className="flexbox-container">
            <button className={`nav-button ${this.state.selected == 'popular' ? 'selected' : '' }`} key={'popular'} name={'popular'} onClick={(event) => this.onHandleFilterClick(event)} >Popular</button>
            {industries.industries.map(industry => { return <button className={`nav-button ${this.state.selected == industry.name ? 'selected' : '' }`} key={industry} name={industry.name} onClick={(event) => this.onHandleFilterClick(event)} >{industry.name}</button>})}
          </div>
        </div>
    )
  }
};

export default FilterTab;
