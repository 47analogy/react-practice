import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropDown';

const SearchParams = () => {
  const [location, setLocation] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropDown, setBreed] = useDropdown('Breed', '', breeds);

  useEffect(() => {
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedName = apiBreeds.map(({ name }) => name);
      setBreeds(breedName);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={location}
            placeholder="Add Location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropDown />
        <BreedDropDown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
