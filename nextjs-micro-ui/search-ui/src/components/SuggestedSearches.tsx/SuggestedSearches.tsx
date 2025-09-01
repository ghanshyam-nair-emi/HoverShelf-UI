import React, { useState } from 'react';
import {
  Box, Typography, List, ListItemButton,
  ListItemText, Paper, IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import './SuggestedSearches.css';

const suggestedQueries = [
  'Low-salt snacks UK',
  'What are the snacking trends in the UK?',
  'Sustainable packaging',
  'UK snack market trends'
];

const getDateLabel = (inputDate: string): string => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const searchDate = new Date(inputDate);
  if (searchDate.toDateString() === today.toDateString()) return 'Today';
  if (searchDate.toDateString() === yesterday.toDateString()) return 'Yesterday';

  return searchDate.toLocaleDateString();
};

interface RecentSearch {
  text: string;
  date: string;
}

const SuggestedSearches: React.FC = () => {
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([
    { text: 'Organic snack trends 2025', date: new Date().toISOString() },
    { text: 'Plant-based protein snacks', date: new Date(Date.now() - 86400000).toISOString() },
    { text: 'Low sodium alternatives', date: new Date(Date.now() - 172800000).toISOString() },
    { text: 'Sustainable packaging solutions', date: new Date(Date.now() - 259200000).toISOString() },
    { text: 'Gluten-free market analysis', date: new Date(Date.now() - 345600000).toISOString() },
    { text: 'Premium snack consumer insights', date: new Date(Date.now() - 432000000).toISOString() },
  ]);

  const handleSearchClick = (query: string) => {
    const now = new Date().toISOString();

    setRecentSearches((prev) => {
      const filtered = prev.filter((entry) => entry.text !== query);
      const updated = [{ text: query, date: now }, ...filtered];
      return updated.slice(0, 10); // Keep more items for scroll testing
    });

    handleSearchAction(query);
  };

  const handleRemoveRecent = (text: string) => {
    setRecentSearches((prev) => prev.filter((item) => item.text !== text));
  };

  const handleSearchAction = (query: string) => {};

  return (
    <Box className="search-container">
      <Paper className="section-box">
        {recentSearches.length > 0 && (
          <>
            <Typography variant="h6" className="section-title">Recent activity</Typography>
            <Typography className="subheading">Recent searches</Typography>
            <List className="search-list">
              {recentSearches.map((entry, index) => (
                <ListItemButton
                  key={index}
                  className="search-item"
                  onClick={() => handleSearchClick(entry.text)}
                >
                  <SearchIcon fontSize="small" className="icon" />
                  <ListItemText
                    primary={
                      <span className="search-text">
                        {entry.text}
                        <span className="search-date"> ({getDateLabel(entry.date)})</span>
                      </span>
                    }
                  />
                  <IconButton
                    edge="end"
                    size="small"
                    className="close-icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveRecent(entry.text);
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </ListItemButton>
              ))}
            </List>
          </>
        )}

        <Typography variant="h6" className="section-title">Suggested prompts & searches</Typography>
        <Typography className="subheading">Try these searches to get started</Typography>
        <List className="search-list">
          {suggestedQueries.map((query, index) => (
            <ListItemButton key={index} onClick={() => handleSearchClick(query)} className="search-item">
              <SearchIcon fontSize="small" className="icon" />
              <ListItemText primary={query} />
            </ListItemButton>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default SuggestedSearches;
