import { FC, ReactNode } from 'react';

import * as Styled from './Container.styled';


interface IContainerProps {
  children: ReactNode;
}

export const Container: FC<IContainerProps> = ({ children }) => (
  <Styled.ContainerWrapper>
    { children }
  </Styled.ContainerWrapper>
);
