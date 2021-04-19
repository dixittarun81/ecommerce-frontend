import {
  ADD_NEW_CATEGORY_FAILURE,
  ADD_NEW_CATEGORY_REQUEST,
  ADD_NEW_CATEGORY_SUCCESS,
  GET_ALL_CATEGORIES_SUCCESS,
} from "../actions/types";

const INITIAL_STATE = {
  categories: [],
  error: null,
  loading: false,
};

const buildNewCategories = (parentId, categories, category) => {
  let myCategories = [];

  for (let cat of categories) {
    if (cat._id == parentId) {
      myCategories.push({
        ...cat,
        children:
          cat.children && cat.children.length > 0
            ? buildNewCategories(
                parentId,
                [
                  ...cat.children,
                  {
                    _id: category._id,
                    name: category.name,
                    slug: category.slug,
                    parentId: category.parentId,
                    children: category.children,
                  },
                ],
                category
              )
            : [],
      });
    } else {
      myCategories.push({
        ...cat,
        children:
          cat.children && cat.children.length > 0
            ? buildNewCategories(parentId, cat.children, category)
            : [],
      });
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_SUCCESS:
      return (state = { ...state, categories: action.payload.categories });
    case ADD_NEW_CATEGORY_REQUEST:
      return (state = { ...state, loading: true });
    case ADD_NEW_CATEGORY_SUCCESS:
      const category = action.payload.category;
      const updatedCategories = buildNewCategories(
        category.parentId,
        state.category.categories,
        category
      );
      console.log("updatedCategories", updatedCategories);
      return (state = {
        ...state,
        categories: updatedCategories,
        loading: false,
      });
    case ADD_NEW_CATEGORY_FAILURE:
      return (state = { ...INITIAL_STATE });
    default:
      return state;
  }
};
