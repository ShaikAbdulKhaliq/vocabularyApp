import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchWords } from '../redux/wordSlice';
import { TextField, Button } from '@mui/material';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchWords(query)); // Dispatch search action with the query
  };

  return (
    <div className="search-container">
      <TextField
        label="Search Word"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch} style={{ marginTop: '10px' }}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
