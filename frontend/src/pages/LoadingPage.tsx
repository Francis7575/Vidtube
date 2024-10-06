import loadingGif from "/assets/loading-gif.gif"

const LoadingPage = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center min-h-screen text-[1.5em]">
      <p>Loading, please wait...</p>
      <img className="max-w-[60px]"
        src={loadingGif}
        alt="Loading..." />
    </div>
  );
};

export default LoadingPage;