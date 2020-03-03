import React ,{Component} from 'react';
import industries from "../assets/mockData/industries";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: '',
      searchValue: '',
      dirty: false
    }
  }

  onHandleFilterClick = (event) => {
    this.setState({
      selected: event.target.name
    });
    this.props.filter(event.target.name);
  };

  searchChanged = e => {
    this.setState({searchValue: e.target.value, dirty: true})
    if (e.target.value.length===0 && this.state.dirty) {
     // this.setTerm(e);
     // this.props.clearSearch();
      this.setState({dirty:false})}
  };

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      const searchTerm = this.state.searchValue.toLowerCase();
     // this.props.doSearch(searchTerm);
     // this.setTerm(e);
    }
  };

  render() {
    return (
        <div>
        <div className="col-sm-6 search">
          <input className=""
                 style={{width:"100%", boxShadow:"0px 0px 7px rgba(248, 161, 65, 0.3)", lineHeight:"2"}}
                 onChange={this.searchChanged}
                 value={this.state.searchValue.length > 0 ? this.state.searchValue : this.props.searchValue}
                 onKeyDown={this.handleKeyDown}
                 placeholder={this.props.placeholder}/>
        </div>
          <input  style={{width:"50%", boxShadow:"0px 0px 7px rgba(248, 161, 65, 0.3)", marginRight:'5px', lineHeight:"2"}}
                  />
        <button className="orange-button" style={{width:"40%", boxShadow:"0 0 11.3636px rgba(255, 183, 103, 0.2)", margin:'5px'}}>Search</button>
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
