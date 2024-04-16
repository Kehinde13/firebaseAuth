import loadingGif from "../Images/loader.gif"

function Loader() {
  return (
    <div className="fixed inset-0 grid place-items-center bg-white z-30" data-testid="loading">
      <img className="w-[20rem]" src={loadingGif} alt="loading" />
    </div>
  )
}

export default Loader