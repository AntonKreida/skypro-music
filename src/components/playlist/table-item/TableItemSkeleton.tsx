import * as Styled from './TableItem.styled';


export const TableItemSkeleton = () => (
  <Styled.TableItemRowWrapper>
    <Styled.TableItemCell>

      <Styled.TableItemIconSkeleton />
      <Styled.TableItemTextSkeleton />
    </Styled.TableItemCell>

    <Styled.TableItemCell>
      <Styled.TableItemTextSkeleton />
    </Styled.TableItemCell>

    <Styled.TableItemCell>
      <Styled.TableItemTextSkeleton />
    </Styled.TableItemCell>

    <Styled.TableItemCell>
      <Styled.TableItemTextSkeleton />
    </Styled.TableItemCell>
  </Styled.TableItemRowWrapper>
);
