import axios, {AxiosInstance, AxiosRequestHeaders} from 'axios';


// // Tạo một instance của Axios
// const api = axios.create({
//   baseURL: 'https://pro-vn1-api.magichands.com.vn/api/v1/',  // URL API chính
//   timeout: 10000,                          // Thời gian chờ request (10s)
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
// });
// api.interceptors.request.use(
//   (config) => {
//     // Bạn có thể thêm token vào header ở đây nếu cần thiết
//     // const token = store.getState().auth.token;
//     // if (token) {
//     //   config.headers.Authorization = `Bearer ${token}`;
//     // }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response) {
//       console.error('API Error:', error.response.data);
//     } else if (error.request) {
//       // Request được gửi nhưng không nhận được phản hồi
//       console.error('No Response:', error.request);
//     } else {
//       // Lỗi khi cấu hình request
//       console.error('Error:', error.message);
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;

export enum ContentType {
  JSON = 'application/json',
  FORM = 'multipart/form-data',
}
export class Http {
  instance: AxiosInstance;

  constructor(
    contentType: ContentType = ContentType.JSON,
    baseUrl: string = process.env.BASE_URL_EXAMINATION as string,
  ) {
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: 10000,
      headers: {
        Accept: 'application/json',
        'Content-Type': contentType,
      },
    });

    // Request Interceptor: Gắn Access Token
    this.instance.interceptors.request.use(
      async (config) => {
        config.headers = {
          Accept: 'application/json',
          'Content-Type': contentType, 
        } as AxiosRequestHeaders;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    // Response Interceptor: Xử lý Refresh Token khi gặp lỗi 401
    // this.instance.interceptors.response.use(
    //   (response) => response, // Trả về response nếu thành công
    //   async (error) => {
    //     const originalRequest = error.config;

    //     // Kiểm tra lỗi 401 (Unauthorized) và chưa retry
    //     if (error.response?.status === 401 && !originalRequest._retry) {
    //       originalRequest._retry = true; // Đánh dấu đã retry

    //       try {
    //         const refreshToken = await StorageApp.getItem('refreshToken'); // Lấy Refresh Token từ storage
    //         if (!refreshToken) throw new Error('No refresh token available');

    //         // Gửi request làm mới token
    //         const refreshResponse = await axios.post(`${baseUrl}/refresh`, {
    //           refresh_token: refreshToken,
    //         });

    //         const { token, refresh_token } = refreshResponse.data;

    //         // Lưu token và refresh_token mới
    //         await StorageApp.setItem('token', token);
    //         await StorageApp.setItem('refreshToken', refresh_token);

    //         // Gắn Access Token mới vào request gốc
    //         originalRequest.headers.Authorization = `Bearer ${token}`;
    //         return this.instance(originalRequest); // Retry với token mới
    //       } catch (refreshError) {
    //         console.error('Failed to refresh token:', refreshError);
    //         return Promise.reject(refreshError); // Có thể logout hoặc xử lý thêm tại đây
    //       }
    //     }

    //     return Promise.reject(error);
    //   },
    // );
  }
}

const https = new Http().instance;
export default https;
