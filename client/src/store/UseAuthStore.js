import { toast } from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../lib/axiosInstance.js";

export const UseAuthStore = create((set) => ({
  isLoading: false,
  isSigning: false,
  isLogging: false,
  auth: null,
  role: null,
  isAuthenticated: false,
  hasFetchedProfile: false,

  signup: async (data) => {
    set({ isSigning: true });
    try {
      const response = await axiosInstance.post("/auth/signup", data);
      const role = response.data.data.role;
      localStorage.setItem("token", response.data.token);
      set({
        isAuthenticated: true,
        isSigning: false,
        auth: response.data,
        role,
      });
      return role;
    } catch (error) {
      set({ isSigning: false, isAuthenticated: false });
      console.error(error);
      if (error.response) {
        const msg = error.response.data?.msg || "Login failed";
        toast.error(msg);
      }
    }
  },

  login: async (data) => {
    set({ isLogging: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      const role = res.data.data.role;
      localStorage.setItem("token", res.data.token);
      set({
        isAuthenticated: true,
        isLogging: false,
        auth: res.data.data ?? res.data,
        role,
      });
      return role;
    } catch (error) {
      console.error(error);
      if (error.response) {
        const msg = error.response.data?.msg || "Login failed";
        toast.error(msg);
      }
      set({ isLogging: false, isAuthenticated: false });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true });
    try {
      await axiosInstance.post("/auth/logout");
      set({ isAuthenticated: false, auth: null });
    } catch (error) {
      console.log(error);
      set({ isLoading: false });
      toast.error("Something went wrong");
    }
  },

  profile: async () => {
    set({ isLoading: true });
    try {
      const response = await axiosInstance.get("/auth/profile");
      set({
        isLoading: false,
        auth: response.data.data,
        isAuthenticated: true,
        hasFetchedProfile: true,
      });
    } catch (error) {
      set({
        isLoading: false,
        isAuthenticated: false,
        auth: null,
        hasFetchedProfile: true,
      });
      console.log(error);
    }
  },
}));
