import styled from 'styled-components';
import { useCatStore } from '../store/useCatStore';
import { CatCard } from '../components/CatCard';

const Grid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  gap: 48px;
  padding: 40px 62px;
`;

const Favorites = () => {
    const { favorites, toggleFavorite } = useCatStore();

    return (
        <Grid>
            {favorites.map((cat) => (
                <CatCard
                    key={cat.id}
                    cat={cat}
                    isFavorite={true}
                    onToggle={toggleFavorite}
                />
            ))}
            {favorites.length === 0 && <div style={{gridColumn: '1/-1', textAlign: 'center'}}>Тут пока пусто :(</div>}
        </Grid>
    );
};

export default Favorites;