import styled from 'styled-components';
import { Link } from 'react-router-dom';

// const OptionContainerStyles = css`
//   padding: 1rem 1.5rem;
//   cursor: pointer;
// `;

export const HeaderContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;
  padding: 2.5rem;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 1rem 1.5rem;
  cursor: pointer;
`;

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;
