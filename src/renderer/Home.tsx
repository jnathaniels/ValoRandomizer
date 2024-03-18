import logo from '../../assets/Valorant_Logo.png';
import Randomizer from './Randomizer';

export default function Home() {
  return (
    <div className="flex flex-col gap-y-80 mt-2 h-vh w-vw items-center justify-start">
      <div className="space-x-32">
        <img width="300" alt="valorant logo" src={logo} />
        <div className="text-5xl">Randomizer</div>
      </div>
      <div className="flex space-y-96">
        <Randomizer />
      </div>
    </div>
  );
}
