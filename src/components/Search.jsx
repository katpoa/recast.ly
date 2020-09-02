var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" id="query" type="text" />
    <button onClick={() => { props.onSearchClick($('#query').val()); }} className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// onChange={(e) => props.liveSearch(e.target.value)}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
