import { Component } from 'react';
import { Button } from '../Button';

import './TopSection.css';
import { SearchField } from '../SearchField';

interface Props {
  fetchResults: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onChange: (value: string) => void;
}

export class TopSection extends Component<Props> {
  render() {
    return (
      <div className='top-section'>
        <SearchField onChange={this.props.onChange} />
        <Button onClick={this.props.fetchResults} />
      </div>
    );
  }
}
