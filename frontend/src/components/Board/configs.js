export const getDefaultForBoardName = (boardName) => {
  const defaults = {
    primaryColorRadiant: "#AC2A1C",
    primaryColorDire: "#AC2A1C",
    secondaryColorRadiant: "#C15F55",
    secondaryColorDire: "#C15F55",
    accentColorRadiant: "#febe10",
    accentColorDire: "#febe10",
    textColor: "#000000",
    pickLogoUrl: "https://i.imgur.com/PhWn6pO.png",
    middleSectionBackgroundImage: "",
    middleSectionBackgroundColor: "#AC2A1C",
  };

  if (boardName === 'wc') {
    return {
      primaryColorRadiant: '#556e3b',
      primaryColorDire: '#913d3d',
      secondaryColorRadiant: "#709164",
      secondaryColorDire: "#916464",
      accentColorRadiant: "#0FE800",
      accentColorDire: "#E80000",
      textColor: "#000000",
      pickLogoUrl: 'https://i.imgur.com/OC5hJYv.png',
      middleSectionBackgroundColor: "#cba74ebf",
      middleSectionBackgroundImage: "https://i.imgur.com/REO8q9k.png",
    };
    
  }

  if (boardName === 'wc2') {
    return {
      primaryColorRadiant: '#e86612',
      primaryColorDire: '#e86612',
      secondaryColorRadiant: "#F4B425",
      secondaryColorDire: "#F4B425",
      accentColorRadiant: "#AB3804",
      accentColorDire: "#AB3804",
      textColor: "#000000",
      pickLogoUrl: 'https://i.imgur.com/vXKRhHl.png',
      middleSectionBackgroundImage: "https://i.imgur.com/vXKRhHl.png",
      middleSectionBackgroundColor: "#e86612",
    };
  }

  return defaults;
};
