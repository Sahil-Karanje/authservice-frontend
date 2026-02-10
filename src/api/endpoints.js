export const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const ENDPOINTS = {
  login: `${API_BASE}/api/auth/login`,
  register: `${API_BASE}/api/auth/register`,
  profile: `${API_BASE}/api/auth/me`,
  logout: `${API_BASE}/api/auth/logout`
};