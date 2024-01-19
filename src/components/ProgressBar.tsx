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
  const LabelWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
  `;
  return (
    <ProgressWrapper>
      <input
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
