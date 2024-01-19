import trackOne from "./songs/track1.mp3";
import trackTwo from "./songs/track2.mp3";
import trackThree from "./songs/track3.mp3";
import trackFour from "./songs/track4.mp3";
import coverOne from "./cover/1.jpg";
import coverTwo from "./cover/2.jpg";
import coverThree from "./cover/3.jpg";
import coverFour from "./cover/4.jpg";
import { Playlist } from "../audioPlayer/types";

const playlist: Playlist = [
  {
    audioSrc: trackOne,
    metadata: {
      title: "Don't Panic",
      artist: "Cold Play",
      coverSrc: coverOne,
    },
  },
  {
    audioSrc: trackTwo,
    metadata: {
      title: "After Dark ",
      artist: "Mr.Kitty",
      coverSrc: coverTwo,
    },
  },
  {
    audioSrc: trackThree,
    metadata: {
      title: "Night Call",
      artist: "Kavinsky",
      coverSrc: coverThree,
    },
  },
  {
    audioSrc: trackFour,
    metadata: {
      title: "Acid Rain",
      artist: "Lorn",
      coverSrc: coverFour,
    },
  },
];

export default playlist;
