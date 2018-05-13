export const selectBook = book => {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object wiht a type property.
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
};
