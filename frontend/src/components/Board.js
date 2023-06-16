import './Board.css';
import React, { useEffect, useState } from 'react'

const Board = ({ draft }) => {
  const [radiantTeam, setRadiantTeam] = useState("Team 1");
  const [direTeam, setDireTeam] = useState("Team 2");
  const [game, setGame] = useState("Game 1");
  const [radiantScore, setRadiantScore] = useState("0");
  const [direScore, setDireScore] = useState("0");
  const [nextAction, setNextAction] = useState();

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

  // both reserves
  // make it huge

  const renderBanHero = (heroName, isNext) => {
    return (
      <div className={`ban-image-container ${isNext && 'ban-image-container-selected'}`}>
        {heroName && (
          <img className='ban-image' src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroName}.png`} alt={heroName} />
        )}
      </div>
    );
  };

  const renderHeroAnimation = (heroName, isNext) => {
    return (
      <div className={`hero-animation-container ${isNext && 'hero-animation-container-selected'}`}>
        {false && (
          <video class="hero-animation" autoPlay={true} loop={true} muted={true} playsInline={true} preload="auto">
            <source
              type="video/webm"
              src={`videos/npc_dota_hero_${"zuus"}.webm`}
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

  const radiantHasAnyPick = (
    draft?.team2?.pick0_class ||
    draft?.team2?.pick1_class ||
    draft?.team2?.pick2_class ||
    draft?.team2?.pick3_class ||
    draft?.team2?.pick4_class
  );
  const radiantHasAnyBan = (
    draft?.team2?.ban0_class ||
    draft?.team2?.ban1_class ||
    draft?.team2?.ban2_class ||
    draft?.team2?.ban3_class ||
    draft?.team2?.ban4_class ||
    draft?.team2?.ban5_class ||
    draft?.team2?.ban6_class
  );

  const direHasAnyPick = (
    draft?.team3?.pick0_class ||
    draft?.team3?.pick1_class ||
    draft?.team3?.pick2_class ||
    draft?.team3?.pick3_class ||
    draft?.team3?.pick4_class
  );
  const direHasAnyBan = (
    draft?.team3?.ban0_class ||
    draft?.team3?.ban1_class ||
    draft?.team3?.ban2_class ||
    draft?.team3?.ban3_class ||
    draft?.team3?.ban4_class ||
    draft?.team3?.ban5_class ||
    draft?.team3?.ban6_class
  );

  return (
    <>
      <div className="page">
        <div className='container'>
          <div className='faction-section'>
            <div className="team-info">
              <div className='d-flex ml-auto'>
                <div className='team-name team-name-left'>
                  {radiantTeam}
                </div>
                <div className='team-score'>
                  {radiantScore}
                </div>
              </div>
            </div>

            <div className='pick-bar'>
              {renderHeroAnimation(draft?.team2?.pick0_class, nextAction === 'team2.pick0_class')}
              {renderHeroAnimation(draft?.team2?.pick1_class, nextAction === 'team2.pick1_class')}
              {renderHeroAnimation(draft?.team2?.pick2_class, nextAction === 'team2.pick2_class')}
              {renderHeroAnimation(draft?.team2?.pick3_class, nextAction === 'team2.pick3_class')}
              {renderHeroAnimation(draft?.team2?.pick4_class, nextAction === 'team2.pick4_class')}
            </div>
            
            <div className='ban-bar'>
              {renderBanHero(draft?.team2?.ban0_class, nextAction === 'team2.ban0_class')}
              {renderBanHero(draft?.team2?.ban1_class, nextAction === 'team2.ban1_class')}
              {renderBanHero(draft?.team2?.ban2_class, nextAction === 'team2.ban2_class')}
              {renderBanHero(draft?.team2?.ban3_class, nextAction === 'team2.ban3_class')}
              {renderBanHero(draft?.team2?.ban4_class, nextAction === 'team2.ban4_class')}
              {renderBanHero(draft?.team2?.ban5_class, nextAction === 'team2.ban5_class')}
              {renderBanHero(draft?.team2?.ban6_class, nextAction === 'team2.ban6_class')}
            </div>
          </div>

          <div className="middle-section">
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
                      <div className='time'>
                        {prettyPrintTime(draft?.activeteam_time_remaining)}
                      </div>
                      <div className='time-subheader'>ACTIVE</div>
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
            <div className="team-info">
              <div className='d-flex'>
                <div className='team-score'>
                  {direScore}
                </div>
                <div className='team-name team-name-right'>
                  {direTeam}
                </div>
              </div>
            </div>

            <div className='pick-bar'>
              {renderHeroAnimation(draft?.team3?.pick0_class, nextAction === 'team3.pick0_class')}
              {renderHeroAnimation(draft?.team3?.pick1_class, nextAction === 'team3.pick1_class')}
              {renderHeroAnimation(draft?.team3?.pick2_class, nextAction === 'team3.pick2_class')}
              {renderHeroAnimation(draft?.team3?.pick3_class, nextAction === 'team3.pick3_class')}
              {renderHeroAnimation(draft?.team3?.pick4_class, nextAction === 'team3.pick4_class')}
            </div>
            
            <div className='ban-bar'>
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

      <div>
        Radiant team
      </div>
      <div>
        <input value={radiantTeam} name="radiantTeam" onChange={(e) => setRadiantTeam(e.target.value)} />
      </div>
      <div>
        <input value={radiantScore} name="radiantScore" onChange={(e) => setRadiantScore(e.target.value)} />
      </div>

      <div>
        Dire team
      </div>
      <div>
        <input value={direTeam} name="direTeam" onChange={(e) => setDireTeam(e.target.value)} />
      </div>
      <div>
        <input value={direScore} name="direScore" onChange={(e) => setDireScore(e.target.value)} />
      </div>
      <div>
        Title
      </div>
      <div>
        <input value={game} name="game" onChange={(e) => setGame(e.target.value)} />
      </div>
    </>
  );
}

export default Board;
