import { 
    Container,
    MenuItem,
    Following,
    FollowingHeader,
    InfoContainer,
    Links,
 } from './styled'

import User from '../User/Index' 

function SideBar() {
    return (
    <Container>
        <MenuItem>
            <img src='/images/homeIcon.svg' />
            <span>Para Você</span>
        </MenuItem>
        <MenuItem>
            <img src='/images/peopleIcon.svg' />
            <span>Seguindo</span>
        </MenuItem>
        <Following>
            <FollowingHeader>Suas Principais Contas.</FollowingHeader>
            <User user={{
                name: 'Will Smith',
                username: 'willsmith',
                avatar: 'https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_720x720.jpeg?x-expires=1614988800&x-signature=l4v%2BbAbkS34iHT7uZEE%2Bfojsq0Q%3D',
            }}></User>
        </Following>
        <InfoContainer>
            <Links margin>
                <a>Inicio</a>
                <a>Sobre</a>
                <a>Sala de imprensa</a>
                <a>Carreira</a>
                <a>ByteDance</a>
            </Links>
            <Links>
                <a>Ajuda</a>
                <a>Segurança</a>
            </Links>
            <Links>
                <a>Diretrizes da comunidade</a>
                <a>Termos</a>
            </Links>
            <Links margin>
                <a>Privacidade</a>
            </Links>
            <Links margin>© 2020 TikTok </Links> 
        </InfoContainer>
    </Container>
    )
}

export default SideBar;