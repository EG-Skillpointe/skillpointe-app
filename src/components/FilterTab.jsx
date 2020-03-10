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
    this.props.Filter(event.target.name);
  };

  render() {
    return (
        <div className="flexbox-container">
          <button className={`nav-button ${this.state.selected == 'popular' ? 'selected' : '' }`} key={'popular'} name={'popular'} onClick={(event) => this.onHandleFilterClick(event)} >Popular</button>
          {industries.industries.map(industry => { return <button className={`nav-button ${this.state.selected == industry.name ? 'selected' : '' }`} key={industry.name} name={industry.name} onClick={(event) => this.onHandleFilterClick(event)} >{industry.name}</button>})}
        </div>
    )
  }
};

export default FilterTab;
