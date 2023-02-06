import dayjs,{ Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/nl"
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
interface IDateSelector {
  control: Control<FieldValues, any>;
}
export const DateSelector = (props: IDateSelector) => {
  const { control } = props;
  const locale ="nl"

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <Controller
        name="day"
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            label="Date"
            value={value}
            onChange={onChange}
            renderInput={(params: any) => <TextField {...params} />}
          />
        )}
      ></Controller>
    </LocalizationProvider>
  );
};
