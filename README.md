Đây là bài tập cho môn IA4, thực hiện một luồng xác thực an toàn phía client bằng React, sử dụng Access Token và Refresh Token.

Public URL: https://your-public-deployment-url.com

# Các tính năng chính:

- Luồng xác thực hoàn chỉnh: Đăng nhập, Đăng xuất và điều hướng.
- Quản lý Token: Access Token được lưu trong bộ nhớ (memory) , Refresh Token được lưu trong localStorage.
- Axios Interceptor: Tự động đính kèm Access Token vào header và tự động làm mới (refresh) token khi hết hạn (lỗi 401).
- Quản lý State bất đồng bộ: Sử dụng React Query cho các lệnh gọi API (useQuery, useMutation).
- Validation Form: Sử dụng React Hook Form để quản lý và xác thực (validate) form đăng nhập.
- Protected Routes: Bảo vệ các trang Dashboard, tự động chuyển hướng người dùng chưa đăng nhập về trang Login.

# Công nghệ sử dụng:
Frontend: React, React Router, Axios, React Query, React Hook Form
Backend (Mock): Node.js, Express, jsonwebtoken (để giả lập việc tạo và xác thực token)

# Hướng dẫn cài đặt và chạy:
Dự án này bao gồm hai phần: client (frontend) và server (mock backend). Bạn cần chạy cả hai.

1. Chạy Backend:
#Đi tới thư mục server
cd Source/server

#Cài đặt các thư viện
npm install

#Tạo file .env và định nghĩa 2 biến
#JWT_ACCESS_SECRET=...
#JWT_REFRESH_SECRET=...

#Khởi động server (chạy trên http://localhost:3001)
npm run dev

2. Chạy Frontend:
#Mở một terminal mới, đi tới thư mục client
cd Source/client

#Cài đặt các thư viện
npm install

#Khởi động ứng dụng React (chạy trên http://localhost:5173)
npm run dev

3. Truy cập ứng dụng:
Mở trình duyệt và truy cập http://localhost:5173.

# Ghi chú về Database:
Theo yêu cầu tùy chọn của bài tập, dự án này không sử dụng cơ sở dữ liệu (database). Thay vào đó, một Mock Backend (trong thư mục Source/backend) được tạo ra để giả lập các API và luồng trả về token.

Dữ liệu người dùng mẫu được định nghĩa cứng (hard-coded) trong file: Source/server/services/authService.js

Tài khoản đăng nhập (Mock Account):
Email: test@example.com
Password: password123