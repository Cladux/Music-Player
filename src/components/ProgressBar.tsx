import styled from "styled-components";

type ProgressBarProps = {
  progress: number;
  onChange: (value: number) => void;
  leftLabel: string;
  rightLabel: string;
};

const ProgressBar = ({
  progress,
  onChange,
  leftLabel,
  rightLabel,
}: ProgressBarProps) => {
  const ProgressWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const ProgressInput = styled.input`
    appearance: none;
    width: 400px;
    height: 7px;
    background-color: #505050;
    border-radius: 7px;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: #ff4500;
      cursor: ew-resize;
      box-shadow: 0 0 2px 0 #555;
      transition: all 0.3s ease-in-out;
    }
    &::-moz-range-thumb {
      height: 19px;
      width: 19px;
      background-color: white;
      border-radius: 100%;
      border: #505050 1px solid;
      cursor: pointer;
    }
  `;
  const LabelWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
  `;
  return (
    <ProgressWrapper>
      <ProgressInput
        type="range"
        min="1"
        max="100"
        value={progress}
        step="0.25"
        className="slider"
        onChange={(event) => {
          onChange(parseInt(event?.target.value));
        }}
      />
      <LabelWrapper>
        <span className="text-xs">{leftLabel}</span>
        <span className="text-xs">{rightLabel}</span>
      </LabelWrapper>
    </ProgressWrapper>
  );
};

export default ProgressBar;
