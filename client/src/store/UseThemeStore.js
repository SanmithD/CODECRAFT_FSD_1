import { create } from 'zustand';

export const UseThemeStore = create((set) =>({
    theme : localStorage.getItem('theme'),

    changeTheme: (theme) =>{
        set({ theme: theme });
        localStorage.setItem('theme',theme)
    }
}))