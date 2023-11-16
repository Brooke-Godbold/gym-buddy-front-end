import PropTypes from 'prop-types';

import { StyledListContainer } from './ListContainer.styles';

function ListContainer({ children, columns = 2 }) {
  return (
    <StyledListContainer id="list-container" $columns={columns}>
      {children}
    </StyledListContainer>
  );
}

ListContainer.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.number,
};

export default ListContainer;
