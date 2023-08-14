import * as Styled from './Panel.styled';


export const Panel = () => (
  <Styled.PanelWrapper>
    <Styled.PanelHeader>
      <Styled.PanelIconWrapper>
        <svg>
          <use href={ `${process.env.PUBLIC_URL}/assets/icon/icons.svg#exit` } />
        </svg>
      </Styled.PanelIconWrapper>
    </Styled.PanelHeader>
    <Styled.PanelMenuWrapper>

      <Styled.PanelMenuItem>
        <img
          alt=""
          src={ `${process.env.PUBLIC_URL}/assets/img/item1.png` }
        />
      </Styled.PanelMenuItem>

      <Styled.PanelMenuItem>
        <img
          alt=""
          src={ `${process.env.PUBLIC_URL}/assets/img/item2.png` }
        />
      </Styled.PanelMenuItem>

      <Styled.PanelMenuItem>
        <img
          alt=""
          src={ `${process.env.PUBLIC_URL}/assets/img/item3.png` }
        />
      </Styled.PanelMenuItem>

    </Styled.PanelMenuWrapper>
  </Styled.PanelWrapper>
);
