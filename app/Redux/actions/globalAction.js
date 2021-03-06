const setLanguageAndCache = (lang, cache, styles) => {
  return {
    type: "SET_LANG_&_CACHE",
    lang: lang,
    cache: cache,
    styles: styles
  };
};

const setCache = cache => {
  return {
    type: "SET_CACHE",
    cache: cache
  };
};

const setUser = data => {
  return {
    type: "SET_USER",
    user: data
  };
};

const setLang = lang => {
  return {
    type: "SET_LANG",
    lang: lang
  };
};

export const setUserAndLang = (user, lang) => {
  return {
    type: "SET_LANG_AND_USER",
    lang: lang,
    user: user
  };
};
export const setStyles = styles => {
  return {
    type: "SET_STYLES",
    styles: styles
  };
};

export const setNotif = data => {
  return {
    type: "SET_NOTIF",
    notificationData: data
  };
};

export default {setNotif, setStyles, setUserAndLang, setLanguageAndCache, setCache, setUser, setLang}
