import {
  FC, useState, useRef, useEffect
} from 'react';

import { ButtonFilter } from '@shared/';

import * as Styled from './FilterDropdown.styled';


interface IFilterDropdown {
  textButton: string;
  dataInfo: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
}


export const FilterDropdown: FC<IFilterDropdown> = ({
  dataInfo, textButton, setFilter, filter
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const refButton = useRef<HTMLDivElement>(null);
  const handlerOnClickButton = () => {
    setFilter(dataInfo);
    setIsOpen(true);
  };

  useEffect(() => {
    const handlerClickCloseNotificationsWindow = (event: MouseEvent) => {
      const target = event.target as HTMLDivElement;

      if (target.closest('button')) {
        return;
      }

      if (!refButton.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handlerClickCloseNotificationsWindow);

    return () => document.removeEventListener(
      'click',
      handlerClickCloseNotificationsWindow
    );
  });


  return (
    <Styled.FilterDropdownWrapper>
      <ButtonFilter
        active={ dataInfo === filter && isOpen }
        text={ textButton }
        type="button"
        onClick={ handlerOnClickButton }
      />
      { (filter === dataInfo && isOpen) && (
        <Styled.FilterDropdownMenuWrapper ref={ refButton }>

          <Styled.FilterDropdownMenuInner>
            <Styled.FilterDropdownMenuBox>
              <Styled.FilterDropdownItem>Исполнитель</Styled.FilterDropdownItem>
              <Styled.FilterDropdownItem>Исполнитель</Styled.FilterDropdownItem>
              <Styled.FilterDropdownItem>Исполнитель</Styled.FilterDropdownItem>
              <Styled.FilterDropdownItem>Исполнитель</Styled.FilterDropdownItem>
              <Styled.FilterDropdownItem>Исполнитель</Styled.FilterDropdownItem>
              <Styled.FilterDropdownItem>Исполнитель</Styled.FilterDropdownItem>
              <Styled.FilterDropdownItem>Исполнитель</Styled.FilterDropdownItem>
              <Styled.FilterDropdownItem>Исполнитель</Styled.FilterDropdownItem>
              <Styled.FilterDropdownItem>Исполнитель</Styled.FilterDropdownItem>
              <Styled.FilterDropdownItem>Исполнитель</Styled.FilterDropdownItem>
              <Styled.FilterDropdownItem>Исполнитель</Styled.FilterDropdownItem>
            </Styled.FilterDropdownMenuBox>
          </Styled.FilterDropdownMenuInner>

        </Styled.FilterDropdownMenuWrapper>
      ) }
    </Styled.FilterDropdownWrapper>
  );
};
