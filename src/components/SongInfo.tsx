import styled from "styled-components";

type SongInfoProps = {
  title?: string;
  artist?: string;
  coverArtSrc?: string;
};
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const Image = styled.img`
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  border-radius: 2px;
  margin-bottom: 20px;
`;
const MainTitle = styled.span`
  font-size: 18px;
`;
const SecondTitle = styled.span`
  font-size: 12px;
`;
const SongInfo = ({ title, artist, coverArtSrc }: SongInfoProps) => {
  return (
    <Info>
      <Image width={180} height={180} src={coverArtSrc} />
      <MainTitle>{title}</MainTitle>
      <SecondTitle>{artist}</SecondTitle>
    </Info>
  );
};

export default SongInfo;
