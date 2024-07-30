import { SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputField = {
  name: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  type?: string;
  label?: string;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
};

const RUInput = ({
  type = "text",
  label,

  name,

  required = true,
}: TInputField) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className=" flex flex-col">
          <label
            className=" font-Raleway text-base mb-1 font-medium"
            htmlFor={label}
          >
            {label}
          </label>
          {/* <TextField
            sx={{ ...sx }}
            {...field}
            label={label}
            type={type}
            variant="outlined"
            size={size}
            fullWidth={fullWidth}
            error={!!error?.message}
            helperText={error?.message}
          /> */}

          <input
            {...field}
            type={type}
            className={`bg-gray-200 text-lg font-Poppins text-black border ${
              error?.message
                ? "border-red-500 text-red-900 placeholder-red-700 focus:border-red-500"
                : ""
            } text-sm rounded-md block w-4/6 p-2.5 `}
            placeholder={label}
          />
          {error?.message && (
            <p className="text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{error?.message}</span>
            </p>
          )}
        </div>
      )}
    />
  );
};

export default RUInput;
