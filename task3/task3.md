# Task 3: Database Design - Gas Station Management System

## Tổng quan dự án

**Task 3** là phần thiết kế cơ sở dữ liệu cho hệ thống quản lý trạm xăng. Dự án bao gồm:

- **ERD (Entity Relationship Diagram)**: Sơ đồ quan hệ thực thể
- **SQL Script**: File tạo và import dữ liệu mẫu

## Các file trong Task 3

### 1. `data-task3.sql` 
- **Mô tả**: File SQL dump chứa toàn bộ cấu trúc và dữ liệu mẫu
- **Nội dung**:
  - Tạo database `quanlytramxang`
  - Tạo 4 bảng chính: `tramxang`, `trubom`, `hanghoa`, `giaodich`
  - Import dữ liệu mẫu cho tất cả các bảng
  - Thiết lập foreign key constraints
  - Tạo indexes cho tối ưu hiệu suất

### 2. `ERD-task3.png`
- **Mô tả**: Sơ đồ quan hệ thực thể (Entity Relationship Diagram)
- **Nội dung**:
  - Hiển thị mối quan hệ giữa các bảng
  - Primary keys và foreign keys
  - Cardinality (1:1, 1:N, N:M)
  - Attributes của từng entity

## Cấu trúc cơ sở dữ liệu

### Bảng `tramxang` (Trạm xăng)
- `tram_id` (PK): ID trạm xăng
- `ten_tram`: Tên trạm xăng
- `dia_chi`: Địa chỉ trạm

### Bảng `hanghoa` (Hàng hóa)
- `hanghoa_id` (PK): ID hàng hóa
- `ten_hanghoa`: Tên hàng hóa
- `loai`: Loại (xăng/dầu)
- `don_vi`: Đơn vị (lit)
- `don_gia`: Đơn giá

### Bảng `trubom` (Trụ bơm)
- `trubom_id` (PK): ID trụ bơm
- `tram_id` (FK): Tham chiếu đến trạm xăng
- `hanghoa_id` (FK): Tham chiếu đến hàng hóa
- `so_hieu`: Số hiệu trụ bơm

### Bảng `giaodich` (Giao dịch)
- `giaodich_id` (PK): ID giao dịch
- `tram_id` (FK): Tham chiếu đến trạm xăng
- `trubom_id` (FK): Tham chiếu đến trụ bơm
- `hanghoa_id` (FK): Tham chiếu đến hàng hóa
- `ngay_gio`: Thời gian giao dịch
- `so_luong`: Số lượng bán
- `tong_tien`: Tổng tiền

## Hướng dẫn import file SQL bằng MySQL Workbench

### Bước 1: Mở MySQL Workbench
1. Khởi động MySQL Workbench
2. Kết nối đến MySQL server của bạn

### Bước 2: Tạo database mới
```sql
CREATE DATABASE quanlytramxang;
USE quanlytramxang;
```

### Bước 3: Import file SQL
1. **Cách 1: Sử dụng File > Open SQL Script**
   - Chọn `File` > `Open SQL Script`
   - Tìm và chọn file `data-task3.sql`
   - Click `Open`
   - Click nút `Execute`  để chạy script

2. **Cách 2: Sử dụng Server > Data Import**
   - Chọn `Server` > `Data Import`
   - Chọn `Import from Self-Contained File`
   - Browse và chọn file `data-task3.sql`
   - Chọn database `quanlytramxang`
   - Click `Start Import`

### Bước 4: Kiểm tra kết quả
```sql
-- Xem danh sách các bảng
SHOW TABLES;

-- Xem dữ liệu mẫu
SELECT * FROM tramxang;
SELECT * FROM hanghoa;
SELECT * FROM trubom;
SELECT * FROM giaodich;
```

## Queries mẫu để test

```sql
-- Câu 1: Giao dịch của trạm 1 trong tháng 7-8/2025
SELECT *
FROM giaodich
WHERE tram_id = 1
  AND ngay_gio BETWEEN '2025-07-01' AND '2025-08-31';

-- Câu 2: Doanh thu theo ngày của trụ bơm 2
SELECT DATE(ngay_gio) AS ngay, SUM(tong_tien) AS tong_doanh_thu
FROM giaodich
WHERE trubom_id = 2
GROUP BY DATE(ngay_gio)
ORDER BY ngay;

-- Câu 3: Doanh thu theo ngày của trụ bơm 2 (lặp lại để test)
SELECT DATE(ngay_gio) AS ngay, SUM(tong_tien) AS tong_doanh_thu
FROM giaodich
WHERE trubom_id = 2
GROUP BY DATE(ngay_gio)
ORDER BY ngay;

-- Câu 4: Top 3 hàng hóa bán chạy nhất tại trạm 1 trong tháng 8/2025
SELECT h.ten_hanghoa, SUM(g.so_luong) AS tong_so_lit, SUM(g.tong_tien) AS tong_doanh_thu
FROM giaodich g
JOIN hanghoa h ON g.hanghoa_id = h.hanghoa_id
WHERE g.tram_id = 1
  AND MONTH(g.ngay_gio) = 8
  AND YEAR(g.ngay_gio) = 2025
GROUP BY g.hanghoa_id, h.ten_hanghoa
ORDER BY tong_so_lit DESC
LIMIT 3;
```

