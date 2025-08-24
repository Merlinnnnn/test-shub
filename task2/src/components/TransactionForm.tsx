import { Button, TextField, MenuItem, Box } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useFormik } from "formik";
import * as Yup from "yup";
import dayjs, { Dayjs } from "dayjs";

const validationSchema = Yup.object({
  time: Yup.mixed<Dayjs>().required("Vui lòng chọn thời gian"),
  quantity: Yup.number()
    .typeError("Số lượng phải là số")
    .positive("Số lượng phải lớn hơn 0")
    .required("Vui lòng nhập số lượng"),
  pump: Yup.string().required("Vui lòng chọn trụ"),
  revenue: Yup.number()
    .typeError("Doanh thu phải là số")
    .required("Vui lòng nhập doanh thu"),
  price: Yup.number()
    .typeError("Đơn giá phải là số")
    .required("Vui lòng nhập đơn giá"),
});

export default function TransactionForm() {
  const formik = useFormik({
    initialValues: {
      time: dayjs(), 
      quantity: "",
      pump: "",
      revenue: "",
      price: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert("Thêm giao dịch thành công:\n" + JSON.stringify(values, null, 2));
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: 400, p: 3 }}
      >
        {/* Thời gian */}
        <DateTimePicker
          label="Thời gian"
          value={formik.values.time}
          onChange={(value) => formik.setFieldValue("time", value)}
          slotProps={{
            textField: {
              error: formik.touched.time && Boolean(formik.errors.time),
              helperText: formik.touched.time && (formik.errors.time as string), // ✅ ép kiểu
            },
          }}
        />

        {/* Số lượng */}
        <TextField
          label="Số lượng (lít)"
          name="quantity"
          type="number"
          value={formik.values.quantity}
          onChange={formik.handleChange}
          error={formik.touched.quantity && Boolean(formik.errors.quantity)}
          helperText={formik.touched.quantity && formik.errors.quantity}
        />

        {/* Trụ */}
        <TextField
          select
          label="Trụ"
          name="pump"
          value={formik.values.pump}
          onChange={formik.handleChange}
          error={formik.touched.pump && Boolean(formik.errors.pump)}
          helperText={formik.touched.pump && formik.errors.pump}
        >
          <MenuItem value="Trụ 1">Trụ 1</MenuItem>
          <MenuItem value="Trụ 2">Trụ 2</MenuItem>
          <MenuItem value="Trụ 3">Trụ 3</MenuItem>
        </TextField>

        {/* Doanh thu */}
        <TextField
          label="Doanh thu (VNĐ)"
          name="revenue"
          type="number"
          value={formik.values.revenue}
          onChange={formik.handleChange}
          error={formik.touched.revenue && Boolean(formik.errors.revenue)}
          helperText={formik.touched.revenue && formik.errors.revenue}
        />

        {/* Đơn giá */}
        <TextField
          label="Đơn giá (VNĐ)"
          name="price"
          type="number"
          value={formik.values.price}
          onChange={formik.handleChange}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />

        {/* Nút cập nhật */}
        <Button type="submit" variant="contained" color="primary">
          Cập nhật
        </Button>
      </Box>
    </LocalizationProvider>
  );
}
