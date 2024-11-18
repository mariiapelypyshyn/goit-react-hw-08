import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css'; 

import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
  const selectNameFilter = useSelector(selectFilter);
 
  const dispatch = useDispatch();
  return (
    <div>
      <label className={css.label}>
        <div className={css.labelName}>Find contacts by name</div>
        <input className={css.input} type="text" value={selectNameFilter} onChange={(e) => {
          const action = changeFilter(e.target.value)
          dispatch(action);
        }}/>
      </label>
    </div>
  )
}

export default SearchBox;
