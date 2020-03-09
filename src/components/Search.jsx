import React ,{Component} from 'react';
import image from "../assets/images/location-icon.png";
import search from "../assets/images/search.png"
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

    return (
        <div>
          <h1 className="search-header">{headerTitle}</h1>
          <div className="col-sm-6 search" style={{marginLeft: "12px", marginRight: "12px"}}>
            <img src={search} alt='' className="search-image"/>
            <input value={this.state.query}
                   style={{width:"100%", boxShadow:"0px 0px 7px rgba(248, 161, 65, 0.3)", lineHeight:"2", paddingLeft:"25px", marginTop:"0px", borderRadius: "6px", fontFamily: "Roboto"}}
                   onChange={this.searchChanged}
                   placeholder={placeholder}/>
          </div>
          <div className="location-input-div">
            <img src={image} alt='' className="location-image"/>
            <input className="location-input"
                   value={this.props.location}
            />
            <button className="search-button" onClick={() => this.props.search(this.state.query)} >Search</button>
          </div>
        </div>
    )
  }
};

export default Search;
