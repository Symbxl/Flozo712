'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { Container, Section, H2, Lead } from '../primitives';
import { Reveal } from '../Reveal';
import { youtube, ytVideos } from '@/data/youtube';

// =====================================================================
//  "View this process on YouTube" — a 1:1 replica of a YouTube dark-mode
//  watch page, embedded in a browser-window frame. Instead of the usual
//  macOS traffic-light dots, the window's top bar carries the real YouTube
//  masthead: the red YouTube logo top-left with the channel's @handle link
//  beside it. The left is a live, watchable player; the right rail lists
//  every video from @LaserWeldTexas — click any one to load it on the left.
//
//  The outer heading uses the site's dark theme; everything inside the
//  window frame is hard-coded to YouTube's own palette so it reads as an
//  authentic YouTube screen sitting on the shop-floor page.
// =====================================================================

const YT = {
  bg: '#0f0f0f',
  bar: '#0f0f0f',
  elevated: '#272727',
  hover: '#3f3f3f',
  text: '#f1f1f1',
  sub: '#aaaaaa',
  red: '#ff0000',
  chip: 'rgba(255,255,255,0.1)',
  border: 'rgba(255,255,255,0.12)',
};

// ---- The official YouTube logo: red play glyph + wordmark ------------
function YouTubeLogo() {
  return (
    <LogoWrap
      href={youtube.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LaserWeld Texas on YouTube"
    >
      <svg viewBox="0 0 28.57 20" width="30" height="21" aria-hidden focusable="false">
        <path
          d="M27.97 3.12A3.64 3.64 0 0 0 25.45.6C23.22 0 14.29 0 14.29 0S5.35 0 3.12.6A3.64 3.64 0 0 0 .6 3.12C0 5.35 0 10 0 10s0 4.65.6 6.88a3.64 3.64 0 0 0 2.52 2.52C5.35 20 14.29 20 14.29 20s8.93 0 11.16-.6a3.64 3.64 0 0 0 2.52-2.52c.6-2.23.6-6.88.6-6.88s0-4.65-.6-6.88Z"
          fill="#FF0000"
        />
        <path d="M11.43 14.29 18.85 10 11.43 5.71Z" fill="#fff" />
      </svg>
      <span className="word">YouTube</span>
    </LogoWrap>
  );
}

// ------------------------- outer section ------------------------------
const Wrap = styled(Section)`
  background: transparent;
`;
const Inner = styled(Container).attrs({ $wide: true })``;

const Eyebrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

const Heading = styled(H2)`
  margin: 1rem 0 0.75rem;
  & em {
    font-style: normal;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

// ------------------------- browser window -----------------------------
const Frame = styled.div`
  margin-top: 3rem;
  border-radius: 14px;
  overflow: hidden;
  background: ${YT.bg};
  border: 1px solid ${YT.border};
  box-shadow: 0 40px 90px -50px rgba(0, 0, 0, 0.9), 0 2px 0 rgba(255, 255, 255, 0.04) inset;
`;

// The YouTube masthead / window title bar.
const Masthead = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 56px;
  padding: 0 0.75rem 0 1rem;
  background: ${YT.bar};
  border-bottom: 1px solid ${YT.border};
`;

const LogoWrap = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  flex-shrink: 0;

  & .word {
    font-family: 'Roboto', ${({ theme }) => theme.fonts.body};
    color: ${YT.text};
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: -0.06em;
    line-height: 1;
  }
`;

// The channel @handle link, sitting right next to the logo.
const HandleLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
  color: ${YT.text};
  text-decoration: none;
  border: 1px solid ${YT.border};
  transition: background 0.15s ease;
  white-space: nowrap;

  &:hover {
    background: ${YT.elevated};
  }

  @media (max-width: 560px) {
    display: none;
  }
`;

const Search = styled.div`
  flex: 1;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  background: #121212;
  border: 1px solid ${YT.border};
  color: ${YT.sub};
  font-size: 0.9rem;
  gap: 8px;

  & svg {
    width: 18px;
    height: 18px;
    opacity: 0.7;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const TopSub = styled.a`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 36px;
  padding: 0 15px;
  border-radius: 999px;
  background: ${YT.text};
  color: #0f0f0f;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.88;
  }

  & svg {
    width: 18px;
    height: 18px;
  }
