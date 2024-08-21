import { useState } from "react";
import { Data } from "../../../data/data";
import SelectFilter from "./select/SelectFilter";
import Render from "./filtredRender/Render";

const ReleasesFilter = () => {
  const data = Data;
  const releasesTimeline = data.releasesData.releasesTimeline;

  const [filter, setFilter] = useState<string>("All");

  {
    /*Funcion para cambiar el estado del filtro*/
  }

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const filteredReleases =
    filter === "All"
      ? releasesTimeline
      : releasesTimeline.filter((item) => item.chip === filter);

  return (
    <>
      {/*Selector de filtro y de donde se invoca la funcion de filtros*/}
      <SelectFilter filter={filter} handleFilterChange={handleFilterChange} />
      <hr></hr>

      <ul className="list-none">
        {filteredReleases.map((release, index) => (
          <Render
            index={index}
            title={release.title}
            chip={release.chip}
            date={release.date}
            body={release.body}
            notes={release.notes}
            url={release.url}
          ></Render>
        ))}
      </ul>
    </>
  );
};
export default ReleasesFilter;
