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
    backgroundColor: "#00000000",
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
      backgroundColor: "#00000000",
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
      backgroundColor: "#00000000",
    };
  }

  if (boardName === 'nadcl') {
    return {
      primaryColorRadiant: '#070b30',
      primaryColorDire: '#070b30',
      secondaryColorRadiant: "#323554",
      secondaryColorDire: "#323554",
      accentColorRadiant: "#f32031",
      accentColorDire: "#f32031",
      textColor: "#ffffff",
      pickLogoUrl: 'https://i.imgur.com/mXQbaQo.png',
      middleSectionBackgroundImage: "https://i.imgur.com/x7FoBLd.png",
      middleSectionBackgroundColor: "#e86612",
      backgroundColor: "#00000000",
    };
  }

  if (boardName === 'nadclop') {
    return {
      primaryColorRadiant: '#00000000',
      primaryColorDire: '#00000000',
      secondaryColorRadiant: "#00000000",
      secondaryColorDire: "#00000000",
      accentColorRadiant: "#00000000",
      accentColorDire: "#00000000",
      textColor: "#000000",
      pickLogoUrl: '',
      middleSectionBackgroundImage: "",
      middleSectionBackgroundColor: "#00000000",
      backgroundColor: "#00000000",
    };
  }

  return defaults;
};
