import { FC } from 'react';

import { ISoundTrack } from '@interface/';

import * as Styled from './TableItem.styled';


interface ITableItemProps {
  soundtrack: ISoundTrack;
}

export const TableItem: FC<ITableItemProps> = ({ soundtrack }) => {
  const {
    name, artist, album, time
  } = soundtrack;


  return (
    <Styled.TableItemRowWrapper>
      <Styled.TableItemCell>

        <Styled.TableItemIconWrapper>
          <svg>
            <use href={ `${process.env.PUBLIC_URL}/assets/icon/icons.svg#default` } />
          </svg>
        </Styled.TableItemIconWrapper>
        <Styled.TableItemText>
          { name }
        </Styled.TableItemText>
      </Styled.TableItemCell>

      <Styled.TableItemCell>
        <Styled.TableItemText>
          { artist }
        </Styled.TableItemText>
      </Styled.TableItemCell>

      <Styled.TableItemCell>
        <Styled.TableItemTextSilenced>
          { album }
        </Styled.TableItemTextSilenced>
      </Styled.TableItemCell>

      <Styled.TableItemCell>
        <Styled.TableLikeWrapper>
          <svg>
            <use href={ `${process.env.PUBLIC_URL}/assets/icon/icons.svg#like` } />
          </svg>
        </Styled.TableLikeWrapper>
        <Styled.TableItemTextSilenced>
          { time }
        </Styled.TableItemTextSilenced>
      </Styled.TableItemCell>
    </Styled.TableItemRowWrapper>
  );
};
