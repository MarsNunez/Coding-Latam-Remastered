import { returnTitle } from "@/app/helpers";

const Clase = ({ params }) => {
  const { slug } = params;
  return (
    <div className="">
      <iframe
        className="w-full h-56"
        src="https://www.youtube.com/embed/69Z3CoESBo4?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
      ></iframe>
    </div>
  );
};

export default Clase;
