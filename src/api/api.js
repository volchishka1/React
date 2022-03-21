import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseUrl: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '3b093860-05cf-4a23-8686-88f94b1c3392'
      }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
          .then(response => {
              return response.data;
              });
      },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
      },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
      },
    getProfile(userId) {
        console.warn('Obsolete method. PleaseProfileApi object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
  getProfile(userId) {
      return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, { status: status });
  }
}

export const authAPI = {
    me() {
      return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`);
    },
    login(email, password, rememberMe = false) {
      return instance.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email, password, rememberMe} );
    },
    logout() {
      return instance.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`);
    }
}