import {
  FC, useState, useRef, useEffect,
} from 'react';

import { ButtonMenuDropdown } from '@shared/';

import * as Styled from './MenuDropdown.styled';


interface IMenuFilterDropdown {
  textButton: string;
  dataInfo: string;
  setFilter: React.Dispatch<React.SetStateAction<{name: string; activeOptions: string[]}>>;
  filter: {
    name: string;
    activeOptions: string[];
  };
  isActiveMenu: string;
  setIsActiveMenu: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
  handlerClickOption: (option: string) => void;
}


export const MenuFilterDropdown: FC<IMenuFilterDropdown> = ({
  dataInfo, textButton, setFilter, filter, options, handlerClickOption, isActiveMenu, setIsActiveMenu
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const refButton = useRef<HTMLDivElement>(null);

  const handlerOnClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = event;

    if (currentTarget.closest('button') && isOpen && isActiveMenu === dataInfo) {
      setIsOpen(false);
      return;
    }

    setIsOpen(true);

    if (isActiveMenu === dataInfo) {
      setFilter({ name: dataInfo, activeOptions: filter.activeOptions });
      return;
    }

    setIsActiveMenu(dataInfo);
    setFilter({ name: dataInfo, activeOptions: [] });
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
              { options.map((option) => (
                <Styled.MenuDropdownItem
                  key={ option }
                  $isInclined={ filter.activeOptions.includes(option) }
                  onClick={ () => handlerClickOption(option) }
                >
                  { option }
                </Styled.MenuDropdownItem>
              )) }
            </Styled.MenuDropdownMenuBox>
          </Styled.MenuDropdownMenuInner>

        </Styled.MenuDropdownMenuWrapper>
      ) }
      { dataInfo === isActiveMenu && filter.activeOptions.length > 0 && (
        <Styled.MenuDropdownCounter>{ filter.activeOptions.length }</Styled.MenuDropdownCounter>
      ) }
    </Styled.MenuDropdownWrapper>
  );
};
