const eraseCookie = (name: string) => {
  document.cookie = name + '=; Max-Age=0';
};

export default eraseCookie;
