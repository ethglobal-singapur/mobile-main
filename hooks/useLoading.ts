import { create } from "zustand";

type StateType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const useLoading = create<StateType>((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
}));

export default useLoading;
