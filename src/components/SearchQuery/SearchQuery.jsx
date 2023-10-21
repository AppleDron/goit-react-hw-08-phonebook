import React from 'react';
import { setFilter } from 'redux/filter/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SearchQueryContainer } from './SearchQuery.styled';
import { selectFilter } from 'redux/selectors';
import { StyledInput, StyledLabel } from 'components/Form/Form.styled';

const SearchQuery = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const filterContacts = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <SearchQueryContainer>
      <StyledLabel>Find contacts by name: </StyledLabel>
      <StyledInput value={filter} type="text" onChange={filterContacts} />
    </SearchQueryContainer>
  );
};

export default SearchQuery;
