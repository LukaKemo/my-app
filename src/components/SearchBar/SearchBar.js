import React from 'react';
import {
    SearchBar as SearchBox,
    SearchBarContainer
} from './SearchBarStyle';
const SearchBar = ({ 
    keyword,
 }) => {
  return (
        <SearchBarContainer>
            <SearchBox
                key="random"
                value={keyword}
                placeholder={"Search events by the title..."}
                />
        </SearchBarContainer>
  )
}

export default SearchBar;