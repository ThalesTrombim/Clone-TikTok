import { Container, IconAvatar, Info } from './styled';

export default function RecommendCard({ recommend }) {
  return (
    <Container>
      <IconAvatar src={recommend.avatar}></IconAvatar>
      <Info>
        <a>{recommend.title}</a>
        <span>{recommend.views}</span>
      </Info>
    </Container>
  );
}