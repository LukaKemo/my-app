import React from 'react';
import {
    SearchBarBox,
    SearchBarContainer
} from './SearchBarStyle';
const SearchBar = props => {
  return (
        <SearchBarBox>
            <SearchBarContainer
                type='text'
                placeholder={props.placeholder}
                disabled={props.disabled}
                onChange={event => props.onValueChange(event.target.value)}
                />
        </SearchBarBox>
  )
}

export default SearchBar;