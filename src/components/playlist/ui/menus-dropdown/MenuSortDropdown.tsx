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
}


export const MenuSortDropdown: FC<IMenuSortDropdown> = ({
  dataInfo, textButton, isActiveMenu, setIsActiveMenu
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
              <Styled.MenuDropdownItem>от новых к более старым</Styled.MenuDropdownItem>
              <Styled.MenuDropdownItem>от старых к более новым</Styled.MenuDropdownItem>
            </Styled.MenuDropdownMenuBox>
          </Styled.MenuDropdownMenuInner>

        </Styled.MenuDropdownMenuWrapper>
      ) }
    </Styled.MenuDropdownWrapper>
  );
};
