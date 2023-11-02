import { Component } from 'react';

import './App.css';
import { TopSection } from '../TopSection';
import { PlanetData } from '../types/types';
import { ResultSection } from '../ResultSection';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

interface SearchResult {
  results: PlanetData[];
}

interface State {
  planetName: string;
  error: boolean;
  results: PlanetData[];
}

interface AppProps {}

export class App extends Component<AppProps, State> {
  constructor(props: State) {
    super(props);

    const initValue = localStorage.getItem('search')
      ? (localStorage.getItem('search') as string)
      : '';

    this.state = {
      planetName: initValue,
      results: [],
      error: false,
    };

    this.fetchResults = this.fetchResults.bind(this);
    this.firstLoading = this.firstLoading.bind(this);
    this.handleChahgeSearch = this.handleChahgeSearch.bind(this);
  }

  componentDidMount() {
    this.firstLoading();
  }

  firstLoading() {
    fetch('https://swapi.dev/api/planets/')
      .then((res) => res.json())
      .then((data: SearchResult) => {
        this.setState({ ...this.state, results: data.results });
      });
  }

  handleChahgeSearch(searchValue: string) {
    this.setState({ ...this.state, planetName: searchValue });
    localStorage.setItem('search', searchValue);
  }

  fetchResults() {
    fetch('https://swapi.dev/api/planets/')
      .then((res) => res.json())
      .then((data: SearchResult) => {
        const response = data.results.filter((item) => {
          return item.name
            .toLowerCase()
            .trim()
            .includes(this.state.planetName.toLowerCase().trim());
        });

        response && this.setState({ ...this.state, results: response });
      })
      .catch(() => this.setState({ ...this.state, error: true }));
  }

  render() {
    console.log(this.state.planetName);

    return (
      <ErrorBoundary>
        <div className='app'>
          <TopSection
            initValue={this.state.planetName}
            fetchResults={this.fetchResults}
            onChange={this.handleChahgeSearch}
          />
          {this.state.error ? (
            'Alarm)'
          ) : (
            <ResultSection list={this.state.results} />
          )}
        </div>
        <button onClick={() => this.setState({ ...this.state, error: true })}>
          {' '}
          Error Test
        </button>
        <button onClick={() => this.setState({ ...this.state, error: false })}>
          {' '}
          Close Error
        </button>
      </ErrorBoundary>
    );
  }
}
