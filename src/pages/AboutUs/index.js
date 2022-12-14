import "animate.css/animate.min.css";
import React from 'react';
import { Image } from 'semantic-ui-react';
import Animation from '../../componentes/shared/Animation';
import Footer from '../../componentes/shared/Footer';
import NavigationBar from '../../componentes/shared/NavigationBar';
import MenuItems from '../../shared/Enums/MenuItems';
import Trees from '../../shared/Images/trees.svg';
import { Block, PresentationLayer, Span, Wrapper } from './index.style';

const AboutUs = () => {
  return (
    <>
      <NavigationBar activeItem={MenuItems.AboutUs} />

      <div data-cy="about-us-section">
        <Block style={{ backgroundColor: 'var(--cor-secundaria)', flexDirection: 'row', marginTop: 0 }}>
          <PresentationLayer>
            <Wrapper style={{ height: '100vh', width: 450 }}>
              <Image src={Trees} height={'100%'} width={450} />
            </Wrapper>
          </PresentationLayer>
          <PresentationLayer>
            <Wrapper style={{ height: '75vh', width: 400 }}>
              <Image src={Trees} height={'100%'} width={400} />
            </Wrapper>
          </PresentationLayer>
          <PresentationLayer style={{ justifyContent: 'center', position: 'absolute' }}>
            <Wrapper style={{ display: 'flex', justifyContent: 'center' }}>
              <Span style={{ padding: '0px 16px' }}>
                Praesent augue leo, fermentum in justo eu, hendrerit viverra nunc. Ut vel mollis sapien. Donec sit amet urna porta, faucibus erat eget, egestas urna. Aliquam dapibus magna a nulla mollis varius. Pellentesque ut imperdiet odio. Maecenas elementum metus et nisl aliquam, eu ullamcorper mauris rutrum. Integer posuere elit quis eros pretium dictum.
              </Span>
            </Wrapper>
          </PresentationLayer>
        </Block>

        <Block style={{ backgroundColor: 'var(--cor-vermelho-claro)', flexDirection: 'row' }}>
          <PresentationLayer style={{ justifyContent: 'flex-start' }}>
            <Wrapper style={{ width: '100vw', display: 'flex', justifyContent: 'flex-end' }}>
              <Animation slice paused={false} name='top-right-corner' loop size={'50vh'} style={{ margin: 0 }} />
            </Wrapper>
            <Wrapper style={{ width: '100vw', display: 'flex', justifyContent: 'flex-start' }}>
              <Animation slice paused={false} name='bottom-left-corner' loop size={'50vh'} style={{ margin: 0 }} />
            </Wrapper>
          </PresentationLayer>
          <PresentationLayer style={{ justifyContent: 'center', position: 'absolute' }}>
            <Wrapper style={{ opacity: 0.5 }}>
              <Animation paused={false} loop name='heart' size={'100vw'} style={{ margin: 0 }} />
            </Wrapper>
          </PresentationLayer>
          <PresentationLayer style={{ justifyContent: 'center', position: 'absolute' }}>
            <Wrapper style={{ display: 'flex', justifyContent: 'center' }}>
              <Span style={{ padding: '0px 16px' }}>
                Praesent augue leo, fermentum in justo eu, hendrerit viverra nunc. Ut vel mollis sapien. Donec sit amet urna porta, faucibus erat eget, egestas urna. Aliquam dapibus magna a nulla mollis varius. Pellentesque ut imperdiet odio. Maecenas elementum metus et nisl aliquam, eu ullamcorper mauris rutrum. Integer posuere elit quis eros pretium dictum.
              </Span>
            </Wrapper>
          </PresentationLayer>
        </Block>

        <Block style={{ backgroundColor: 'var(--cor-verde)', flexDirection: 'row' }}>
          <PresentationLayer style={{ justifyContent: 'center', position: 'absolute' }}>
            <Wrapper style={{ display: 'flex', justifyContent: 'center' }}>
              <Span style={{ padding: '0px 16px' }}>
                Praesent augue leo, fermentum in justo eu, hendrerit viverra nunc. Ut vel mollis sapien. Donec sit amet urna porta, faucibus erat eget, egestas urna. Aliquam dapibus magna a nulla mollis varius. Pellentesque ut imperdiet odio. Maecenas elementum metus et nisl aliquam, eu ullamcorper mauris rutrum. Integer posuere elit quis eros pretium dictum.
              </Span>
            </Wrapper>
          </PresentationLayer>
        </Block>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;