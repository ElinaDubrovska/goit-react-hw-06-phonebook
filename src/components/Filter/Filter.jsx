// import { StyledLabel } from "components/CommonStyled/Label.styled"
// import { StyledInput } from "components/CommonStyled/Input.styled"
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.value);

    const handleFilter = e => {
        dispatch(setFilter(e.target.value));
      };
  
    return ( <label htmlFor="">Find contacts by name
          <input type="text" value={value}  onChange={handleFilter} />
        </label>)
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}