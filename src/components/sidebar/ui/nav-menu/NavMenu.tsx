import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import * as Styled from './NavMenu.styled';
import { menuItemList } from '../lib';


export const NavMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handlerOnClickButtonMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <Styled.NavMenuWrapper>
      <Styled.NavMenuButton onClick={ handlerOnClickButtonMenu }>
        <AnimatePresence>
          { !isOpenMenu
            ? (
              <motion.div
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 1 }}
              >
                <Styled.NavMenuBurgerIcon />
              </motion.div>
            )
            : (
              <motion.div
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 1 }}
              >
                <Styled.NavMenuCrossIcon />
              </motion.div>
            ) }
        </AnimatePresence>
      </Styled.NavMenuButton>
      <Styled.NavMenuDropdown
        initial={{ height: 0 }}
        transition={{ duration: 0.2 }}
        animate={{
          height: isOpenMenu ? 112 : 0
        }}
      >
        { menuItemList.map((item) => (
          <Styled.NavMenuItem
            key={ item.id }
          >
            { item.label }
          </Styled.NavMenuItem>
        )) }
      </Styled.NavMenuDropdown>
    </Styled.NavMenuWrapper>
  );
};
