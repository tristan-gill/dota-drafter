import './Board.css';
import React, { useEffect, useState } from 'react';
import { getDefaultForBoardName } from './configs';

const Board = ({ draft, boardName }) => {
  const [radiantTeam, setRadiantTeam] = useState("Team 1");
  const [direTeam, setDireTeam] = useState("Team 2");
  const [game, setGame] = useState("Game 1");
  const [radiantScore, setRadiantScore] = useState("0");
  const [direScore, setDireScore] = useState("0");
  const [nextAction, setNextAction] = useState();

  const config = getDefaultForBoardName(boardName);
  const [primaryColor, setPrimaryColor] = useState(config.primaryColor);
  const [secondaryColor, setSecondaryColor] = useState(config.secondaryColor);
  const [accentColor, setAccentColor] = useState(config.accentColor);
  const [textColor, setTextColor] = useState(config.textColor);
  const [pickLogoUrl, setPickLogoUrl] = useState(config.pickLogoUrl);
  const [middleSectionBackgroundImage, setMiddleSectionBackgroundImage] = useState(config.middleSectionBackgroundImage);
  const [middleSectionBackgroundColor, setMiddleSectionBackgroundColor] = useState(config.middleSectionBackgroundColor);

  // const saveAppearanceSettings = () => {
  //   localStorage.setItem('primaryColor', primaryColor);
  //   localStorage.setItem('secondaryColor', secondaryColor);
  //   localStorage.setItem('accentColor', accentColor);
  //   localStorage.setItem('textColor', textColor);
  //   localStorage.setItem('pickLogoUrl', pickLogoUrl);
  //   localStorage.setItem('middleSectionBackgroundImage', middleSectionBackgroundImage);
  //   localStorage.setItem('middleSectionBackgroundColor', middleSectionBackgroundColor);
  // };
  // const loadAppearanceSettings = () => {
  //   setPrimaryColor(localStorage.getItem('primaryColor'));
  //   setSecondaryColor(localStorage.getItem('secondaryColor'));
  //   setAccentColor(localStorage.getItem('accentColor'));
  //   setTextColor(localStorage.getItem('textColor'));
  //   setPickLogoUrl(localStorage.getItem('pickLogoUrl'));
  //   setMiddleSectionBackgroundImage(localStorage.getItem('middleSectionBackgroundImage'));
  //   setMiddleSectionBackgroundColor(localStorage.getItem('middleSectionBackgroundColor'));
  // };

  // surely a better way than this, but im tired
  useEffect(() => {
    if (draft?.activeteam === 2) {
      if (draft?.pick) {
        const index = [
          draft?.team2?.pick0_class,
          draft?.team2?.pick1_class,
          draft?.team2?.pick2_class,
          draft?.team2?.pick3_class,
          draft?.team2?.pick4_class
        ].findIndex((a) => a === '');
        const options = [
          "team2.pick0_class",
          "team2.pick1_class",
          "team2.pick2_class",
          "team2.pick3_class",
          "team2.pick4_class"
        ];
        setNextAction(options[index]);
      } else {
        const index = [
          draft?.team2?.ban0_class,
          draft?.team2?.ban1_class,
          draft?.team2?.ban2_class,
          draft?.team2?.ban3_class,
          draft?.team2?.ban4_class,
          draft?.team2?.ban5_class,
          draft?.team2?.ban6_class,
        ].findIndex((a) => a === '');
        const options = [
          "team2.ban0_class",
          "team2.ban1_class",
          "team2.ban2_class",
          "team2.ban3_class",
          "team2.ban4_class",
          "team2.ban5_class",
          "team2.ban6_class",
        ];
        setNextAction(options[index]);
      }
    }
    if (draft?.activeteam === 3) {
      if (draft?.pick) {
        const index = [
          draft?.team3?.pick0_class,
          draft?.team3?.pick1_class,
          draft?.team3?.pick2_class,
          draft?.team3?.pick3_class,
          draft?.team3?.pick4_class
        ].findIndex((a) => a === '');
        const options = [
          "team3.pick0_class",
          "team3.pick1_class",
          "team3.pick2_class",
          "team3.pick3_class",
          "team3.pick4_class"
        ];
        setNextAction(options[index]);
      } else {
        const index = [
          draft?.team3?.ban0_class,
          draft?.team3?.ban1_class,
          draft?.team3?.ban2_class,
          draft?.team3?.ban3_class,
          draft?.team3?.ban4_class,
          draft?.team3?.ban5_class,
          draft?.team3?.ban6_class,
        ].findIndex((a) => a === '');
        const options = [
          "team3.ban0_class",
          "team3.ban1_class",
          "team3.ban2_class",
          "team3.ban3_class",
          "team3.ban4_class",
          "team3.ban5_class",
          "team3.ban6_class",
        ];
        setNextAction(options[index]);
      }
    }
  }, [
    draft?.activeteam,
    draft?.pick,

    draft?.team2?.ban0_class,
    draft?.team2?.ban1_class,
    draft?.team2?.pick0_class,
    draft?.team2?.pick1_class,
    draft?.team2?.ban2_class,
    draft?.team2?.ban3_class,
    draft?.team2?.ban4_class,
    draft?.team2?.pick2_class,
    draft?.team2?.pick3_class,
    draft?.team2?.ban5_class,
    draft?.team2?.ban6_class,
    draft?.team2?.pick4_class,

    draft?.team3?.ban0_class,
    draft?.team3?.ban1_class,
    draft?.team3?.pick0_class,
    draft?.team3?.pick1_class,
    draft?.team3?.ban2_class,
    draft?.team3?.ban3_class,
    draft?.team3?.ban4_class,
    draft?.team3?.pick2_class,
    draft?.team3?.pick3_class,
    draft?.team3?.ban5_class,
    draft?.team3?.ban6_class,
    draft?.team3?.pick4_class
  ]);

  const renderBanHero = (heroName, isNext) => {
    return (
      <div
        className="ban-image-container"
        style={{ backgroundColor: primaryColor, ...(isNext && { boxShadow: `inset 0px 0px 20px 0px ${accentColor}` }) }}
      >
        {heroName && (
          <img className='ban-image' src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroName}.png`} alt={heroName} />
        )}
      </div>
    );
  };

  const renderHeroAnimation = (heroName, isNext) => {
    return (
      <div
        className="hero-animation-container"
        style={{
          backgroundColor: secondaryColor,
          ...(isNext && { boxShadow: `inset 0px 0px 20px 0px ${accentColor}` }),
          backgroundImage: `url(${pickLogoUrl})`
        }}
      >
        {!!heroName && (
          <video className="hero-animation" autoPlay={true} loop={true} muted={true} playsInline={true} preload="auto">
            <source
              type="video/webm"
              src={`videos/npc_dota_hero_${heroName}.webm`}
            />
            <img
              src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroName}.png`}
              alt={heroName}
            />
          </video>
        )}
      </div>
    )
  };

  const prettyPrintTime = (totalSeconds) => {
    if (!totalSeconds) {
      return "0:00"
    }
    let minutes = Math.floor(totalSeconds / 60);
    let extraSeconds = totalSeconds % 60;
    extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;

    return `${minutes}:${extraSeconds}`;
  };

  return (
    <>
      <div className="page">
        <div className='container'>
          <div className='faction-section'>
            <div className="team-info" style={{ borderBottomColor: accentColor }}>
              <div className='d-flex ml-auto'>
                <div
                  className='team-name team-name-left'
                  style={{ backgroundColor: primaryColor, borderRightColor: accentColor, color: textColor }}
                >
                  {radiantTeam}
                </div>
                <div className='team-score' style={{ backgroundColor: secondaryColor, color: textColor }}>
                  {radiantScore}
                </div>
              </div>
            </div>

            <div className='pick-bar' style={{ backgroundColor: primaryColor }}>
              {renderHeroAnimation(draft?.team2?.pick0_class, nextAction === 'team2.pick0_class')}
              {renderHeroAnimation(draft?.team2?.pick1_class, nextAction === 'team2.pick1_class')}
              {renderHeroAnimation(draft?.team2?.pick2_class, nextAction === 'team2.pick2_class')}
              {renderHeroAnimation(draft?.team2?.pick3_class, nextAction === 'team2.pick3_class')}
              {renderHeroAnimation(draft?.team2?.pick4_class, nextAction === 'team2.pick4_class')}
            </div>
            
            <div className='ban-bar' style={{ backgroundColor: secondaryColor }}>
              {renderBanHero(draft?.team2?.ban0_class, nextAction === 'team2.ban0_class')}
              {renderBanHero(draft?.team2?.ban1_class, nextAction === 'team2.ban1_class')}
              {renderBanHero(draft?.team2?.ban2_class, nextAction === 'team2.ban2_class')}
              {renderBanHero(draft?.team2?.ban3_class, nextAction === 'team2.ban3_class')}
              {renderBanHero(draft?.team2?.ban4_class, nextAction === 'team2.ban4_class')}
              {renderBanHero(draft?.team2?.ban5_class, nextAction === 'team2.ban5_class')}
              {renderBanHero(draft?.team2?.ban6_class, nextAction === 'team2.ban6_class')}
            </div>
          </div>

          <div
            className="middle-section"
            style={{
              color: textColor,
              ...(middleSectionBackgroundImage && { backgroundImage: `url(${middleSectionBackgroundImage})`}),
              backgroundColor: middleSectionBackgroundColor
            }}
          >
            <div className='game-number'>
              {game}
            </div>
            
            <div className="time-section">
              <div className={`side-arrow ${draft?.activeteam === 3 ? "side-arrow-hidden": ""}`}>
                {"<"}
              </div>

              <div>
                <div className='time-container'>
                  {draft?.activeteam === 2 && (
                    <>
                      <div className='time big-time'>
                        {prettyPrintTime(draft?.activeteam_time_remaining)}
                      </div>
                    </>
                  )}
                </div>

                <div className='time-container'>
                  {draft?.activeteam === 3 && (
                    <>
                      <div className='time big-time'>
                        {prettyPrintTime(draft?.activeteam_time_remaining)}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className={`side-arrow ${draft?.activeteam === 2 ? "side-arrow-hidden": ""}`}>
                {">"}
              </div>
            </div>

            <div className='time-section'>
              <div className='time-container'>
                <div className='time'>
                  {prettyPrintTime(draft?.radiant_bonus_time)}
                </div>
                <div className='time-subheader'>RESERVE</div>
              </div>

              <div className='time-container'>
                <div className='time'>
                  {prettyPrintTime(draft?.dire_bonus_time)}
                </div>
                <div className='time-subheader'>RESERVE</div>
              </div>
            </div>
          </div>

          <div className='faction-section'>
            <div className="team-info" style={{ borderBottomColor: accentColor }}>
              <div className='d-flex'>
                <div className='team-score' style={{ backgroundColor: secondaryColor, color: textColor }}>
                  {direScore}
                </div>
                <div
                  className='team-name team-name-right'
                  style={{ backgroundColor: primaryColor, borderLeftColor: accentColor, color: textColor }}
                >
                  {direTeam}
                </div>
              </div>
            </div>

            <div className='pick-bar' style={{ backgroundColor: primaryColor }}>
              {renderHeroAnimation(draft?.team3?.pick0_class, nextAction === 'team3.pick0_class')}
              {renderHeroAnimation(draft?.team3?.pick1_class, nextAction === 'team3.pick1_class')}
              {renderHeroAnimation(draft?.team3?.pick2_class, nextAction === 'team3.pick2_class')}
              {renderHeroAnimation(draft?.team3?.pick3_class, nextAction === 'team3.pick3_class')}
              {renderHeroAnimation(draft?.team3?.pick4_class, nextAction === 'team3.pick4_class')}
            </div>
            
            <div className='ban-bar' style={{ backgroundColor: secondaryColor }}>
              {renderBanHero(draft?.team3?.ban0_class, nextAction === 'team3.ban0_class')}
              {renderBanHero(draft?.team3?.ban1_class, nextAction === 'team3.ban1_class')}
              {renderBanHero(draft?.team3?.ban2_class, nextAction === 'team3.ban2_class')}
              {renderBanHero(draft?.team3?.ban3_class, nextAction === 'team3.ban3_class')}
              {renderBanHero(draft?.team3?.ban4_class, nextAction === 'team3.ban4_class')}
              {renderBanHero(draft?.team3?.ban5_class, nextAction === 'team3.ban5_class')}
              {renderBanHero(draft?.team3?.ban6_class, nextAction === 'team3.ban6_class')}
            </div>
          </div>
        </div>
      </div>

      <div className='editTitle'>
        Radiant team
      </div>
      <div className='flex'>
          <input className='editInput' value={radiantTeam} name="radiantTeam" onChange={(e) => setRadiantTeam(e.target.value)} />
          <input className='editInput' value={radiantScore} name="radiantScore" onChange={(e) => setRadiantScore(e.target.value)} />
      </div>

      <br />
      <div className='editTitle'>
        Dire team
      </div>
      <div className='flex'>
        <input className='editInput' value={direTeam} name="direTeam" onChange={(e) => setDireTeam(e.target.value)} />
        <input className='editInput' value={direScore} name="direScore" onChange={(e) => setDireScore(e.target.value)} />
      </div>
      
      <br />
      <div className='editTitle'>
        Title
      </div>
      <div>
        <input className='editInput' value={game} name="game" onChange={(e) => setGame(e.target.value)} />
      </div>
      
      {/* <br />
      <div>
        Appearance
      </div>
      <div>
        Primary color:&nbsp;
        <input value={primaryColor} name="primaryColor" onChange={(e) => setPrimaryColor(e.target.value)} />
      </div>
      <div>
        Secondary color:&nbsp;
        <input value={secondaryColor} name="secondaryColor" onChange={(e) => setSecondaryColor(e.target.value)} />
      </div>
      <div>
        Accent color:&nbsp;
        <input value={accentColor} name="accentColor" onChange={(e) => setAccentColor(e.target.value)} />
      </div>
      <div>
        Text color:&nbsp;
        <input value={textColor} name="textColor" onChange={(e) => setTextColor(e.target.value)} />
      </div>
      <div>
        Logo in the hero pick box: (logo white: https://i.imgur.com/mddUuW8.png, logo black: https://i.imgur.com/PhWn6pO.png):&nbsp;
        <input value={pickLogoUrl} name="pickLogoUrl" onChange={(e) => setPickLogoUrl(e.target.value)} />
      </div>
      <div>
        Middle section background image:&nbsp;
        <input value={middleSectionBackgroundImage} name="middleSectionBackgroundImage" onChange={(e) => setMiddleSectionBackgroundImage(e.target.value)} />
      </div>
      <div>
        Middle section background color:&nbsp;
        <input value={middleSectionBackgroundColor} name="middleSectionBackgroundColor" onChange={(e) => setMiddleSectionBackgroundColor(e.target.value)} />
      </div> */}

      {/* <div>
        <button onClick={saveAppearanceSettings}>
          Save appearance settings
        </button>
        <button onClick={loadAppearanceSettings}>
          Load appearance settings
        </button>
      </div> */}
    </>
  );
}

export default Board;
