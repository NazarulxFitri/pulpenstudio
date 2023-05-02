import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface RadioButtonProps {
  setTitleShadow?: (value: string) => void;
  targetInput: string;
  setTitlePos?: (value: string) => void;
  setDescriptionPos?: (valiue: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  setTitleShadow,
  setTitlePos,
  setDescriptionPos,
  targetInput,
}) => {
  function handleChange(e: any) {
    e.preventDefault();
    !!setTitleShadow && setTitleShadow(e.target.value as string);
    !!setTitlePos && setTitlePos(e.target.value);
    !!setDescriptionPos && setDescriptionPos(e.target.value);
  }

  if (!!setTitleShadow)
    return (
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Text shadow
        </FormLabel>
        <RadioGroup
          defaultValue={`off-${targetInput}`}
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel
            value={`on-${targetInput}`}
            control={<Radio />}
            label="On"
          />
          <FormControlLabel
            value={`off-${targetInput}`}
            control={<Radio />}
            label="Off"
          />
        </RadioGroup>
      </FormControl>
    );

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Text Position
      </FormLabel>
      <RadioGroup
        defaultValue={`center-${targetInput}`}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel
          value={`left-${targetInput}`}
          control={<Radio />}
          label="Left"
        />
        <FormControlLabel
          value={`right-${targetInput}`}
          control={<Radio />}
          label="Right"
        />
        <FormControlLabel
          value={`center-${targetInput}`}
          control={<Radio />}
          label="Center"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
