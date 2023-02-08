import Card from '../card/card.component';
import './card-list.styles.css';
import { Monsters } from '../../App';
type CardListPorps = {
  monsters: Monsters[]
}
const CardList = ({ monsters }: CardListPorps) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
