import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface RadioButtonProps {
  setTitleShadow: (value: string) => void;
  targetInput: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  setTitleShadow,
  targetInput,
}) => {
  function handleChange(e: any) {
    e.preventDefault();
    setTitleShadow(e.target.value as string);
  }
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Text shadow</FormLabel>
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
};

export default RadioButton;
