import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWord } from '../redux/wordSlice';
import SearchBar from '../components/SearchBar';
import WordCard from '../components/WordCard';
import WordModal from '../components/WordModal'; // Import the modal component
import { Button, TextField, Typography } from '@mui/material';

const HomePage = () => {
  const [newWord, setNewWord] = useState('');
  const [selectedWord, setSelectedWord] = useState(null); // State to hold the selected word data
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility
  const [error, setError] = useState(''); // State to hold error message
  const dispatch = useDispatch();
  const words = useSelector((state) => state.words.list); // Get words from Redux state

  const handleAddWord = () => {
    if (newWord.trim().toLowerCase().startsWith('a')) { // Check if word starts with 'a'
      dispatch(addWord(newWord)); // Dispatch action to add word
      setNewWord(''); // Clear input after adding
      setError(''); // Clear error message if successful
    } else {
      setError('Must add words starting with the letter "A".'); // Set error message
    }
  };

  const handleCardClick = (word) => {
    setSelectedWord(word); // Set the selected word for the modal
    setModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
    setSelectedWord(null); // Clear selected word
  };

  return (
    <div className="app-container">
      <h1>Vocabulary App</h1>
      <TextField
        label="Add New Word"
        variant="outlined"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={handleAddWord}>
        Add Word
      </Button>

      {/* Display error message if there is one */}
      {error && (
        <Typography variant="body2" color="error" style={{ marginTop: '10px' }}>
          {error}
        </Typography>
      )}

      <SearchBar /> {/* Search bar for querying words */}

      {words.map((word) => (
        <WordCard key={word._id} wordData={word} onClick={() => handleCardClick(word)} /> // Pass onClick handler
      ))}

      {/* Modal for displaying detailed word information */}
      <WordModal open={modalOpen} handleClose={handleCloseModal} wordData={selectedWord} />
    </div>
  );
};

export default HomePage;
