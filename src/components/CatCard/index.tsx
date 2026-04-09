import { Heart } from 'lucide-react';
import styled from 'styled-components';
import type { Cat } from '../../types/types.ts';

const Card = styled.div`
  width: 225px;
  height: 225px;
  position: relative;
  cursor: pointer;
  transition: 0.2s;
  &:hover { transform: scale(1.1); box-shadow: 0 6px 18px rgba(0,0,0,0.1); }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeartButton = styled.button<{ $isFav: boolean }>`
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.$isFav ? '#ff3a1a' : '#f24e1e'};
  display: none;
  ${Card}:hover & { display: block; }
  svg { fill: ${props => props.$isFav ? '#ff3a1a' : 'transparent'}; }
`;

interface Props {
    cat: Cat;
    isFavorite: boolean;
    onToggle: (cat: Cat) => void;
}

export const CatCard = ({ cat, isFavorite, onToggle }: Props) => (
    <Card onClick={() => onToggle(cat)}>
        <Image src={cat.url} loading="lazy" alt="Cute Cats" crossOrigin="anonymous"/>
        <HeartButton $isFav={isFavorite}>
            <Heart size={40} strokeWidth={1} />
        </HeartButton>
    </Card>
);