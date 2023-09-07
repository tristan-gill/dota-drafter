export const getDefaultForBoardName = (boardName) => {
  const defaults = {
    primaryColor: "#AC2A1C",
    secondaryColor: "#C15F55",
    accentColor: "#febe10",
    textColor: "#000000",
    pickLogoUrl: "https://i.imgur.com/PhWn6pO.png",
    middleSectionBackgroundImage: "",
    middleSectionBackgroundColor: "#AC2A1C",
  };

  if (boardName === 'wc') {
    return {
      primaryColor: '#e86612',
      secondaryColor: "#F4B425",
      accentColor: "#AB3804",
      textColor: "#000000",
      pickLogoUrl: 'https://i.imgur.com/vXKRhHl.png',
      middleSectionBackgroundImage: "https://i.imgur.com/vXKRhHl.png",
      middleSectionBackgroundColor: "#e86612",
    };
  }

  return defaults;
};
