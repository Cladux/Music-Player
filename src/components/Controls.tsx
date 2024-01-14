import playButtonIcon from "../assets/icons/play.svg";
import pauseButtonIcon from "../assets/icons/pause.svg";
import nextButtonIcon from "../assets/icons/next.svg";
import prevButtonIcon from "../assets/icons/prev.svg";
import shuffleButtonIcon from "../assets/icons/shuffle.svg";
import shuffleButtonDisabledIcon from "../assets/icons/shuffle_disabled.svg";
import repeatButtonIcon from "../assets/icons/repeat.svg";
import repeatButtonDisabledIcon from "../assets/icons/repeat_disabled.svg";

type ControlsProps = {
  onPlayClick: () => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  onRepeatClick: () => void;
  onShuffleClick: () => void;
  isPlaying: boolean;
  repeat: boolean;
  shuffle: boolean;
};

const Controls = ({
  onPlayClick,
  isPlaying,
  onPrevClick,
  onNextClick,
  repeat,
  onRepeatClick,
  shuffle,
  onShuffleClick,
}: ControlsProps) => {
  return (
    <div>
      <ImageButton
        src={shuffle ? shuffleButtonIcon : shuffleButtonDisabledIcon}
        onClick={onShuffleClick}
      />
      <ImageButton src={prevButtonIcon} onClick={onPrevClick} />
      <ImageButton
        src={isPlaying ? pauseButtonIcon : playButtonIcon}
        onClick={onPlayClick}
      />
      <ImageButton src={nextButtonIcon} onClick={onNextClick} />
      <ImageButton
        src={repeat ? repeatButtonIcon : repeatButtonDisabledIcon}
        onClick={onRepeatClick}
      />
    </div>
  );
};

export default Controls;

type ImageButtonsProps = {
  src: string;
  onClick: () => void;
  className?: string;
};

const ImageButton = ({ src, onClick, className }: ImageButtonsProps) => {
  const buttonSize = 65;
  return (
    <>
      <button onClick={onClick}>
        <img
          src={src}
          width={buttonSize}
          height={buttonSize}
          className={`drop-shadow-lg ${className ?? ""}`}
        />
      </button>
    </>
  );
};
