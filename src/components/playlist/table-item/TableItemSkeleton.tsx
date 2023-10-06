import * as Styled from './TableItem.styled';


export const TableItemSkeleton = () => (
  <Styled.TableItemRowWrapper>

    <Styled.TableItemCell colSpan={ 1 }>
      <Styled.TableItemBox>
        <Styled.TableItemIconSkeleton />
        <Styled.TableItemTextSkeleton />
      </Styled.TableItemBox>

    </Styled.TableItemCell>

    <Styled.TableItemCell colSpan={ 2 }>
      <Styled.TableItemTextSkeleton />
    </Styled.TableItemCell>

    <Styled.TableItemCell colSpan={ 3 }>
      <Styled.TableItemTextSkeleton />
    </Styled.TableItemCell>

    <Styled.TableItemCell colSpan={ 4 }>
      <Styled.TableItemTextSkeleton />
    </Styled.TableItemCell>
  </Styled.TableItemRowWrapper>
);
