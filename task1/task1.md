# Task 1: Gas Station Report Analyzer

## Tổng quan dự án

**Gas Station Report Analyzer** là một ứng dụng web được xây dựng bằng React + TypeScript để phân tích báo cáo giao dịch của trạm xăng. Ứng dụng cho phép người dùng:

- Tải lên file Excel (.xlsx, .xls) chứa dữ liệu giao dịch
- Chọn khoảng thời gian để lọc dữ liệu
- Tính toán tổng doanh thu trong khoảng thời gian đã chọn
- Hiển thị kết quả phân tích

### Demo trực tuyến
**Link deploy**: [https://test-shub.vercel.app/](https://test-shub.vercel.app/)

Bạn có thể truy cập và test ứng dụng trực tiếp tại link trên mà không cần cài đặt gì thêm.

## Cấu trúc dự án

```
task1/
├── public/                 # Tài nguyên tĩnh
├── src/
│   ├── components/         # React components
│   │   ├── FileUpload.tsx      # Component upload file Excel
│   │   ├── TimeRangeSelector.tsx   # Component chọn khoảng thời gian
│   │   └── ReportResults.tsx       # Component hiển thị kết quả
│   ├── untils/            # Utility functions
│   │   ├── excelParser.ts         # Xử lý parse file Excel
│   │   └── transactionProcessor.ts # Xử lý logic tính toán
│   ├── App.tsx            # Component chính
│   ├── main.tsx           # Entry point
│   └── index.css          # Styles
├── package.json           # Dependencies và scripts
├── vite.config.ts         # Cấu hình Vite
└── tsconfig.json          # Cấu hình TypeScript
```

## Chi tiết các component

### 1. FileUpload.tsx
- **Chức năng**: Upload file Excel từ người dùng
- **Props**: `onFileUpload: (file: File) => void`
- **Tính năng**: 
  - Drag & drop file
  - Validate định dạng file (.xlsx, .xls)
  - Hiển thị preview file đã chọn

### 2. TimeRangeSelector.tsx
- **Chức năng**: Chọn khoảng thời gian và tính toán
- **Props**: 
  - `startTime`, `endTime`: string
  - `setStartTime`, `setEndTime`: function
  - `onCalculate`: function
  - `onDeleteFile`: function
- **Tính năng**:
  - Input time cho start và end time
  - Button tính toán
  - Button xóa file và reset

### 3. ReportResults.tsx
- **Chức năng**: Hiển thị kết quả phân tích
- **Props**: `total: number`
- **Tính năng**: Hiển thị tổng doanh thu đã được format

## Hướng dẫn thực thi

### Truy cập nhanh
Bạn có thể truy cập ứng dụng trực tiếp tại: **[https://test-shub.vercel.app/](https://test-shub.vercel.app/)**

### Chạy local development

#### 1. Clone repository
```bash
git clone https://github.com/Merlinnnnn/test-shub.git
cd test-shub/task1
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
Truy cập **[https://test-shub.vercel.app/](https://test-shub.vercel.app/)** để sử dụng ứng dụng ngay lập tức.

### Source Code
Repository GitHub: [https://github.com/Merlinnnnn/test-shub.git](https://github.com/Merlinnnnn/test-shub.git)

### Hướng dẫn chi tiết

1. **Upload file Excel**:

   - Hỗ trợ định dạng .xlsx và .xls
   - File phải chứa cột timestamp và amount

2. **Chọn khoảng thời gian**:
   - Nhập thời gian bắt đầu (HH:MM)
   - Nhập thời gian kết thúc (HH:MM)

3. **Tính toán**:
   - Click "Calculate" để xử lý dữ liệu
   - Kết quả sẽ hiển thị tổng doanh thu

4. **Reset**:
   - Click "Delete File" để xóa file và bắt đầu lại


##  UI/UX Features

- **Responsive design**: Tương thích mobile và desktop
- **Modern UI**: Sử dụng Tailwind CSS với design clean
- **User feedback**: Loading states và error handling
- **Accessibility**: Keyboard navigation và screen reader support

