import { Component } from 'react';

import './App.css';
import { TopSection } from '../TopSection';
import { PlanetData } from '../types/types';
import { ResultSection } from '../ResultSection';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

// import { Data } from '../types/types';

// interface SearchResult {
//   results: PlanetData[];
// }

interface State {
  planetName: string;
  climate?: string;
  terrain?: string;
  population?: string;
  count?: number;
  next?: string;
  results: PlanetData[];
  value: string;
}

interface AppProps {}

export class App extends Component<AppProps, State> {
  constructor(props: State) {
    super(props);

    this.state = {
      planetName: '',
      results: [],
      value: '',
    };
    // const storage = localStorage.getItem('search') || [];

    this.fetchResults = this.fetchResults.bind(this);
    this.firstLoading = this.firstLoading.bind(this);
    this.handleChahgeSearch = this.handleChahgeSearch.bind(this);
  }

  componentDidMount() {
    this.firstLoading();
  }

  firstLoading() {
    localStorage.getItem('search')
      ? this.setState({
          ...this.state,
          value: JSON.stringify(localStorage.getItem('search')),
        })
      : this.setState({ ...this.state, value: '' }); //TODO : заменить
  }

  handleChahgeSearch(searchValue: string) {
    this.setState({ ...this.state, value: searchValue });
    localStorage.setItem('lastSearch', searchValue);
  }

  fetchResults() {
    fetch('https://swapi.dev/api/planets/')
      .then((res) => res.json())
      .then((data: State) => {
        this.setState({ ...this.state, results: data.results });

        localStorage.setItem('search', JSON.stringify(data.results)); // заменить
      });
  }

  render() {
    return (
      <ErrorBoundary>
        <div className='app'>
          <TopSection
            fetchResults={this.fetchResults}
            onChange={this.handleChahgeSearch}
          />
          <ResultSection list={this.state.results} />
        </div>
      </ErrorBoundary>
    );
  }
}
