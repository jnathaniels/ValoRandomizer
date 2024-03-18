import logo from '../../assets/Valorant_Logo.png';
import Randomizer from './Randomizer';

export default function Home() {
  return (
    <div className="flex flex-col gap-y-96 h-vh w-vw items-center justify-center self-center">
      <div className="space-x-32">
        <img width="300" alt="valorant logo" src={logo} />
        <div className="text-5xl">Randomizer</div>
      </div>
      <div className="flex space-y-96 items-center justify-center self-center w-full h-96">
        <Randomizer />
      </div>
    </div>
  );
}
