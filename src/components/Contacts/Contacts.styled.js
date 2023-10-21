import { css } from '@emotion/react';
import { theme } from 'mainStyles/themeStyles';
import styled from 'styled-components';

export const ContainerContacts = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  flex-grow: 1;
`;

// export const TitleContacts = styled.h2`
//   text-align: center;
// `;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  height: 60%;
  width: 90%;
  overflow: auto;
`;

// export const Contactitem = styled.li`
//   display: flex;
//   justify-content: space-between;
//   color: ${theme.colors.mainColor};
// `;

export const StyledError = styled.b`
  color: ${theme.colors.mainColor};
`;

// export const DeleteButton = styled.button`
//   width: 40px;
//   height: 40px;
//   border-radius: 25px;
//   border: 1px solid rgb(231, 50, 50);
//   background-color: #fff;
//   cursor: pointer;
//   box-shadow: 0 0 10px #333;
//   transition: 0.3s;
//   color: ${theme.mainColor};

//   &:hover {
//     background-color: rgb(245, 207, 207);
//     transform: scale(1.1);
//     box-shadow: 0 0 4px #111;
//     transition: 0.3s;
//   }
// `;

const sectionDynamicStyle = theme => css`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 500px;
  min-height: 570px;
  padding: 20px;
  background-color: ${theme.colors.secondaryBackgroundColor};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow}; */
`;

// export const Title = styled.h1`
//   margin-top: 0;
//   margin-bottom: 40px;
//   text-align: center;
//   font-size: 32px;
//   text-transform: uppercase;
// `;

const sectionTitleDynamicStyle = theme => css`
  margin: 0;
  text-align: center;
  font-size: 28px;
  color: ${theme.colors.mainColor};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 500px;
  min-height: 570px;
  padding: 20px;
  background-color: ${theme.colors.secondaryBackgroundColor};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  /* ${() => sectionDynamicStyle(theme)} */
`;

export const SectionForm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  max-width: 500px;
  min-height: 570px;
  padding: 20px;
  background-color: ${theme.colors.secondaryBackgroundColor};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  /* ${() => sectionDynamicStyle(theme)} */
`;

export const SectionTitle = styled.h2`
  ${() => sectionTitleDynamicStyle(theme)}
`;

export const ContactInfo = styled.p`
  margin: 0;
`;

const styledButtonDynamicStyle = theme => css`
  width: 70px;
  height: 40px;
  transform: scale(1);
  background-color: ${theme.colors.mainColor};
  border-radius: ${theme.borderRadius};
  border: 2px solid ${theme.colors.mainColor};
  color: ${theme.colors.mainBackgroundColor};
  font-size: ${theme.fontStyles.size};
  transition: transform 250ms ease-out, background-color 250ms ease-out;
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 12px;
  font-size: 16px;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.mainBackgroundColor};
  color: ${theme.colors.mainColor};
`;

export const StyledButton = styled.button`
  ${() => styledButtonDynamicStyle(theme)}
`;
