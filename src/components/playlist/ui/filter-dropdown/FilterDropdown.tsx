import {
  FC, useState, useRef, useEffect,
} from 'react';

import { ButtonFilter } from '@shared/';

import * as Styled from './FilterDropdown.styled';


interface IFilterDropdown {
  textButton: string;
  dataInfo: string;
  setFilter: React.Dispatch<React.SetStateAction<{name: string; activeOptions: string[]}>>;
  filter: {
    name: string;
    activeOptions: string[];
  };
  options: string[];
  handlerClickOption: (option: string) => void;
}


export const FilterDropdown: FC<IFilterDropdown> = ({
  dataInfo, textButton, setFilter, filter, options, handlerClickOption
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const refButton = useRef<HTMLDivElement>(null);

  const handlerOnClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = event;

    if (currentTarget.closest('button') && isOpen && filter.name === dataInfo) {
      setIsOpen(false);
      return;
    }

    setIsOpen(true);

    if (filter.name === dataInfo) {
      setFilter({ name: dataInfo, activeOptions: filter.activeOptions });
      return;
    }

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
    <Styled.FilterDropdownWrapper>
      <ButtonFilter
        active={ dataInfo === filter.name && isOpen }
        text={ textButton }
        type="button"
        onClick={ handlerOnClickButton }
      />
      { (filter.name === dataInfo && isOpen) && (
        <Styled.FilterDropdownMenuWrapper ref={ refButton }>

          <Styled.FilterDropdownMenuInner>
            <Styled.FilterDropdownMenuBox>
              { options.map((option) => (
                <Styled.FilterDropdownItem
                  key={ option }
                  $isInclined={ filter.activeOptions.includes(option) }
                  onClick={ () => handlerClickOption(option) }
                >
                  { option }
                </Styled.FilterDropdownItem>
              )) }
            </Styled.FilterDropdownMenuBox>
          </Styled.FilterDropdownMenuInner>

        </Styled.FilterDropdownMenuWrapper>
      ) }
      { isOpen && dataInfo === filter.name && filter.activeOptions.length > 0 && (
        <Styled.FilterDropdownCounter>{ filter.activeOptions.length }</Styled.FilterDropdownCounter>
      ) }
    </Styled.FilterDropdownWrapper>
  );
};
