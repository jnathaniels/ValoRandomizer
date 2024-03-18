export default function OptionDisplay({
  optionPic,
  optionName,
}: {
  optionPic: string;
  optionName: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center font-bold text-white max-w-full max-h-full">
      <div className="flex border-4 border-b-0 border-white rounded-lg rounded-b-none h-64 w-64 item-center justify-center overflow-hidden">
        <img
          className="flex"
          style={{ objectFit: 'contain' }}
          src={
            optionPic === null ? 'https://placehold.co/200?text=?' : optionPic
          }
          alt={optionName}
        />
      </div>
      <p className="flex p-2 item-center justify-center border-4 border-white bg-valorant-red w-64 rounded-lg rounded-t-none">
        {optionName}
      </p>
    </div>
  );
}
