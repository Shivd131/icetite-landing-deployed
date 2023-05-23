import Image from "next/image";

const ConferenceSection = ({ heading, text, imageSrc, number }) => {
  console.log(number);
  const isOdd = number % 2 !== 0;
  const clipPathLeft = isOdd
    ? "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"
    : "polygon(20% 0, 100% 0, 100% 100%, 0 100%)";

  const clipPathRight = isOdd
    ? "polygon(20% 0, 100% 0, 100% 100%, 0 100%)"
    : "polygon(0 0, 100% 0, 80% 100%, 0% 100%)";

  const skewTransform = isOdd
    ? "-skew-x-20 pr-20"
    : "-skew-x-20 pl-20 text-right";

  const textPadding = isOdd ? "pr-8" : "pl-8";

  const imgAlignment = isOdd ? "flex-row" : "flex-row-reverse";

  return (
    <div
      className={`flex flex-col md:${imgAlignment} lg:${imgAlignment} bg-[#E7F4FF] sm:m-0`}
    >
      <div
        className={`w-[100vw] md:w-[60vw] lg:w-[60vw] sm:w-full sm:transform ${skewTransform}`}
        style={{
          clipPath: isOdd ? clipPathLeft : clipPathRight,
        }}
      >
        <div className={`text-[#DE6D1B] pt-8 px-16 ${textPadding}`}>
          <h1 className="text-3xl sm:text-4xl font-bold">{heading}</h1>
        </div>
        <div className={`py-8 px-16 ${textPadding}`}>
          <p className="text-lg sm:text-xl">{text}</p>
        </div>
      </div>
      <div className="w-[30vh] sm:w-auto">
        <Image
          src={imageSrc}
          alt="Image"
          className="h-fit object-cover"
          style={{
            clipPath: isOdd
              ? "polygon(20% 0, 100% 0, 100% 100%, 0 100%)"
              : "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
          }}
        />
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .flex-col {
            flex-direction: column;
          }
          .w-60vw {
            width: 100%;
          }
          .sm\:transform {
            transform: none;
          }
          .sm\:skew-x-20 {
            transform: skewX(0);
          }
          .h-full {
            height: auto;
          }
          .object-cover {
            object-fit: contain;
          }
          .clip-path {
            clip-path: none;
          }
        }
      `}</style>
      <div className="pb-10"></div>
    </div>
  );
};

export default ConferenceSection;
