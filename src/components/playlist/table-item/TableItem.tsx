import { FC } from 'react';

import { ITrack } from '@interface/';
import { formattedTime } from '@utils/';

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
      <Styled.TableItemCell colSpan={ 1 }>

        <Styled.TableItemBox>
          <Styled.TableItemIconPlug />
          <Styled.TableItemText>
            { name }
          </Styled.TableItemText>
        </Styled.TableItemBox>

      </Styled.TableItemCell>

      <Styled.TableItemCell colSpan={ 2 }>
        <Styled.TableItemText>
          { author }
        </Styled.TableItemText>
      </Styled.TableItemCell>

      <Styled.TableItemCell colSpan={ 3 }>
        <Styled.TableItemTextSilenced>
          { album }
        </Styled.TableItemTextSilenced>
      </Styled.TableItemCell>

      <Styled.TableItemCell colSpan={ 4 }>
        <Styled.TableItemLastBox>
          <Styled.TableLikeWrapper>
            <svg>
              <use href={ `${process.env.PUBLIC_URL}/assets/icon/icons.svg#like` } />
            </svg>
          </Styled.TableLikeWrapper>
          <Styled.TableItemTextSilenced>
            { formattedTime(time) }
          </Styled.TableItemTextSilenced>
        </Styled.TableItemLastBox>
      </Styled.TableItemCell>

    </Styled.TableItemRowWrapper>
  );
};
