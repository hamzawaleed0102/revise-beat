export default (state = { cartCount: 0 }, action) => {
  switch (action.type) {
    case "SET_NOTIF":
      return { notificationData: action.notificationData };
    case "SET_LANG_&_CACHE":
      return {
        ...state,
        lang: action.lang,
        cache: action.cache,
        styles: action.styles
      };
    case "SET_USER":
      return { ...state, user: action.user };
    case "LOG_OUT":
      const { user, ...newState } = state;
      return { newState };
    case "SET_CACHE":
      return { ...state, cache: action.cache };
    case "SET_LANG":
      return { ...state, lang: action.lang };
    case "SET_LANG_AND_USER":
      return { ...state, lang: action.lang, user: action.user };
    case "SET_STYLES":
      return { ...state, styles: action.styles };
    case "NEW_MESSAGE":
      return { ...state, newMsg: action.newMsg };
    case "SET_CART_COUNT":
      return { ...state, cartCount: action.cartCount };
    default:
      return state;
  }
};
