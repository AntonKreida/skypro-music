import { useSearchTrack } from '@hook/';

import * as Styled from './Search.styled';


export const Search = () => {
  const { handlerInputSearchTrack } = useSearchTrack();


  const handlerSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    if (event.key !== 'Enter') {
      return;
    }

    handlerInputSearchTrack(value);
  };

  return (
    <Styled.SearchWrapper>
      <Styled.SearchIcon />
      <Styled.SearchInput
        placeholder="Поиск..."
        type="text"
        onKeyDown={ handlerSearch }
      />
    </Styled.SearchWrapper>
  );
};
