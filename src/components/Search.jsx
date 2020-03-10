import React ,{Component} from 'react';
import locationIcon from "../assets/images/location-icon.png";
import searchIcon from "../assets/images/search.png"
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    }
  }

  searchChanged = (e) => {
    this.setState({
      query: e.target.value
    })
  };

  render() {
    const headerTitle = this.props.headerTitle ?? 'Find People'
    const placeholder = this.props.placeholder ?? 'Search for training opportunities...'
    const location = this.props.location ?? 'Atlanta, GA'

    return (
        <div style={{backgroundColor:"white"}}>
          <h1 className="search-header">{headerTitle}</h1>
          <div className="search-container">
            <img src={searchIcon} alt='' className='search-icon'></img>
            <input value={this.state.query} onChange={this.searchChanged} placeholder={placeholder} className="search-input"></input>
          </div>
          <div className="search-container">
            <img src={locationIcon} alt='' className='location-icon'></img>
            <input placeholder={location} className="search-location-input"></input>
            <button className="search-button" onClick={()=> this.props.search(this.state.query) }>Search</button>
          </div>
        </div>
    )
  }
};

export default Search;
