import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface State {
  user: any;
}

export const useStore = create<State>()(
  devtools(
    persist((set) => ({
      user: null,
      setUser: (u: any) => set({ user: u }),
    })),
  ),
);
