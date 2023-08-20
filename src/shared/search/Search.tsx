import * as Styled from './Search.styled';


export const Search = () => (
  <Styled.SearchWrapper>
    <Styled.SearchIcon />
    <Styled.SearchInput
      placeholder="Поиск..."
      type="text"
    />
  </Styled.SearchWrapper>
);
