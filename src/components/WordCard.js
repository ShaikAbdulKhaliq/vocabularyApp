import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WordCard = ({ wordData, onClick }) => { // Add onClick prop
  const lexicalEntry = wordData?.meaning?.results[0]?.lexicalEntries[0];

  return (
    <Card style={{ margin: '20px 0', width: '100%', maxWidth: '600px', cursor: 'pointer' }} onClick={onClick}> {/* Call onClick when clicked */}
      <CardContent>
        <Typography variant="h5">
          {wordData.word} ({lexicalEntry.lexicalCategory.text})
        </Typography>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          <strong>Definition:</strong> {lexicalEntry?.entries[0]?.senses[0]?.definitions[0]}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WordCard;
