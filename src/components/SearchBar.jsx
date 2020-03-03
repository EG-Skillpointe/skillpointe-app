import React ,{Component} from 'react';
import industries from "../assets/mockData/industries";
import image from "../assets/images/location-icon.png";
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: '',
      query: '',
    }
  }

  onHandleFilterClick = (event) => {
    this.setState({
      selected: event.target.name
    });
    this.props.filter(event.target.name);
  };

  searchChanged = (e) => {
    this.setState({
      query: e.target.value
    })
  };



  render() {
    return (
        <div>
        <div className="col-sm-6 search">
          <input value={this.state.query}
                 style={{width:"100%", boxShadow:"0px 0px 7px rgba(248, 161, 65, 0.3)", lineHeight:"2"}}
                 onChange={this.searchChanged}
                 placeholder='Search for training opportunities'/>
        </div>
          <div className="location-input-div">
            <img src={image} alt='' className="location-image"/>
            <input className="location-input"
                   value={this.props.location}
            />
            <button className="search-button" onClick={() => this.props.search(this.state.query)} >Search</button>
          </div>


          <div>
          <div className="flexbox-container">
            <button className={`nav-button ${this.state.selected == 'popular' ? 'selected' : '' }`} key={'popular'} name={'popular'} onClick={(event) => this.onHandleFilterClick(event)} >Popular</button>
            {industries.industries.map(industry => { return <button className={`nav-button ${this.state.selected == industry.name ? 'selected' : '' }`} key={industry.name} name={industry.name} onClick={(event) => this.onHandleFilterClick(event)} >{industry.name}</button>})}
          </div>
        </div>
        </div>
    )
  }
};

export default SearchBar;
