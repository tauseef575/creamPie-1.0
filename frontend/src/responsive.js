import { css } from "styled-components";

export let mobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};
