type Props = {
  filter: string;
  handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectFilter = (props: Props) => {
  return (
    <div className="mb-4 flex lg:flex-row flex-col lg:items-center justify-between">
      <h1 className="lg:text-[44px] text-[25px]">Release 6.5</h1>
      <div>
        <label
          htmlFor="filterSelect"
          className="mr-2 text[14px]  font-semibold"
        >
          Sort by:
        </label>

        <select
          id="filterSelect"
          value={props.filter}
          onChange={props.handleFilterChange}
          className="pr-9 pl-2 font-bold py-1 border rounded-2xl"
        >
          <option value="All">All</option>
          <option value="Feat">Feat</option>
          <option value="Fix">Fix</option>
        </select>
      </div>
    </div>
  );
};

export default SelectFilter;
