import React, { useState, useRef } from "react";
import audioFile from "../../assets/once-in-paris-168895.mp3";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import "./MusicPlayer.css";

const MusicPlayer: React.FC = (props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (): void => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }

      setIsPlaying((prev) => !prev);
    }
  };
  return (
    <>
      <button
        className="toggle-audio"
        onClick={togglePlay}
        aria-label="Click to toggle audio on or off"
      >
        {isPlaying ? (
          <HiSpeakerXMark className="audio-icon mute" />
        ) : (
          <HiSpeakerWave className="audio-icon" />
        )}
      </button>

      <audio ref={audioRef} controls style={{ display: "none" }} loop>
        <source src={audioFile} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default MusicPlayer;
