// import styled from 'styled-components';
import { theme } from './themeStyles';
import { ImAddressBook } from 'react-icons/im';
import styled from '@emotion/styled';

export const HeadersStyles = styled.div`
  background-color: rgb(35, 30, 57);
`;

export const LoginDiv = styled.div`
  display: block;
  margin: 0 auto;
`;

export const MainTitle = styled.h1`
  margin-top: 10%;
  text-align: center;
  font-size: 28px;
  color: ${theme.colors.mainColor};
`;

export const AddressBookIcon = styled(ImAddressBook)`
  fill: ${theme.colors.mainColor};
  font-size: 200px;
`;

export const HomeContainer = styled.div`
  padding-top: 100px;
`;

export const ErrorMessage = styled.p`
  /* color: #ac48cd; */
  text-align: center;
  display: block;
  margin-bottom: 5px;
`;
