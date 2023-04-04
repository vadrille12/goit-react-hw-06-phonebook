import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';

import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="nameToFind"
          value={filter}
          onChange={e => dispatch(filterContacts(e.target.value))}
          autoComplete="off"
          placeholder="Наталья, морская пехота"
        />
      </Label>
    </div>
  );
};
