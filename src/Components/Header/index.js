import React from 'react';
import { Container, Content, LogoContainer, LogoIcon, Logo, OptionsContainer, Icon, Avatar } from './styled'

function Header() {
    return (
        <Container>
            <Content>
                <LogoContainer>
                    <LogoIcon src="/images/logoIcon.svg"></LogoIcon>
                    <Logo src="/images/logo.svg"></Logo>
                </LogoContainer>
                <OptionsContainer>
                    <Icon src="/images/uploadIcon.svg">

                    </Icon>
                    <Avatar>
                        <img src="https://avatars.githubusercontent.com/u/68087477?s=460&u=c6226584fd9cab05a5a8b5d77087ecd1959c92b1&v=4"/>
                    </Avatar>
                </OptionsContainer>
            </Content>
        </Container>
    )   
};

export default Header;