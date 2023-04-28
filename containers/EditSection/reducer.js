import {createSlice} from "@reduxjs/toolkit";
import {SavingState} from "./index";

const initialState = {
  activeCase: {},
  activeSection: {},
  caseId: "",
  sections: [],
  sectionTitle: "",
  loading: false,
  error: false,
  section: null,
  name: '',
  content: '',
  saving: SavingState.SAVED
}

const editSectionReducer = createSlice({
  name: 'editSection',
  initialState,
  reducers: {
    fetchEditSectionsLoading(state) {
      state.loading = true;
      state.error = false;
    },
    fetchEditSectionsSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.sections = action.payload.sections;
    },
    fetchEditSectionsError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setSelectedSection(state, action) {
      state.activeSection = action.payload.activeSection;
    },
    setDataName(state, action) {
      state.name = action.payload;
    },
    setDataContent(state, action) {
      state.content = action.payload;
    },
    setDataSaving(state, action) {
      state.saving = action.payload;
    },
    editSectionLoading(state) {
      // state.loading = true;
      state.error = false;
      state.saving = SavingState.SAVING;
    },
    editSectionSuccess(state) {
      // state.loading = false;
      state.error = false;
      state.saving = SavingState.SAVED;
    },
    editSectionError(state, action) {
      // state.loading = false;
      state.error = action.payload;
      state.saving = SavingState.NOT_SAVED;
    },
    deleteSectionLoading(state) {
      state.loading = true;
      state.error = false;
    },
    deleteSectionSuccess(state) {
      state.loading = false;
      state.error = false;
    },
    deleteSectionError(state, action) {
      state.loading = false;
      state.loading = action.payload;
    },
  }
});

export default editSectionReducer.reducer;
export const {
  fetchEditSectionsLoading,
  fetchEditSectionsSuccess,
  fetchEditSectionsError,
  setSelectedSection,
  setDataName,
  setDataContent,
  setDataSaving,
  editSectionLoading,
  editSectionSuccess,
  editSectionError,
  deleteSectionLoading,
  deleteSectionSuccess,
  deleteSectionError
} = editSectionReducer.actions;