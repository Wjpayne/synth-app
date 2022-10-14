import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Donut } from "react-dial-knob";
import { Effect, Instrument, Song, Track } from "reactronica";
import { OscillatorType } from "./OscillatorType";
import { SynthType } from "./SynthType";
import { GenerateSequence } from "../GenerateSequence/GenerateSequence";

export const Engine = () => {
  //set all effects and synth states
  const [isPlaying, setIsPaying] = useState(false);
  const [distortion, setDistortion] = useState(0);
  const [tremelo, setTremelo] = useState(0);
  const [volume, setVolume] = useState(0);
  const [delay, setDelay] = useState(0);
  const [filter, setFilter] = useState(0);
  const [reverb, setReverb] = useState(0);
  const [synthType, setSynthType] = useState("am");
  const [oscillatorType, setOscillatorType] = useState("sine");
  const [steps, setSteps] = useState([["C3"], 1]);

  //set custom keyboard component state

  return (
    <>
      <Song isPlaying={isPlaying}>
        <Track
          volume={volume}
          steps={steps}
          // Callback for every step
          onStepPlay={(step, index) => {
            console.log(step, index);
          }}
        >
          <Instrument type={synthType} />
          <Effect type="distortion" wet={distortion} />
          <Effect type="feedbackDelay" wet={delay} />
          <Effect type="freeverb" wet={reverb} />
          <Effect type="tremelo" wet={tremelo} />
        </Track>
      </Song>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1 }}
        alignItems="center"
        className="CenterAlign"
        justifyContent="center"
      >
        <Donut
          diameter={100}
          min={0}
          max={100}
          step={1}
          value={volume}
          theme={{
            donutColor: "teal",
            donutThickness: 18,
          }}
          onValueChange={setVolume}
          ariaLabelledBy={"volume"}
        >
          <label id={"volume"}>Volume</label>
        </Donut>
        <Donut
          diameter={100}
          min={0}
          max={10}
          step={1}
          value={distortion}
          theme={{
            donutColor: "teal",
            donutThickness: 18,
          }}
          onValueChange={setDistortion}
          ariaLabelledBy={"Distortion"}
        >
          <Typography>Distortion</Typography>
        </Donut>
        <Donut
          diameter={100}
          min={0}
          max={5}
          step={0.25}
          value={reverb}
          theme={{
            donutColor: "teal",
            donutThickness: 18,
          }}
          onValueChange={setReverb}
          ariaLabelledBy={"Reverb"}
        >
          <Typography>Reverb</Typography>
        </Donut>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1 }}
        alignItems="center"
        className="CenterAlign"
        justifyContent="center"
      >
        <Donut
          diameter={100}
          min={0}
          max={5}
          step={0.25}
          value={tremelo}
          theme={{
            donutColor: "teal",
            donutThickness: 18,
          }}
          onValueChange={setTremelo}
          ariaLabelledBy={"Tremelo"}
        >
          <Typography>Tremelo</Typography>
        </Donut>
        <Donut
          diameter={100}
          min={0}
          max={3}
          step={1}
          value={delay}
          theme={{
            donutColor: "teal",
            donutThickness: 18,
          }}
          onValueChange={setDelay}
          ariaLabelledBy={"Delay"}
        >
          <Typography>Delay</Typography>
        </Donut>
        <Donut
          diameter={100}
          min={0}
          max={5}
          step={0.25}
          value={filter}
          theme={{
            donutColor: "teal",
            donutThickness: 18,
          }}
          onValueChange={setFilter}
          ariaLabelledBy={"Filter"}
        >
          <Typography>Filter</Typography>
        </Donut>
      </Stack>

      <Stack
        spacing={4}
        direction="row"
        sx={{ mb: 1 }}
        alignItems="center"
        className="CenterAlign"
        justifyContent="center"
      >
        <SynthType synthType={synthType} setSynthType={setSynthType} />

        <OscillatorType
          oscillatorType={oscillatorType}
          setOscillatorType={setOscillatorType}
        />
        <br />
        <Button
          onClick={() => {
            setSteps(GenerateSequence);
          }}
        >
          Generate Sequence
        </Button>
        <p>
          Current sequence:
          <br />
          {steps.join('-')}
        </p>
        <Button
          onClick={() => {
            setIsPaying(!isPlaying);
          }}
        >
          {isPlaying ? "Stop" : "Play"}
        </Button>
      </Stack>
    </>
  );
};
