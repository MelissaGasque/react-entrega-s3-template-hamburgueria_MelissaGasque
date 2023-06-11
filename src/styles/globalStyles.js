import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root {
	--color-color-primary: #27AE60;
	--color-color-secondary: #eb5757;
	--color-grey-600: #333333;
	--color-grey-300: #828282;
	--color-grey-100: #E0E0E0;
	--color-grey-004:#BDBDBD;
	--color-grey-000: #F5F5F5;
	--color-negative: #e60000;
	--color-warning: #ffcd07;
	--color-sucess: #168821;
	--color-information: #155bcb;
	--color-white:#FFFFFF;
    
    --Font-inter: 'Inter', sans-serif;
}

body{
    font-family: var(--Font-inter);
	background: var(--color-white);
}
`

