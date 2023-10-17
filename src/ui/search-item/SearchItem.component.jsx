import RatingBar from '../rating-bar/RatingBar.component';
import { StyledSearchItem } from './SearchItem.styles';

function SearchItem() {
  return (
    <StyledSearchItem to="/gym/1" replace>
      <h1>Gym Name</h1>
      <RatingBar />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione
        quas accusantium voluptate optio ipsum voluptates consequatur maiores
        esse earum sunt eveniet delectus, asperiores in vitae, quasi itaque
        dolor repudiandae.
      </p>
    </StyledSearchItem>
  );
}

export default SearchItem;
