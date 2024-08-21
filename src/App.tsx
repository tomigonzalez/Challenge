import "./App.css";
import ReleasesNotes from "./components/releasesNotes/ReleasesNotes";
import ReleasesTimeline from "./components/releasesTimeline/ReleasesTimeline";

import Banner from "./components/ui/banner/Banner";

function App() {
  return (
    <article className="w-full h-full flex flex-col items-center font-open-sans">
      <Banner />
      <section className="flex w-full lg:flex-row flex-col lg:pt-[210px]  pt-[105px] ">
        <ReleasesTimeline />
        <ReleasesNotes />
      </section>
    </article>
  );
}

export default App;
