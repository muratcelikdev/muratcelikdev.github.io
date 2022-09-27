import type { NextPage } from 'next';
import Head from 'next/head';
import Typography from 'src/components/typography';
import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${({ theme }) => theme?.colors.lightGrey.primary};
`;

const Heading = styled(Typography).attrs({ type: 'heading' })`
  background: ${({ theme }) =>
    `linear-gradient(${theme?.colors.lightGrey.primary}, ${theme?.colors.black.default});`};
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Murat Çelik - Frontend Developer</title>
        <meta name="description" content="Murat Çelik - Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <Heading>Coming Soon</Heading>
      </MainContainer>
    </>
  );
};

export default Home;
