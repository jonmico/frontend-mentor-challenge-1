import styled from 'styled-components';

const StyledP = styled.p`
  text-align: center;
  font-size: 0.85rem;
  color: gray;
`;

export default function InfoText() {
  return (
    <StyledP>
      Scan the QR code to visit Frontend Mentor and take your coding skills to
      the next level
    </StyledP>
  );
}
