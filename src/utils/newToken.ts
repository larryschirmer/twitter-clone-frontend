const dayInMilliseconds = 1000 * 60 * 60 * 24;
const newToken = (token: string) =>
  `token=${token}; expires=${new Date(Date.now() + dayInMilliseconds)}; path=/`;

export default newToken;
