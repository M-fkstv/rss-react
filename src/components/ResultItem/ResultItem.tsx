import { Component } from 'react';
import { PlanetData } from '../types/types';

export class ResultItem extends Component<PlanetData> {
  constructor(props: PlanetData) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          height: 'max-content',
          flexDirection: 'column',
          backgroundColor: 'red',
        }}
      >
        <p>{this.props.name}</p>
        <p>{this.props.population}</p>
        <p>{this.props.climate}</p>
        {/* <p>{this.props.terrain}</p> */}
      </div>
    );
  }
}
