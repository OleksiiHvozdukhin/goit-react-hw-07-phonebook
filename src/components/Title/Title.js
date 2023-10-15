import { List, ListElement, ListInput, ListDiv } from './Title.styled';

export const Title = () => {
  return (
    <div>
      <List>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>P</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>H</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>O</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>N</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>E</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>B</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>O</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>O</ListDiv>
        </ListElement>
        <ListElement>
          <ListInput type="checkbox" />
          <ListDiv>K</ListDiv>
        </ListElement>
      </List>
    </div>
  );
};
