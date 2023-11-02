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
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 200px)',
          gap: '16px',
          justifyContent: 'center',
          backgroundColor: '#e4e4e4',
          width: '100%',
          padding: '20px 0',
          height: '100vh',
        }}
      >
        {this.props.list.map((item, index) => {
          console.log(item.terrain);
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
