import styled from 'styled-components';

export const ContactsList = styled.ul`
  list-style: none;
  width: 600px;
  margin: 0 auto;
  padding: 0;
`;

export const ContactListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  border: 1px solid white;
`;

export const ContactTitle = styled.h3`
  font-size: 16px;
  letter-spacing: 6px;
  font-weight: 100;
`;

export const ContactButton = styled.button`
  height: 30px;
  margin-top: 12px;
  border-style: solid;
  border-color: #18191f;
  background-color: #cecece87;
  color: white;
  font-size: 10px;
  letter-spacing: 11px;
  cursor: pointer;

  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #cecece20;

    box-shadow: inset 0 0 2px grba(255, 255, 255, 0.05),
      inset 4px 4px 6px rgba(0, 0, 0, 0.2);
    color: yellow;
    text-shadow: 0 0 15px yellow, 0 0 25px yellow;
    animation: glow 1.5s linear infinite;
    transition: all 0.1s ease;
  }
`;
