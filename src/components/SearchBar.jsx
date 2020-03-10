import React ,{Component} from 'react';
import industries from "../assets/mockData/industries";
import Search from '../components/Search'
import Filter from '../components/Filter'

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
    this.props.Filter(event.target.name);
  };

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
      <>
      <div style={{boxShadow: "rgba(0, 0, 0, 0.2) 0 4px 5px"}}>
        <Search search={this.props.search} headerTitle={headerTitle} location={location} placeholder={this.placeholder}/>
        <Filter/>
      </div>
      </>
    )
  }
};

export default SearchBar;
