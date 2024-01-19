import styled from "styled-components";

type ImageButtonsProps = {
  src: string;
  onClick: () => void;
};

const Button = ({ src, onClick }: ImageButtonsProps) => {
  const size = 40;
  const Button = styled.button`
    border: none;
    border-radius: 50%;
    width: ${size}px;
    height: ${size}px;
  `;
  return (
    <>
      <Button onClick={onClick}>
        <img src={src} />
      </Button>
    </>
  );
};

export default Button;
