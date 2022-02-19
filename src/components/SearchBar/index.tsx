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
    <div className="pt-2 relative mx-auto text-gray-600">
        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
          type='text'
          placeholder='Search for movies here...'
          onChange={event => setState(event.currentTarget.value)}
          value={state} />
      </div>
  );
}

export default SearchBar;
