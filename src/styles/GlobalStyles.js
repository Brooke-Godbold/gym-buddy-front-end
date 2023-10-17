import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  /* Brand */
  --color-brand-100: #feeceb;
  --color-brand-200: #fab3af;
  --color-brand-300: #f78e86;
  --color-brand-400: #f5685e;
  --color-brand-500: #f24236;
  --color-brand-600: #c2352b;
  --color-brand-700: #912820;
  --color-brand-800: #611a16;
  --color-brand-900: #180705;

  /* Blue */
  --color-blue-300: #2B50AA;
  --color-blue-600: #132a64;

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  /* Red */
  --color-red-100: #ffdfdf;
  --color-red-400: #f5685e;
  --color-red-600: #db2727;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  /* Green */
  --color-green-300: #69db7c;
  --color-green-500: #2b8a3e;

  /* Shadow */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  /* Radius */
  --border-radius-sm: 3px;
  --border-radius-md: 5px;
  --border-radius-lg: 7px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

*::selection {
  background: var(--color-red-400);
  color: var(--color-red-100);
}

html {
  font-size: 62.5%;
  height: 100%;

  overflow: hidden;
}

body {
  font-family: "Nunito", sans-serif;
  color: var(--color-brand-700);
  background-color: var(--color-grey-200);
  transition: color 0.3s, background-color 0.3s;
  line-height: 1.5;
  font-size: 1.6rem;

  overflow: hidden;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}

div,
p {
  cursor: default;
}

select {
  cursor: pointer;
}
`;

const BasePage = css`
  margin: 0 auto;
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  flex: auto;

  @media (max-width: 160em) {
    width: 75%;
  }

  @media (max-width: 120em) {
    width: 90%;
  }
`;

const BaseItem = css`
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-sm);

  border-top: solid 4px var(--color-brand-200);

  transition: all 0.3s;

  &:hover {
    transform: scale(102%);
  }
`;

const CommonScrollbar = css`
  &::-webkit-scrollbar {
    width: 10px; /* width of the entire scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-brand-600); /* color of the scroll thumb */
    border: 3px solid var(--color-brand-600); /* creates padding around scroll thumb */
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-brand-400); /* color of the scroll thumb */
    border: 3px solid var(--color-brand-400); /* creates padding around scroll thumb */
  }

  scrollbar-color: var(--color-brand-600) transparent;
  scroll-padding: 3px;
`;

const CommonButton = css`
  padding: 0 1.2rem;

  background-color: var(--color-brand-200);

  font-weight: 700;

  border: none;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  transition: all 0.3s;

  &:hover {
    transform: scale(105%);
    box-shadow: var(--shadow-lg);
  }

  &:active {
    transform: scale(110%);
  }
`;

export default GlobalStyles;

export { BasePage, BaseItem, CommonScrollbar, CommonButton };
