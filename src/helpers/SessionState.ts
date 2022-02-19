const isStatePersisted = (stateName: string) : any => {
  const sessionState = sessionStorage.getItem(stateName);

  return sessionState && JSON.parse(sessionState);
};

export { isStatePersisted };