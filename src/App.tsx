import { styled } from 'styled-components';
import Image from './components/Image/Image';
import Header from './components/Header/Header';
import InfoText from './components/InfoText/InfoText';

const Card = styled.div`
  width: 315px;
  margin: auto;
  background-color: white;
  border-radius: 20px;
  padding: 1rem 0;
`;

const TextDiv = styled.div`
  padding: 0.75rem 1.5rem;
`;

export default function App() {
  return (
    <Card>
      <Image />
      <TextDiv>
        <Header />
        <InfoText />
      </TextDiv>
    </Card>
  );
}
