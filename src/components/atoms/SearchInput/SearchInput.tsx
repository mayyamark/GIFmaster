import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './SearchInput.styles';

interface Props {
  onKeyPressCallback?: () => void;
}

const SearchInput: React.FC<Props> = ({ onKeyPressCallback }): JSX.Element => {
  const classes = useStyles();
  const router = useRouter();

  const [keyword, setKeyword] = useState('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Box className={classes.search}>
      <Box className={classes.searchIcon}>
        <SearchIcon className={classes.icon} />
      </Box>
      <InputBase
        placeholder='Search GIFs…'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search', ref: inputRef }}
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            router.push({
              pathname: '/search-gifs',
              query: {
                keyword,
              },
            });

            setKeyword('');
            inputRef?.current?.blur();

            if (onKeyPressCallback) {
              onKeyPressCallback();
            }
          }
        }}
        data-testid='search-input'
      />
    </Box>
  );
};

export default SearchInput;
