type Props = {
  index: number;
  title: string;
  chip: string;
  date: string;
  body: string;
  notes: string[];
  url: string;
};

const Render = (props: Props) => {
  return (
    <li
      key={props.index}
      className="mb-4 p-4 rounded"
      style={{ animation: `fadeIn 0.5s ease forwards ${props.index * 0.1}s` }}
    >
      <h2 className="lg:text-[36px] text-[17px]">{props.title}</h2>
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-row gap-6 items-center">
          <span
            className={`font-bold text-[14px] p-1 rounded-xl  px-2 py-1 ${
              props.chip === "Fix"
                ? "text-text-chip-yellow bg-bg-chip-yellow"
                : "text-text-chip-green bg-bg-chip-green"
            }`}
          >
            {props.chip}
          </span>
          <p className="font-semibold text-gray-letters text-[14px]">
            {props.date}
          </p>
        </div>
        <p className="font-semibold text-gray-letters text-[14px]">
          {props.body}
        </p>
      </div>
      {props.notes.length > 0 && (
        <ul className="mt-2 list-disc list-inside ">
          {props.notes.map((note, noteIndex) => (
            <li key={noteIndex} className="text-[14px] font-semibold m-2">
              {note}
            </li>
          ))}
        </ul>
      )}
      {props.url && (
        <img
          src={props.url}
          alt={props.title}
          className="mt-2 lg:w-[974px] lg:h-[530px] h-[176px] w-[267px] border-radius[20px]"
        />
      )}
    </li>
  );
};

export default Render;
