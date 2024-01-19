import playButtonIcon from "../assets/icons/play.svg";
import pauseButtonIcon from "../assets/icons/pause.svg";
import nextButtonIcon from "../assets/icons/next.svg";
import prevButtonIcon from "../assets/icons/prev.svg";
import shuffleButtonIcon from "../assets/icons/shuffle.svg";
import shuffleButtonDisabledIcon from "../assets/icons/shuffle_disabled.svg";
import repeatButtonIcon from "../assets/icons/repeat.svg";
import repeatButtonDisabledIcon from "../assets/icons/repeat_disabled.svg";
import Button from "./Button";
import styled from "styled-components";

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
  const BtnWrapper = styled.div`
    display: flex;
    margin-top: 20px;
  `;
  return (
    <BtnWrapper>
      <Button
        src={shuffle ? shuffleButtonIcon : shuffleButtonDisabledIcon}
        onClick={onShuffleClick}
      />
      <Button src={prevButtonIcon} onClick={onPrevClick} />
      <Button
        src={isPlaying ? pauseButtonIcon : playButtonIcon}
        onClick={onPlayClick}
      />
      <Button src={nextButtonIcon} onClick={onNextClick} />
      <Button
        src={repeat ? repeatButtonIcon : repeatButtonDisabledIcon}
        onClick={onRepeatClick}
      />
    </BtnWrapper>
  );
};

export default Controls;
