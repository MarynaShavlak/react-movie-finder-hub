export function setCorrectAvatarURL(avatarURL) {
  if (avatarURL?.match(/^(\/)?http(s)?:\/\//)) {
    return avatarURL.replace(/^\//, '');
  }
  return `https://image.tmdb.org/t/p/original${avatarURL}`;
}