`;

// ------------------------- watch-page body ----------------------------
const Body = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.5rem;
  padding: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) 402px;
    gap: 1.5rem;
  }
`;

const Main = styled.div`
  min-width: 0;
`;

const Player = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  background: #000;

  & iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const VideoTitle = styled.h3`
  font-family: 'Roboto', ${({ theme }) => theme.fonts.body};
  color: ${YT.text};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.01em;
  margin: 1rem 0 0.35rem;
`;

const VideoMeta = styled.div`
  color: ${YT.sub};
  font-size: 0.85rem;
  margin-bottom: 1rem;
`;

// Channel row under the player: avatar, name/subs, Subscribe.
const ChannelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.9rem 0;
  border-top: 1px solid ${YT.border};
  border-bottom: 1px solid ${YT.border};

  & .avatar {
    width: 42px;
    height: 42px;
    border-radius: 999px;
    object-fit: cover;
    flex-shrink: 0;
  }
  & .name {
    font-weight: 600;
    color: ${YT.text};
    font-size: 0.95rem;
    line-height: 1.2;
  }
  & .subs {
    color: ${YT.sub};
    font-size: 0.78rem;
  }
`;

const Subscribe = styled.a`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 16px;
  border-radius: 999px;
  background: ${YT.text};
  color: #0f0f0f;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
  transition: opacity 0.15s ease;
  white-space: nowrap;

  &:hover {
    opacity: 0.88;
  }
`;

// The action pills (Like / Share / Save) — visual, for the authentic look.
const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1rem;

  & span {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    height: 36px;
    padding: 0 15px;
    border-radius: 999px;
    background: ${YT.chip};
    color: ${YT.text};
    font-size: 0.85rem;
    font-weight: 500;
  }
  & svg {
    width: 18px;
    height: 18px;
  }
`;

// ------------------------- right-hand video rail ----------------------
const Rail = styled.div`
  min-width: 0;
`;

const RailHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;

  & .t {
    color: ${YT.text};
    font-weight: 600;
    font-size: 1rem;
  }
  & a {
    color: ${YT.sub};
    font-size: 0.8rem;
    text-decoration: none;
  }
  & a:hover {
    color: ${YT.text};
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  max-height: 560px;
  overflow-y: auto;
  padding-right: 4px;

  /* Themed scrollbar to match YouTube's dark rail. */
  scrollbar-width: thin;
  scrollbar-color: ${YT.hover} transparent;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${YT.hover};
    border-radius: 999px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-height: 620px;
  }
