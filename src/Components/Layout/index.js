import Header from '../Header';
import SideBar from '../SideBar';
import { Container, SideBarContainer, ContentContainer } from './styled';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <ContentContainer>{children}</ContentContainer>
      </Container>
    </>
  );
}

export default Layout;    