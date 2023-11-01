import { Component } from 'react';

import './ResultSection.css';
import { ResultItem } from '../ResultItem';
import { Planets } from '../types/types';

export class ResultSection extends Component<Planets> {
  constructor(props: Planets) {
    super(props);
    this.state = {
      result: [],
    };
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          backgroundColor: 'green',
          height: '80px',
          width: '100%',
        }}
      >
        {this.props.list.map((item, index) => {
          return (
            <ResultItem
              key={index}
              name={item.name}
              population={item.population}
              climate={item.climate}
              terrain={item.terrain}
            />
          );
        })}
      </div>
    );
  }
}
