"use client"
import Image from 'next/image'
import {useEffect, useRef, useState} from "react";

export default function Home() {

  const [showAudioPlayer, setAudioPlayerDisplay] = useState<boolean>(false);
  const ref = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    setTimeout(playAudio, 5000)
  }, [])


  const playAudio = () => {
    console.log("audio")
    // const audio = document.getElementById("audio-player");
    // console.log(audio)
    //@ts-ignore
    // audio?.play?.();
    //@ts-ignore
    ref?.current?.play?.();
  }

  const onClick = () => {
    console.log("Button clicked!")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <video controls autoPlay width={600} height={400}>
        <source src="./video.mp4" type="video/mp4" />
      </video>
      <br/>
      {/* @ts-ignore*/}
      <audio ref={ref} id={"audio-player"} controls autoPlay>
        <source src="audio.mp3" type="audio/mp3" />
      </audio>
    </main>
  )
}
