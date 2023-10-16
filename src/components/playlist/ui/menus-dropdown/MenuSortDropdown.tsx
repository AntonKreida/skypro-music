import {
  FC, useState, useRef, useEffect,
} from 'react';

import { ButtonMenuDropdown } from '@shared/';

import * as Styled from './MenuDropdown.styled';


interface IMenuSortDropdown {
  textButton: string;
  dataInfo: string;
  isActiveMenu: string;
  setIsActiveMenu: React.Dispatch<React.SetStateAction<string>>;
  setActiveSort: React.Dispatch<React.SetStateAction<string>>;
  activeSort: string;
}


export const MenuSortDropdown: FC<IMenuSortDropdown> = ({
  dataInfo, textButton, isActiveMenu, setIsActiveMenu, setActiveSort, activeSort
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const refButton = useRef<HTMLDivElement>(null);

  const handlerOnClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = event;

    if (currentTarget.closest('button') && isOpen && isActiveMenu === dataInfo) {
      setIsOpen(false);
      return;
    }

    setIsActiveMenu(dataInfo);
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

  const handlerClickOption = (option: string) => {
    setActiveSort(option);
  };

  return (
    <Styled.MenuDropdownWrapper>
      <ButtonMenuDropdown
        active={ dataInfo === isActiveMenu && isOpen }
        text={ textButton }
        type="button"
        onClick={ handlerOnClickButton }
      />
      { (isActiveMenu === dataInfo && isOpen) && (
        <Styled.MenuDropdownMenuWrapper ref={ refButton }>

          <Styled.MenuDropdownMenuInner>
            <Styled.MenuDropdownMenuBox>
              <Styled.MenuDropdownItem
                $isInclined={ activeSort === 'default' }
                onClick={ () => handlerClickOption('default') }
              >
                По умолчанию
              </Styled.MenuDropdownItem>

              <Styled.MenuDropdownItem
                $isInclined={ activeSort === 'new' }
                onClick={ () => handlerClickOption('new') }
              >
                Сначала новые
              </Styled.MenuDropdownItem>
              <Styled.MenuDropdownItem
                $isInclined={ activeSort === 'old' }
                onClick={ () => handlerClickOption('old') }
              >Сначала старые
              </Styled.MenuDropdownItem>
            </Styled.MenuDropdownMenuBox>
          </Styled.MenuDropdownMenuInner>

        </Styled.MenuDropdownMenuWrapper>
      ) }

      { activeSort && activeSort !== 'default' && (
        <Styled.MenuDropdownCounter>{ activeSort }</Styled.MenuDropdownCounter>
      ) }
    </Styled.MenuDropdownWrapper>
  );
};
