import { useEffect, useState } from 'react';
import OptionDisplay from './OptionDisplay';

export default function Randomizer() {
  const [agents, setAgents] = useState<Array<any> | null>(null);
  const [weapons, setWeapons] = useState<Array<any> | null>(null);
  const [weaponSkins, setWeaponSkins] = useState<Array<any> | null>(null);
  const [gunBuddies, setGunBuddies] = useState<Array<any> | null>(null);

  const [randomAgent, setRandomAgent] = useState<number | null>(null);
  const [randomWeapon, setRandomWeapon] = useState<number | null>(null);
  const [randomWeaponSkin, setRandomWeaponSkin] = useState<number | null>(null);
  const [randomGunBuddy, setRandomGunBuddy] = useState<number | null>(null);

  const [rolling, setRolling] = useState<boolean | null>(false);
  const [useSkins, setUseSkins] = useState<boolean | null>(false);

  useEffect(() => {
    const endpoints = [
      'https://valorant-api.com/v1/agents?isPlayableCharacter=true&status=live',
      'https://valorant-api.com/v1/weapons?status=live',
      'https://valorant-api.com/v1/weapons/skins?status=live',
      'https://valorant-api.com/v1/buddies?status=live',
    ];

    async function fetchAll() {
      const response = await Promise.all(
        endpoints.map((endpoint) => fetch(endpoint)),
      );
      const data = await Promise.all(
        response.map((res: Response) => res.json()),
      );

      setAgents(data[0].data);
      setWeapons(data[1].data);
      setWeaponSkins(data[2].data);
      setGunBuddies(data[3].data);
    }

    fetchAll();
  });

  function RollRandomNum() {
    setRolling(true);
    if (
      agents !== null &&
      weapons !== null &&
      weaponSkins !== null &&
      gunBuddies !== null
    ) {
      const intervalId = setInterval(() => {
        setRandomAgent(Math.floor(Math.random() * agents.length));
        setRandomWeapon(Math.floor(Math.random() * weapons.length));
        setRandomWeaponSkin(Math.floor(Math.random() * weaponSkins.length));
        setRandomGunBuddy(Math.floor(Math.random() * gunBuddies.length));
      }, 100); // Change the image every x-ms

      setTimeout(() => {
        clearInterval(intervalId); // Stop changing the image after some time
        setRolling(false);
      }, 3000);
    }
  }

  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <div className="flex items-center justify-center gap-2">
        <button
          className="bg-valorant-red min-w-32 border border-white text-white font-bold p-2 rounded-lg"
          type="button"
          disabled={rolling === true}
          onClick={RollRandomNum}
        >
          {rolling === null ? 'Rolling...' : 'Roll'}
        </button>
        <div>
          <label htmlFor="useSkins">
            <input
              onChange={(e) => setUseSkins(e.target.checked)}
              id="useSkins"
              type="checkbox"
            />
            <span>Roll with Skins</span>
          </label>
        </div>
      </div>
      <div className="flex gap-20 justify-around">
        {randomAgent && agents && (
          <OptionDisplay
            optionPic={agents[randomAgent].displayIcon}
            optionName={agents[randomAgent].displayName}
          />
        )}
        {randomWeapon && weapons && (
          <OptionDisplay
            optionPic={
              useSkins
                ? randomWeaponSkin &&
                  weaponSkins &&
                  weaponSkins[randomWeaponSkin].displayIcon
                : weapons[randomWeapon].displayIcon
            }
            optionName={
              useSkins
                ? randomWeaponSkin &&
                  weaponSkins &&
                  weaponSkins[randomWeaponSkin].displayName
                : weapons[randomWeapon].displayName
            }
          />
        )}
        {randomGunBuddy && gunBuddies && (
          <OptionDisplay
            optionPic={gunBuddies[randomGunBuddy].displayIcon}
            optionName={gunBuddies[randomGunBuddy].displayName}
          />
        )}
      </div>
    </div>
  );
}
