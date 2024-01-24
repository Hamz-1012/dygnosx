import background from "../assets/background.mp4";

const Home = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video
        src={background}
        autoPlay
        loop
        muted
      />
      <div className="content">
        <h1>Welcome</h1>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Upload
        </button>
      </div>
    </div>
  );
};

export default Home;
