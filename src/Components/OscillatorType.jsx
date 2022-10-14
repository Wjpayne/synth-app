import React from 'react'
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
  } from "@mui/material";
  import { Stack } from "@mui/system";

export const OscillatorType = ({setOscillatorType} ) => {
  return (
    <>
    <Stack alignItems="center" justifyContent="center">
      <FormControl component="fieldset">
        <FormLabel component="legend">Oscillator Type</FormLabel>
        <RadioGroup aria-label="oscillator type" defaultValue="sine">
          <FormControlLabel
            value="sine"
            control={<Radio onClick={() => setOscillatorType("sine")} />}
            label="SINE"
          />
          <FormControlLabel
            value="triangle"
            control={<Radio onClick={() => setOscillatorType("triangle")} />}
            label="TRIANGLE"
          />
          <FormControlLabel
            value="square"
            control={<Radio onClick={() => setOscillatorType("square")} />}
            label="SQUARE"
          />
        </RadioGroup>
      </FormControl>
    </Stack>
  </>
  )
}
