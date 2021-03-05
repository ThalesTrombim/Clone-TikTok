function Suggestions() {
    return (
        <Container>
            <IconsContainer>
                <Icon src='/images/facebookIcon.svg'></Icon>
                <Icon src='/images/pinterestIcon.svg'></Icon>
                <Icon src='images/twitterIcon.svg'></Icon>
            </IconsContainer>
            <BoxContainer>
                <BoxHeader><span>Contas sugeridas</span></BoxHeader>
                <ItemContainer>
                    {people.map((person, index)=> (
                        <Item>
                            <User key={index} user={person}></User>
                            <Button fontSize={14} outlined></Button>
                        </Item>
                    ))}
                </ItemContainer>
            </BoxContainer>
            <BoxContainer>
                <BoxHeader><span>Descobrir</span></BoxHeader>
                <ItemContainer>
                    {itens.map((item, index)=> (
                        <Item>
                            <RecommendCard key={index} recommend={item}></RecommendCard>
                            <ArrowIcon></ArrowIcon>
                        </Item>
                    ))}
                </ItemContainer>
            </BoxContainer>
            <DownloadImage src='/images/appstore.png'></DownloadImage>
            <DownloadImage src='/images/playstore.png'></DownloadImage>
            <DownloadImage src='/images/amazon.png'></DownloadImage>
        </Container>
    );
};