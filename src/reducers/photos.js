const photos = (state = [], action) => {
  switch (action.type) {
    case "LOAD_PHOTOS":
      return [...state, ...action.photos];

    case "LIKE_PHOTO":
      return state.map((photo) => {
        if (photo.id === action.id) {
          photo.likes = action.likes;
          photo.liked_by_user = true;
          return photo;
        }
        return photo;
      });

    case "UNLIKE_PHOTO":
      return state.map((photo) => {
        if (photo.id === action.id) {
          photo.likes = action.likes;
          photo.liked_by_user = false;
          return photo;
        }
        return photo;
      });
    default:
      return state;
  }
};

export default photos;