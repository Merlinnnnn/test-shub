# Task 2: Gas Station Transaction Form

## Tổng quan dự án

**Gas Station Transaction Form** là một ứng dụng web được xây dựng bằng React để quản lý và nhập liệu giao dịch tại trạm xăng. Ứng dụng cung cấp form nhập liệu với validation đầy đủ cho các thông tin giao dịch:

- Nhập thời gian giao dịch với date-time picker
- Nhập số lượng xăng (lít)
- Chọn trụ bơm (Trụ 1, Trụ 2, Trụ 3)
- Nhập doanh thu (VNĐ)
- Nhập đơn giá (VNĐ)
- Validation form với thông báo lỗi chi tiết

### Demo trực tuyến
**Link deploy**: [https://test-shub-hd3n.vercel.app/](https://test-shub-hd3n.vercel.app/)

Bạn có thể truy cập và test ứng dụng trực tiếp tại link trên mà không cần cài đặt gì thêm.

## Cấu trúc dự án

```
task2/
├── public/                 # Tài nguyên tĩnh
├── src/
│   ├── components/         # React components
│   │   └── TransactionForm.tsx   # Component form nhập liệu giao dịch
│   ├── App.tsx            # Component chính
│   ├── main.tsx           # Entry point
│   └── index.css          # Styles
├── package.json           # Dependencies và scripts
├── vite.config.ts         # Cấu hình Vite
└── tsconfig.json          # Cấu hình TypeScript
```

## Chi tiết các component

### TransactionForm.tsx
- **Chức năng**: Form nhập liệu giao dịch trạm xăng
- **Props**: Không có props (standalone component)
- **Tính năng**: 
  - Form validation với Yup schema
  - Date-time picker cho thời gian giao dịch
  - Input fields cho số lượng, doanh thu, đơn giá
  - Dropdown selection cho trụ bơm
  - Error handling và display
  - Form submission với alert confirmation

### Form Fields
1. **Thời gian**: DateTimePicker với validation bắt buộc
2. **Số lượng (lít)**: Number input với validation số dương
3. **Trụ**: Select dropdown với 3 options (Trụ 1, Trụ 2, Trụ 3)
4. **Doanh thu (VNĐ)**: Number input bắt buộc
5. **Đơn giá (VNĐ)**: Number input bắt buộc

## Validation Schema

```typescript
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
```

## Hướng dẫn thực thi

### Truy cập nhanh
Bạn có thể truy cập ứng dụng trực tiếp tại: **[https://test-shub-hd3n.vercel.app/](https://test-shub-hd3n.vercel.app/)**

### Chạy local development

#### 1. Clone repository
```bash
git clone https://github.com/Merlinnnnn/test-shub.git
cd test-shub/task2
```

#### 2. Cài đặt dependencies
```bash
npm install
```

#### 3. Chạy development server
```bash
npm run dev
```
Ứng dụng sẽ chạy tại: `http://localhost:5173`
## Cách sử dụng ứng dụng

### Bắt đầu nhanh
Truy cập **[https://test-shub-hd3n.vercel.app/](https://test-shub-hd3n.vercel.app/)** để sử dụng ứng dụng ngay lập tức.

### Source Code
Repository GitHub: [https://github.com/Merlinnnnn/test-shub.git](https://github.com/Merlinnnnn/test-shub.git)

### Hướng dẫn chi tiết

1. **Nhập thời gian giao dịch**:
   - Click vào field "Thời gian"
   - Chọn ngày và giờ từ date-time picker
   - Validation: Bắt buộc phải chọn

2. **Nhập số lượng**:
   - Nhập số lít xăng đã bán
   - Validation: Phải là số dương

3. **Chọn trụ bơm**:
   - Click dropdown "Trụ"
   - Chọn một trong 3 trụ: Trụ 1, Trụ 2, Trụ 3
   - Validation: Bắt buộc phải chọn

4. **Nhập doanh thu**:
   - Nhập tổng doanh thu bằng VNĐ
   - Validation: Phải là số

5. **Nhập đơn giá**:
   - Nhập đơn giá per lít bằng VNĐ
   - Validation: Phải là số

6. **Submit form**:
   - Click "Cập nhật" để gửi form
   - Nếu validation pass: Hiển thị alert với dữ liệu
   - Nếu có lỗi: Hiển thị thông báo lỗi dưới mỗi field
