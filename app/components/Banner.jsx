const Banner = ({ title, icon }) => {
  return (
    <section>
      <div className="bg-clases h-72 text-white">
        <div className="h-full backdrop-blur-lg flex items-center justify-center flex-col gap-3">
          <i className={`lni lni-${icon}`}></i>
          <h2 className="text-3xl font-semibold text-center">{`${title}`}</h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
