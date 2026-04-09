import { useState } from 'react';
import { useCatStore } from '../store/useCatStore';
import { getCats } from '../api/catApi';
import { CatCard } from '../components/CatCard';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  gap: 48px;
  padding: 40px 62px;
`;

const AllCatsPage = () => {
    const { cats, favorites, addCats, toggleFavorite, page, incrementPage } = useCatStore();
    const [loading, setLoading] = useState(false);

    const loadMore = async () => {
        setLoading(true);
        const data = await getCats(page);
        addCats(data);
        incrementPage();
        setLoading(false);
    };

    const { lastElementRef } = useInfiniteScroll(loadMore, loading);

    return (
        <Grid>
            {cats.map((cat, index) => (
                <CatCard
                    key={`${cat.id}-${index}`}
                    cat={cat}
                    isFavorite={favorites.some(f => f.id === cat.id)}
                    onToggle={toggleFavorite}
                />
            ))}
            <div ref={lastElementRef} style={{ height: 20, gridColumn: '1/-1', textAlign: 'center' }}>
                {loading && "... загружаем еще котиков ..."}
            </div>
        </Grid>
    );
};

export default AllCatsPage;