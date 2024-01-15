type SongInfoProps = {
  title?: string;
  artist?: string;
  coverArtSrc?: string;
};

const SongInfo = ({ title, artist, coverArtSrc }: SongInfoProps) => {
  return (
    <div>
      <img width={180} height={180} src={coverArtSrc} />
      <span>{title}</span>
      <span>{artist}</span>
    </div>
  );
};

export default SongInfo;
