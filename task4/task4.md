# Task 4: Range Sum Query Algorithm

## Tổng quan dự án

**Task 4** là một bài toán thuật toán về Range Sum Query với hai loại query khác nhau:

- **Type 1**: Tính tổng các phần tử trong khoảng [l, r]
- **Type 2**: Tính tổng xen kẽ (alternating sum) trong khoảng [l, r]

Ứng dụng sử dụng **Prefix Sum** để tối ưu hóa thời gian xử lý từ O(n) xuống O(1) cho mỗi query.

## Cấu trúc dự án

```
task4/
├── index.js           # File chính chứa thuật toán
├── package.json       # Dependencies và scripts
├── package-lock.json  # Lock file cho dependencies
└── node_modules/      # Thư mục chứa dependencies
```

## Mô tả thuật toán

### 1. Prefix Sum thông thường
```javascript
const prefixSum = new Array(n);
prefixSum[0] = data[0];
for (let i = 1; i < n; i++) {
  prefixSum[i] = prefixSum[i - 1] + data[i];
}
```
- Tính tổng tích lũy từ đầu mảng đến vị trí i
- `prefixSum[i] = data[0] + data[1] + ... + data[i]`

### 2. Prefix Sum xen kẽ
```javascript
const prefixAlt = new Array(n);
prefixAlt[0] = data[0];
for (let i = 1; i < n; i++) {
  prefixAlt[i] = prefixAlt[i - 1] + (i % 2 === 0 ? data[i] : -data[i]);
}
```
- Tính tổng xen kẽ: `data[0] - data[1] + data[2] - data[3] + ...`
- Vị trí chẵn: cộng, vị trí lẻ: trừ

### 3. Hàm tính range sum
```javascript
const rangeSum = (l, r) => (l === 0 ? prefixSum[r] : prefixSum[r] - prefixSum[l - 1]);
const rangeAlt = (l, r) => (l === 0 ? prefixAlt[r] : prefixAlt[r] - prefixAlt[l - 1]);
```
- Sử dụng công thức: `sum[l,r] = prefixSum[r] - prefixSum[l-1]`
- Xử lý trường hợp đặc biệt khi l = 0

## Hướng dẫn thực thi

### Bước 1: Clone repository
```bash
git clone https://github.com/Merlinnnnn/test-shub.git
cd test-shub/task4
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Chạy ứng dụng
```bash
node index.js
```

## Cách hoạt động của code

### 1. Lấy dữ liệu từ API
```javascript
const resp = await fetch(INPUT_URL);
const inputData = await resp.json();
const data = inputData.data;      // Mảng số nguyên
const queries = inputData.query;  // Mảng các query
const token = inputData.token;    // Token xác thực
```

### 2. Xây dựng Prefix Sum arrays
- **prefixSum**: Tổng tích lũy thông thường
- **prefixAlt**: Tổng tích lũy xen kẽ

### 3. Xử lý từng query
```javascript
const result = queries.map(q => {
  const [l, r] = q.range;
  return q.type === "1" ? rangeSum(l, r) : rangeAlt(l, r);
});
```

### 4. Gửi kết quả về server
```javascript
const resp2 = await fetch(OUTPUT_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  },
  body: JSON.stringify(result)
});
```
## API Endpoints

- **INPUT_URL**: `https://share.shub.edu.vn/api/intern-test/input`
  - Method: GET
  - Response: JSON với data, query, token

- **OUTPUT_URL**: `https://share.shub.edu.vn/api/intern-test/output`
  - Method: POST
  - Headers: Content-Type, Authorization
  - Body: Array kết quả các query
