import { Data } from "../../data/data";

const ReleasesNotes = () => {
  const data = Data;
  const dataTimeline = data.releasesData;
  return (
    <section className="lg:w-1/3 lg:flex-none flex justify-center w-full">
      <div className="lg:fixed w-4/5 lg:w-auto h-full">
        <h1 className=" lg:text-[25px]  text-gray-letters-title font-bold">
          All releases notes
        </h1>
        <ul className="lg:w-11/12 lg:h-96 lg:overflow-y-auto">
          {dataTimeline.releasesNotes.map((item, index) => (
            <li
              className={` lg:text-[19px] text-[14px] font-semibold  ${
                index === 0 ? "text-gray-letters-title" : "text-gray-letters"
              } hover:text-gray-letters-title cursor-pointer mb-2`}
              key={index}
            >
              Release {item.time}:
              <span className="font-bold">{item.changes}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ReleasesNotes;
