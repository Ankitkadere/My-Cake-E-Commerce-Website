 
import DropdownButton from 'react-bootstrap/DropdownButton';
import '.././DropdownOption/Dropoption.css';
import FilterByPrice from '../Filter/Filter';

function VanillaFilter() {
  return (
    <>
    <DropdownButton id="Filter-button" title=" Filter ">
      <FilterByPrice/> 
    </DropdownButton>
    </>
  );
}
 
export default VanillaFilter;