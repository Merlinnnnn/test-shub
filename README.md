# Gas Station Management System - Complete Project

## Tổng quan dự án

Bao gồm 4 task chính:

- **Task 1**: Frontend - Gas Station Report Analyzer (React + TypeScript)
- **Task 2**: Frontend - Transaction Form (React + Material-UI)
- **Task 3**: Database Design - Database Schema & ERD
- **Task 4**: Backend Algorithm - Range Sum Query

## Hướng dẫn nhanh

### Clone repository
```bash
git clone https://github.com/Merlinnnnn/test-shub.git
cd test-shub
```

### Truy cập demo trực tuyến
- **Task 1**: [https://test-shub.vercel.app/](https://test-shub.vercel.app/)
- **Task 2**: [https://test-shub-hd3n.vercel.app/](https://test-shub-hd3n.vercel.app/)

## Cấu trúc dự án

```
test-shub/
├── task1/                 # Gas Station Report Analyzer
│   ├── src/
│   ├── package.json
│   └── task1.md          # Hướng dẫn chi tiết Task 1
├── task2/                 # Transaction Form
│   ├── src/
│   ├── package.json
│   └── task2.md          # Hướng dẫn chi tiết Task 2
├── task3/                 # Database Design
│   ├── data-task3.sql    # SQL script
│   ├── ERD-task3.png     # Entity Relationship Diagram
│   └── task3.md          # Hướng dẫn chi tiết Task 3
├── task4/                 # Range Sum Query Algorithm
│   ├── index.js          # Main algorithm file
│   ├── package.json
│   └── task4.md          # Hướng dẫn chi tiết Task 4
└── README.md             # File này
```

## Chi tiết từng Task

### Task 1: Gas Station Report Analyzer
**Mục đích**: Phân tích báo cáo giao dịch trạm xăng từ file Excel

**Công nghệ**: React + TypeScript + Tailwind CSS + xlsx

**Tính năng chính**:
- Upload file Excel (.xlsx, .xls)
- Chọn khoảng thời gian để lọc dữ liệu
- Tính toán tổng doanh thu
- Hiển thị kết quả phân tích

**Demo**: [https://test-shub.vercel.app/](https://test-shub.vercel.app/)

**Hướng dẫn chi tiết**: [task1/task1.md](task1/task1.md)

---

### Task 2: Transaction Form
**Mục đích**: Form nhập liệu giao dịch trạm xăng với validation

**Công nghệ**: React + TypeScript + Material-UI + Formik + Yup

**Tính năng chính**:
- Form nhập liệu với validation đầy đủ
- Date-time picker cho thời gian giao dịch
- Dropdown selection cho trụ bơm
- Real-time validation và error handling

**Demo**: [https://test-shub-hd3n.vercel.app/](https://test-shub-hd3n.vercel.app/)

**Hướng dẫn chi tiết**: [task2/task2.md](task2/task2.md)

---

### Task 3: Database Design
**Mục đích**: Thiết kế cơ sở dữ liệu cho hệ thống quản lý trạm xăng

**Nội dung**:
- Entity Relationship Diagram (ERD)
- SQL script tạo database và dữ liệu mẫu
- 4 bảng chính: tramxang, trubom, hanghoa, giaodich
- 10 giao dịch mẫu với dữ liệu thực tế

**Hướng dẫn chi tiết**: [task3/task3.md](task3/task3.md)

---

### Task 4: Range Sum Query Algorithm
**Mục đích**: Thuật toán xử lý range sum query với API integration

**Công nghệ**: Node.js + JavaScript + node-fetch

**Tính năng chính**:
- Prefix Sum algorithm cho range queries
- 2 loại query: tổng thường và tổng xen kẽ
- API integration để lấy dữ liệu và gửi kết quả
- Tối ưu hóa từ O(n) xuống O(1) cho mỗi query


**Hướng dẫn chi tiết**: [task4/task4.md](task4/task4.md)

## Links quan trọng

### Demo trực tuyến
- **Task 1**: [https://test-shub.vercel.app/](https://test-shub.vercel.app/)
- **Task 2**: [https://test-shub-hd3n.vercel.app/](https://test-shub-hd3n.vercel.app/)

### Source Code
- **GitHub Repository**: [https://github.com/Merlinnnnn/test-shub.git](https://github.com/Merlinnnnn/test-shub.git)

### Documentation
- **Task 1**: [task1/task1.md](task1/task1.md)
- **Task 2**: [task2/task2.md](task2/task2.md)
- **Task 3**: [task3/task3.md](task3/task3.md)
- **Task 4**: [task4/task4.md](task4/task4.md)

**Lưu ý**: Mỗi task có thể chạy độc lập. Xem file `.md` tương ứng trong từng thư mục task để biết thêm chi tiết.


