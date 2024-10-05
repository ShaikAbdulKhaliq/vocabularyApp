import React from 'react';
import { Modal, Box, Typography, List, ListItem } from '@mui/material';

const WordModal = ({ open, handleClose, wordData }) => {
  if (!wordData) return null; // Prevent rendering if no word data is provided

  // Extracting data from the word object
  const lexicalEntry = wordData.meaning.results[0].lexicalEntries[0];
  const entry = lexicalEntry.entries[0];
  const senses = entry.senses;

  return (
    <Modal open={open} onClose={handleClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          width: '80%',
          height: '80%',
          overflowY: 'auto',
          borderRadius: '10px',
        }}
      >
        {/* Word and Lexical Category */}
        <Typography variant="h4">
          {wordData.word} ({lexicalEntry.lexicalCategory.text})
        </Typography>

        {/* Definition */}
        <Typography variant="h6" style={{ marginTop: '10px' }}>
          <strong>Definition:</strong>
        </Typography>
        <Typography variant="body1">{senses[0].definitions[0]}</Typography>

        {/* Examples */}
        {senses[0].examples.length > 0 && (
          <>
            <Typography variant="h6" style={{ marginTop: '10px' }}>
              <strong>Examples:</strong>
            </Typography>
            <List>
              {senses[0].examples.map((example, index) => (
                <ListItem key={index} style={{ padding: '5px 0' }}>
                  - {example.text}
                </ListItem>
              ))}
            </List>
          </>
        )}

        {/* Synonyms */}
        {senses[0].synonyms.length > 0 && (
          <>
            <Typography variant="h6" style={{ marginTop: '10px' }}>
              <strong>Synonyms:</strong>
            </Typography>
            <List>
              {senses[0].synonyms.map((synonym, index) => (
                <ListItem key={index} style={{ padding: '5px 0' }}>
                  - {synonym.text}
                </ListItem>
              ))}
            </List>
          </>
        )}

        {/* Etymology */}
        {entry.etymologies.length > 0 && (
          <Typography variant="body1" style={{ marginTop: '10px' }}>
            <strong>Etymology:</strong> {entry.etymologies[0]}
          </Typography>
        )}

        {/* Pronunciations */}
        {entry.pronunciations.length > 0 && (
          <div>
            <Typography variant="body1" style={{ marginTop: '10px' }}>
              <strong>Pronunciation:</strong> {entry.pronunciations[0].phoneticSpelling}
            </Typography>
            {entry.pronunciations[0].audioFile && (
              <audio controls>
                <source src={entry.pronunciations[0].audioFile} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default WordModal;
