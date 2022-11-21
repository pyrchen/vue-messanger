import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const isAuthed = ref(false);
    

    function setAuthed(value: boolean) {
        isAuthed.value = value;
    }

    return { isAuthed, setAuthed };
});