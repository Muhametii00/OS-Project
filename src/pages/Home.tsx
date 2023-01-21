import { Icon } from "@components/shared/Icon/Icon";

interface Props {
  onLogOut: () => void;
}

const Home = (props: Props) => {
  const date = new Date().toLocaleString();

  return (
    <div>
      <div className="text-sm flex flex-row justify-between items-center h-7 bg-grey">
        <button className="ml-2 font-semibold">Preferences</button>
        <div className="flex flex-row justify-between items-center font-semibold">
          77% <Icon className="w-4 ml-1 mr-4" icon="battery-life" /> {date}
        </div>
      </div>
      <div className="flex flex-row justify-start items-center mt-6 ml-6 mb-80">
        <button className="mr-5 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-1 w-20 h-20 rounded-full bg-grey">
            <Icon className="w-7 " icon="camera" />
          </div>
          <h1 className="font-semibold">Camera</h1>
        </button>
        <button className="mr-5 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-1 w-20 h-20 rounded-full bg-grey">
            <Icon className="w-7 " icon="firefox-brands" />
          </div>
          <h1 className="font-semibold">Browser</h1>
        </button>
        <button className="mr-5 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-1 w-20 h-20 rounded-full bg-grey">
            <Icon className="w-7 " icon="newspaper" />
          </div>
          <h1 className="font-semibold">News</h1>
        </button>
        <button className="mr-5 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-1 w-20 h-20 rounded-full bg-grey">
            <Icon className="w-7 " icon="images" />
          </div>
          <h1 className="font-semibold">Gallery</h1>
        </button>
        <button className="mr-5 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-1 w-20 h-20 rounded-full bg-grey">
            <Icon className="w-7 " icon="folder" />
          </div>
          <h1 className="font-semibold">Documents</h1>
        </button>
      </div>
      <button
        onClick={props.onLogOut}
        className="flex items-center justify-center mb-1 ml-4 w-14 h-14 rounded-full bg-primary"
      >
        <Icon className="w-5" icon="power-off" />
      </button>
    </div>
  );
};

export default Home;
