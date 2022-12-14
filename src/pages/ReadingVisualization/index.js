import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "react-share";
import ReadingsListingBody from '../../componentes/ReadingsListingBody';
import Animation from '../../componentes/shared/Animation';
import Card from '../../componentes/shared/Card';
import Footer from '../../componentes/shared/Footer';
import NavigationBar from '../../componentes/shared/NavigationBar';
import Popup from '../../componentes/shared/Popup';
import Tag from '../../componentes/shared/Tag';
import { getTextById } from '../../Services/readings';
import MenuItems from '../../shared/Enums/MenuItems';
import {
  AnimationWrapper, Container, CoverImage, CreditsTextWrapper, CreditsWrapper, HeadlineWrapper,
  MetadataWrapper, ProfilePicture, RecommendationWrapper, TextWrapper, TitleWrapper,
  Wrapper
} from './index.style';

const ReadingVisualization = ({ history }) => {
  const RECOMENDATION_ITEM_QUANTITY = 7;

  const [selectedText, setSelectedText] = useState(null);

  const SharingBar = () => {
    const DEFAULT_ICON_SIZE = 32;
    const DEFAULT_SHARING_URL = window.location;
    const DEFAULT_BUTTON_STYLE = { marginLeft: 8 };

    return (
      <Wrapper style={{ marginTop: 8 }}>
        <FacebookShareButton url={DEFAULT_SHARING_URL}>
          <FacebookIcon round size={DEFAULT_ICON_SIZE} />
        </FacebookShareButton>
        <TwitterShareButton url={DEFAULT_SHARING_URL} style={DEFAULT_BUTTON_STYLE}>
          <TwitterIcon round size={DEFAULT_ICON_SIZE} />
        </TwitterShareButton>
        <WhatsappShareButton url={DEFAULT_SHARING_URL} style={DEFAULT_BUTTON_STYLE}>
          <WhatsappIcon round size={DEFAULT_ICON_SIZE} />
        </WhatsappShareButton>
        <TelegramShareButton url={DEFAULT_SHARING_URL} style={DEFAULT_BUTTON_STYLE}>
          <TelegramIcon round size={DEFAULT_ICON_SIZE} />
        </TelegramShareButton>
        <EmailShareButton url={DEFAULT_SHARING_URL} style={DEFAULT_BUTTON_STYLE}>
          <EmailIcon round size={DEFAULT_ICON_SIZE} />
        </EmailShareButton>
      </Wrapper>
    )
  }

  useEffect(() => {
    const unlisten = history.listen(location => {
      updateVisualization(location.pathname);
    });

    const updateVisualization = (url) => {
      if (!url.includes('reading')) {
        unlisten();
        return;
      }

      setSelectedText(null);

      const textId = url.split('/').pop();

      window.scrollTo(0, 0);

      getTextById(textId,
        response => {
          setSelectedText(response);
        }, () => { })
    }

    const url = window.location.href;
    updateVisualization(url);

    return unlisten;
  }, [history]);

  const TextBody = ({ textInfo }) => {
    const {
      author,
      title,
      subtitle,
      publicationDate,
      tags,
      coverImage,
      coverImageSubtitle,
      coverImageDescription,
      body
    } = textInfo;

    const {
      fullName,
      shortName,
      widePicture,
      smallPicture,
      pronouns,
      description
    } = author;

    return (
      <>
        <NavigationBar activeItem={MenuItems.Reading} />
        <Wrapper style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Container>
            <TitleWrapper className='fluid-text-wide-1'>{title}</TitleWrapper>
            <HeadlineWrapper className='fluid-text-medium-1'>{subtitle}</HeadlineWrapper>
            <MetadataWrapper className='fluid-text-small-1'>
              <Wrapper style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {new Date(publicationDate).toLocaleDateString()} by {fullName}
              </Wrapper>
              <Wrapper>
                <SharingBar />
              </Wrapper>
            </MetadataWrapper>
            <TextWrapper className='fluid-text-medium-2'>
              <CoverImage alt={coverImageDescription} src={coverImage} />
              <Wrapper className='fluid-text-small-1' style={{ textAlign: 'center', marginBottom: 32 }}>
                {coverImageSubtitle}
              </Wrapper>
              <ReactMarkdown>
                {body}
              </ReactMarkdown>
            </TextWrapper>
            <Wrapper style={{ display: 'flex', justifyContent: 'center' }}>
              <Popup pinned on='click' trigger={
                <CreditsWrapper>
                  <CreditsTextWrapper bold>Autor:</CreditsTextWrapper>
                  <ProfilePicture
                    style={{ cursor: 'pointer' }}
                    src={smallPicture}
                    alt={`Foto do autor ${fullName}`}
                  />
                  <CreditsTextWrapper>{shortName}</CreditsTextWrapper>
                </CreditsWrapper>
              }>
                <Card
                  imageUrl={widePicture}
                  header={fullName}
                  meta={pronouns}
                  description={description}
                />
              </Popup>
              <Wrapper style={{ color: 'var(--cor-cinza-escuro)', alignSelf: 'center' }}>
                <Wrapper style={{
                  width: '100%',
                  borderBottom: '1px solid var(--cor-cinza-claro-transparente)',
                  fontWeight: 'bold'
                }}>
                  Tags
                </Wrapper>
                {tags.map(tag => (<Tag style={{ marginRight: 8 }}>{tag}</Tag>))}
              </Wrapper>
            </Wrapper>
          </Container>
          <RecommendationWrapper>
            <Wrapper
              className='fluid-text-medium-2'
              style={{
                display: 'flex',
                paddingBottom: 18,
                marginBottom: 18,
                justifyContent: 'center',
                borderBottom: '1px solid var(--cor-cinza-claro-transparente)'
              }}>
              Você também pode gostar de ler
            </Wrapper>
            <ReadingsListingBody pageSize={RECOMENDATION_ITEM_QUANTITY} fluid singleLoad />
          </RecommendationWrapper>
        </Wrapper>
        <Footer style={{ marginTop: 40 }} />
      </>
    );
  }

  return (<>
    {
      selectedText ? <TextBody textInfo={selectedText} />
        : (<AnimationWrapper  data-cy="loading-icon-reading">
          <Animation name='styled-loading' autoplay loop size={'75%'}/>
        </AnimationWrapper>)
    }
  </>);
}

export default ReadingVisualization;