`;

const Item = styled.button<{ $active: boolean }>`
  display: grid;
  grid-template-columns: 168px 1fr;
  gap: 0.65rem;
  text-align: left;
  padding: 0.35rem;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  background: ${({ $active }) => ($active ? YT.elevated : 'transparent')};
  transition: background 0.15s ease;

  &:hover {
    background: ${YT.elevated};
  }

  & .thumb {
    position: relative;
    aspect-ratio: 16 / 9;
    border-radius: 8px;
    overflow: hidden;
    background: #000;
  }
  & .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  & .nowplaying {
    position: absolute;
    inset: 0;
    display: ${({ $active }) => ($active ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    gap: 6px;
    background: rgba(0, 0, 0, 0.55);
    color: #fff;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
  & .vtitle {
    color: ${YT.text};
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.25;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  & .vchannel {
    color: ${YT.sub};
    font-size: 0.78rem;
    margin-top: 4px;
  }
  & .vmeta {
    color: ${YT.sub};
    font-size: 0.78rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 130px 1fr;
  }
`;

// small inline icons
const Ico = {
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" strokeLinecap="round" />
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22a2.2 2.2 0 0 0 2.2-2.2H9.8A2.2 2.2 0 0 0 12 22Zm6.5-6v-5a6.5 6.5 0 0 0-5-6.34V4a1.5 1.5 0 0 0-3 0v.66A6.5 6.5 0 0 0 5.5 11v5l-1.8 1.8v.9h16.6v-.9L18.5 16Z" />
    </svg>
  ),
  like: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.4 2.4 8 9v11h9.3l3.1-8a2 2 0 0 0-1.9-2.7h-4.6l.8-4.1a2 2 0 0 0-3.3-1.8ZM6 20V9H2v11h4Z" />
    </svg>
  ),
  share: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="m14 9-1.4 1.4L15.2 13H9a6 6 0 0 0-6 6v1h2v-1a4 4 0 0 1 4-4h6.2l-2.6 2.6L14 19l5-5-5-5Z" />
    </svg>
  ),
  save: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z" />
    </svg>
  ),
};

export function WatchOnYouTube() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const current = ytVideos[index];

  const select = (i: number) => {
    setIndex(i);
    setAutoplay(true);
  };

  return (
    <Wrap id="watch">
      <Inner>
        <Reveal delay={60}>
          <Eyebrow>Straight from the shop floor</Eyebrow>
        </Reveal>
        <Reveal delay={90}>
          <Heading>
            View this process on <em>YouTube</em>.
          </Heading>
        </Reveal>
        <Reveal delay={120}>
          <Lead>
            Every capability above, running live on our floor. Watch the builds, the machines,
            and the crew — straight from{' '}
            <a href={youtube.url} target="_blank" rel="noopener noreferrer" style={{ color: '#EB4036' }}>
              {youtube.handle}
            </a>
            .
          </Lead>
        </Reveal>

        <Reveal delay={150}>
          <Frame>
            {/* window title bar → YouTube masthead */}
            <Masthead>
              <YouTubeLogo />
              <HandleLink href={youtube.url} target="_blank" rel="noopener noreferrer">
                {youtube.handle}
              </HandleLink>
              <Search>
                {Ico.search}
                <span>Search LaserWeld Texas</span>
              </Search>
              <TopSub href={youtube.url} target="_blank" rel="noopener noreferrer">
                {Ico.bell}
                Subscribe
              </TopSub>
            </Masthead>

            <Body>
              {/* left: the watchable player */}
              <Main>
                <Player>
                  <iframe
                    key={current.id}
                    src={`https://www.youtube.com/embed/${current.id}?rel=0&modestbranding=1${
                      autoplay ? '&autoplay=1' : ''
                    }`}
                    title={current.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </Player>

                <VideoTitle>{current.title}</VideoTitle>
                <VideoMeta>
                  {current.views} views · {current.when}
                </VideoMeta>

                <ChannelRow>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="avatar" src={youtube.avatar} alt={youtube.channelName} loading="lazy" />
                  <div>
                    <div className="name">{youtube.channelName}</div>
                    <div className="subs">{youtube.subscribers}</div>
                  </div>
                  <Subscribe href={youtube.url} target="_blank" rel="noopener noreferrer">
                    Subscribe
                  </Subscribe>
                </ChannelRow>

                <Actions>
                  <span>{Ico.like} Like</span>
                  <span>{Ico.share} Share</span>
                  <span>{Ico.save} Save</span>
                </Actions>
              </Main>

              {/* right: every video on the channel, as clickable tabs */}
              <Rail>
                <RailHead>
                  <span className="t">From {youtube.handle}</span>
                  <a href={youtube.url} target="_blank" rel="noopener noreferrer">
                    View channel
                  </a>
                </RailHead>
                <List>
                  {ytVideos.map((v, i) => (
                    <Item key={v.id} $active={i === index} onClick={() => select(i)} type="button">
                      <div className="thumb">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`} alt={v.title} loading="lazy" />
                        <span className="nowplaying">▶ Now playing</span>
                      </div>
                      <div>
                        <div className="vtitle">{v.title}</div>
                        <div className="vchannel">{youtube.channelName}</div>
                        <div className="vmeta">
                          {v.views} views · {v.when}
                        </div>
                      </div>
                    </Item>
                  ))}
                </List>
              </Rail>
            </Body>
          </Frame>
        </Reveal>
      </Inner>
    </Wrap>
  );
}
