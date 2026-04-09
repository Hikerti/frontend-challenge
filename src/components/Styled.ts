import styled from 'styled-components';

export const Header = styled.header`
  background: #2196f3;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 62px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const NavLink = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  color: #fff;
  opacity: ${(props) => (props.$active ? '1' : '0.7')};
  padding: 0 30px;
  height: 100%;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 0.25px;
  transition: opacity 0.2s;
  background: ${(props) => (props.$active ? '#1E88E5' : 'transparent')};

  &:hover {
    opacity: 1;
  }
`;

export const Container = styled.main`
  padding: 40px 62px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  gap: 48px;
  justify-items: center;

  @media (max-width: 768px) {
    padding: 20px;
    gap: 20px;
  }
`;

export const CardWrapper = styled.div`
  width: 225px;
  height: 225px;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.11);
    z-index: 10;
  }
`;

export const CatImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeartIcon = styled.div<{ $isFavorite: boolean }>`
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  background: url(${(props) =>
    props.$isFavorite
        ? "'https://raw.githubusercontent.com/AnikaevR/cat-pinterest/main/src/assets/heart-filled.svg'"
        : "'https://raw.githubusercontent.com/AnikaevR/cat-pinterest/main/src/assets/heart-empty.svg'"}) no-repeat center;
  display: none;
  
  ${CardWrapper}:hover & {
    display: block;
  }

  &:hover {
    background: url('https://raw.githubusercontent.com/AnikaevR/cat-pinterest/main/src/assets/heart-hover.svg') no-repeat center;
  }
`;

export const Loader = styled.div`
  text-align: center;
  padding: 20px;
  grid-column: 1 / -1;
`;