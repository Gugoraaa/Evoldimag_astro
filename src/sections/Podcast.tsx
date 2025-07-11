import { useEffect } from 'react';

const PodcastSection = () => {
  useEffect(() => {
    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.observer-fade').forEach((el) => {
      fadeObserver.observe(el);
    });

    const slideObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'animate-slide-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.observer-slide').forEach((el) => {
      slideObserver.observe(el);
    });

    return () => {
      fadeObserver.disconnect();
      slideObserver.disconnect();
    };
  }, []);

  return (
    <div
      id="podcast"
      className="relative max-w-5xl mx-auto text-center mt-10 mb-10 sm:mt-40 sm:mb-20 px-4 md:px-10 lg:px-8 xl:mt-48 xl:mb-20"
    >
      {/* Circles */}
      <div className="absolute inset-0 flex justify-center items-center mb-44">
        <div className="hidden md:block w-[400px] h-[400px] rounded-full border-[2px] border-gray-600 animate-ping-slow -z-10"></div>
        <div className="hidden md:block w-[600px] h-[600px] rounded-full border-[2px] border-gray-700 absolute opacity-50"></div>
      </div>


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="rounded-full overflow-hidden w-[350px] h-[350px] flex justify-center items-center opacity-0 transition-opacity duration-700 will-change-transform observer-fade">
          <img
            src="/FotoMau-01.webp"
            alt="Speaker"
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold mt-8 opacity-0 transition-opacity duration-700 observer-slide">
          Odontología Digital Con Mau
        </h1>

        <p className="text-gray-400 text-lg mt-4 opacity-0 transition-opacity duration-700 observer-slide">
          Mauricio Avendaño
        </p>

        <div className="mt-8 opacity-0 transition-opacity duration-700 observer-fade">
          <a
            href="https://open.spotify.com/show/3ETlxEfQFOQ9DcRLWbh4py?si=2y8CdMnpQvSOC688yFLnpg&nd=1&dlsi=0d14b4bf153f4870"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                className="w-7 h-7"
                style={{
                  fill: 'white',
                  filter: 'drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.25))',
                }}
              >
                <path d="M149.167 90.833C122.5 75 77.917 73.333 52.5 81.25c-4.167 1.25-8.333-1.25-9.583-5-1.25-4.167 1.25-8.333 5-9.583 29.583-8.75 78.333-7.084 109.166 11.25 3.75 2.083 5 7.083 2.917 10.833-2.083 2.917-7.083 4.167-10.833 2.083m-.834 23.334c-2.083 2.916-5.833 4.166-8.75 2.083-22.5-13.75-56.666-17.917-82.916-9.583-3.334.833-7.084-.834-7.917-4.167s.833-7.083 4.167-7.917c30.416-9.166 67.916-4.583 93.75 11.25 2.5 1.25 3.75 5.417 1.666 8.334m-10 22.916c-1.666 2.5-4.583 3.334-7.083 1.667-19.583-12.083-44.167-14.583-73.333-7.917-2.917.834-5.417-1.25-6.25-3.75-.834-2.916 1.25-5.416 3.75-6.25 31.666-7.083 59.166-4.166 80.833 9.167 2.917 1.25 3.333 4.583 2.083 7.083M100 16.667a83.333 83.333 0 1 0 0 166.666 83.333 83.333 0 0 0 0-166.666" />
              </svg>
              <span>Escucha nuestro Podcast</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PodcastSection;
