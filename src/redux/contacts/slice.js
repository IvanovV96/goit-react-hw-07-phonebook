import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact(state, { payload }) {
      const contact = { id: nanoid(), ...payload };
      state.push(contact);
    },
    removeContact(state, { payload }) {
      return state.filter(item => item.id !== payload);
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, removeContact } = contactsSlice.actions;

export const getContacts = state => {
  return state.contacts;
};
