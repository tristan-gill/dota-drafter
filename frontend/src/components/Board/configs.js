export const getDefaultForBoardName = (boardName) => {
  const defaults = {
    primaryColor: "#AC2A1C",
    secondaryColor: "#C15F55",
    accentColorRadiant: "#febe10",
    accentColorDire: "#febe10",
    textColor: "#000000",
    pickLogoUrl: "https://i.imgur.com/PhWn6pO.png",
    middleSectionBackgroundImage: "",
    middleSectionBackgroundColor: "#AC2A1C",
  };

  if (boardName === 'wc') {
    return {
      primaryColor: '#e86612',
      secondaryColor: "#F4B425",
      accentColorRadiant: "#AB3804",
      accentColorDire: "#AB3804",
      textColor: "#000000",
      pickLogoUrl: 'https://i.imgur.com/vXKRhHl.png',
      middleSectionBackgroundImage: "https://i.imgur.com/vXKRhHl.png",
      middleSectionBackgroundColor: "#e86612",
    };
  }

  if (boardName === 'wc2') {
    return {
      primaryColor: '#7F7F7F',
      secondaryColor: "#CCCCCC",
      accentColorRadiant: "#f5b326",
      accentColorDire: "#f5b326",
      textColor: "#000000",
      pickLogoUrl: 'https://i.imgur.com/vXKRhHl.png',
      middleSectionBackgroundColor: "#e86612",
    };
  }

  return defaults;
};
