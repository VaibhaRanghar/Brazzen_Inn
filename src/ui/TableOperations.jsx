import styled from "styled-components";

const StyledTableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

// eslint-disable-next-line react/prop-types
function TableOperations({ children }) {
  return <StyledTableOperations>{children}</StyledTableOperations>;
}

export default TableOperations;
