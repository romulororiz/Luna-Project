import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Lato, Tahoma, sans-serif;
    } 

    a{
        text-decoration: none;
    }
`;

// fonts
export const fontSmall = '.6rem';
export const fontNormal = '1rem';
export const fontMedium = '1.3rem';
export const fontLarge = '1.5rem';
export const fontExLarge = '2rem';

// colors
export const orangeMain = '#E47D31';
