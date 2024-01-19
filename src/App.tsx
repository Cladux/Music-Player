import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import styled from "styled-components";

function App() {
  const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `;
  return (
    <>
      <Main>
        <AudioPlayer />
      </Main>
    </>
  );
}

export default App;
