import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export const SynthType = ({ setSynthType }) => {
  return (
    <>
      <Stack alignItems="center" justifyContent="center">
        <FormControl component="fieldset">
          <FormLabel component="legend">Synth Type</FormLabel>
          <RadioGroup aria-label="synth type" defaultValue="amSynth">
            <FormControlLabel
              value="amSynth"
              control={<Radio onClick={() => setSynthType("amSynth")} />}
              label="AM"
            />
            <FormControlLabel
              value="fmSynth"
              control={<Radio onClick={() => setSynthType("fmSynth")} />}
              label="FM"
            />
            <FormControlLabel
              value="monoSynth"
              control={<Radio onClick={() => setSynthType("monoSynth")} />}
              label="MONO"
            />
          </RadioGroup>
        </FormControl>
      </Stack>
    </>
  );
};
