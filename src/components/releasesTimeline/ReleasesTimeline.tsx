import ReleasesFilter from "../ui/filtros/ReleasesFilter";

const ReleasesTimeline = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-4/5 ">
        <ReleasesFilter></ReleasesFilter>
      </div>
    </div>
  );
};

export default ReleasesTimeline;
