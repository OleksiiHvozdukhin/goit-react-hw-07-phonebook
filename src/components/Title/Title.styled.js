import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;

  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const ListElement = styled.li`
  &::after {
    content: 'Click me';
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-25%);
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    opacity: 0;
    pointer-events: none;

    transition: opacity 0.2s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const ListDiv = styled.div`
  position: relative;
  height: 80px;
  width: 80px;
  background-color: #18191f;
  color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 46px;
  cursor: pointer;
  margin: 0 4px;
  border-radius: 20px;
  box-shadow: -1px -1px 4px rgba(255, 255, 255, 0.05),
    4px 4px 6px rgba(0, 0, 0, 0.2),
    inset -1px -1px 4px rgba(255, 255, 255, 0.05),
    inset 1px 1px 1px rgba(0, 0, 0, 0.1);

  transition: all 2s ease;

  @keyframes glow {
    0% {
      filter: hue-rotate(0deg);
    }

    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

export const ListInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 80px;
  width: 80px;
  z-index: 10;

  transform: translate(-50%, 0);

  &:checked
    + ${ListDiv},
    &:hover
    + ${ListDiv},
    &:not(:checked):hover
    + ${ListDiv} {
    box-shadow: inset 0 0 2px grba(255, 255, 255, 0.05),
      inset 4px 4px 6px rgba(0, 0, 0, 0.2);
    color: yellow;
    text-shadow: 0 0 15px yellow, 0 0 25px yellow;
    animation: glow 1.5s linear infinite;
    transition: all 0.1s ease;
  }

  &:hover + ${ListDiv} {
    box-shadow: inset 0 0 2px grba(255, 255, 255, 0.05),
      inset 4px 4px 6px rgba(0, 0, 0, 0.2);
    color: yellow;
    text-shadow: 0 0 15px yellow, 0 0 25px yellow;
    animation: glow 1.5s linear infinite;
    transition: all 0.1s ease;
  }
`;
