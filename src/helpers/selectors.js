export function getTotalPhotos(state) {
  // Check if state.photos is defined and is an array
  return Array.isArray(state.photos) ? state.photos.length : 0;
}

export function getTotalTopics(state) {
  // Check if state.topics is defined and is an array
  return Array.isArray(state.topics) ? state.topics.length : 0;
}


export function getUserWithMostUploads(state) {
  const arrayOfNames = state.photos.map((photo)=> photo.user.name);
  const objectOfNames = {};
  arrayOfNames.forEach(name => objectOfNames[name] ? objectOfNames[name] ++ : objectOfNames[name] = 1)
  const filteredNames = Object.keys(objectOfNames).filter(x => {
    return objectOfNames[x] === Math.max.apply(null, Object.values(objectOfNames));
  })
  return filteredNames[0];
}

export function getUserWithLeastUploads(state) {
  const arrayOfNames = state.photos.map((photo)=> photo.user.name);
  const objectOfNames = {};
  arrayOfNames.forEach(name => objectOfNames[name] ? objectOfNames[name] ++ : objectOfNames[name] = 1)
  const filteredNames = Object.keys(objectOfNames).filter(x => {
    return objectOfNames[x] === Math.min.apply(null, Object.values(objectOfNames));
  })
  return filteredNames[0];
}