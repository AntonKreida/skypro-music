import { FC, useState } from 'react';

import { ITrack } from '@interface/';
import { formattedTime } from '@utils/';
import { useAudioContext } from '@hook/';

import * as Styled from './TableItem.styled';


interface ITableItemProps {
  track: ITrack;
}

export const TableItem: FC<ITableItemProps> = ({ track }) => {
  const {
    name,
    author,
    album,
    logo,
    duration_in_seconds: time
  } = track;
  const [isErrorImg, setIsErrorImg] = useState(false);
  const { handlerPlayCurrentTrack } = useAudioContext();

  const handlerErrorImg = () => {
    setIsErrorImg(true);
  };

  return (
    <Styled.TableItemRowWrapper onClick={ () => handlerPlayCurrentTrack(track) }>
      <Styled.TableItemCell colSpan={ 1 }>

        <Styled.TableItemBox>
          <Styled.TableItemWrapperImg>
            { !isErrorImg ? <Styled.TableItemImg src={ logo ?? '' } onError={ handlerErrorImg } /> : <Styled.TableItemIconPlug /> }
          </Styled.TableItemWrapperImg>
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
