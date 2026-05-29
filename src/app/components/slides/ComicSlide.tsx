import comicImg from "@/imports/comic.jpg";

export default function ComicSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <img
        src={comicImg}
        alt="Comic"
        className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
      />
    </div>
  );
}
