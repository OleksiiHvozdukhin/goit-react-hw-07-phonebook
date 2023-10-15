import styled from 'styled-components';

export const FilterForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FilterInput = styled.input`
  outline: none;
  background-color: inherit;
  border-style: solid;
  border-color: #18191f;
  border-bottom-color: gray;
  text-align: center;
  font-size: 16px;
  letter-spacing: 11px;

  margin-top: 12px;

  width: 400px;

  color: white;

  transition: border-color 0.2s ease-in-out;

  &:focus-visible,
  &:hover {
    border-color: #18191f;
    border-bottom-color: white;
  }
`;

export const FilterLabel = styled.label`
  font-size: 20px;
  letter-spacing: 22px;
  transform: translate(11px, 0px);

  &.firstLabel {
    transform: translate(10px, 0px);
  }
`;
