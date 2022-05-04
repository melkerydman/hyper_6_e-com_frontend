import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: var(--gutter);
  padding: calc(var(--gutter) / 2);
`;
