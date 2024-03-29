import playlist from "../playlist/playlist";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import SongInfo from "./SongInfo";
import useAudioPlayer from "../audioPlayer/hooks";
import styled from "styled-components";
import formatTime from "../audioPlayer/formatTime";

const AudioPlayer = () => {
  const {
    playNextTrack,
    playPreviousTrack,
    playerState,
    togglePlayPause,
    toggleRepeat,
    toggleShuffle,
    setPlaybackPosition,
  } = useAudioPlayer(playlist);

  const {
    repeat,
    playbackState,
    shuffle,
    currentTrackDuration,
    currentTrackPlaybackPosition,
    currentTrackMetadata,
  } = playerState;

  function setProgress(value: number) {
    if (currentTrackDuration !== null) {
      setPlaybackPosition((value / 100) * currentTrackDuration);
    }
  }

  function computeProgress(): number {
    const noProgress =
      currentTrackDuration === null ||
      currentTrackPlaybackPosition === null ||
      currentTrackDuration === 0;
    if (noProgress) {
      return 0;
    } else {
      return (currentTrackPlaybackPosition / currentTrackDuration) * 100;
    }
  }
  const Player = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  return (
    <Player>
      <SongInfo
        title={currentTrackMetadata?.title}
        artist={currentTrackMetadata?.artist}
        coverArtSrc={currentTrackMetadata?.coverSrc}
      />
      <ProgressBar
        rightLabel={formatTime(currentTrackDuration)}
        leftLabel={formatTime(currentTrackPlaybackPosition)}
        onChange={setProgress}
        progress={computeProgress()}
      />
      <Controls
        shuffle={shuffle}
        repeat={repeat}
        onShuffleClick={toggleShuffle}
        onRepeatClick={toggleRepeat}
        onPrevClick={playPreviousTrack}
        onNextClick={playNextTrack}
        onPlayClick={togglePlayPause}
        isPlaying={playbackState === "PLAYING"}
      />
    </Player>
  );
};

export default AudioPlayer;
