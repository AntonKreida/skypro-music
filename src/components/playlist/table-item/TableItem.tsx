import { FC } from 'react';

import { ITrack } from '@interface/';

import * as Styled from './TableItem.styled';


interface ITableItemProps {
  track: ITrack;
}

export const TableItem: FC<ITableItemProps> = ({ track }) => {
  const {
    name,
    author,
    album,
    duration_in_seconds: time
  } = track;


  return (
    <Styled.TableItemRowWrapper>
      <Styled.TableItemCell>

        <Styled.TableItemIconPlug />

        <Styled.TableItemText>
          { name }
        </Styled.TableItemText>
      </Styled.TableItemCell>

      <Styled.TableItemCell>
        <Styled.TableItemText>
          { author }
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
          { String(time) }
        </Styled.TableItemTextSilenced>
      </Styled.TableItemCell>
    </Styled.TableItemRowWrapper>
  );
};
