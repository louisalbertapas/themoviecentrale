import React, { useEffect, useState } from 'react'

type Props = {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<Props> = ({ setSearchText }) => {
  const [ state, setState ] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchText(state);
    }, 500);

    // clear
    return () => clearTimeout(timer);
  }, [setSearchText, state])

  return (
    <div>
      <input
        type='text'
        placeholder='Search movies here...'
        onChange={event => setState(event.currentTarget.value)}
        value={state}
      />
    </div>
  );
}

export default SearchBar;
