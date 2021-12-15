import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brice Christian | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
        <div className="blobs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="blobs__yellow"
            width="340.092"
            height="327.832"
            viewBox="0 0 340.092 327.832">
            <path
              id="Path_3"
              data-name="Path 3"
              d="M298.592,178.422c26.012,3.905,42.26,27.975,63.826,43.035C384.564,236.922,415,243.306,426.5,267.745c11.936,25.349,7.372,56.183-3.717,81.914-10.5,24.37-30.376,45.168-55.149,54.679-22.138,8.5-45.666-10.971-69.045-7-31.9,5.417-57.535,43.21-88.477,33.748-30.041-9.186-49.538-45.053-51.1-76.428-1.493-30.053,32.6-48.521,43.5-76.568,9.888-25.445-2.323-58.489,16.623-78.143,19.521-20.251,51.639-25.7,79.455-21.523"
              transform="translate(-205.92 -34.468) rotate(-18)"
              fill="#ffc400"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="blobs__red"
            width="797.361"
            height="827.18"
            viewBox="0 0 797.361 827.18">
            <path
              id="Path_2"
              data-name="Path 2"
              d="M500,132.4c84.015,36.69,67.041,161.717,101.456,246.688,13.347,32.954,19.885,65.527,37.505,96.408,35.155,61.615,126.742,101.254,115.212,171.25-10.858,65.913-99.283,83.6-161.287,108.456-64.463,25.845-135.606,64.63-198.851,35.932C331.7,762.852,290.459,687.683,293.371,619.3c2.59-60.8,115.712-74.85,113.762-135.672-3.029-94.449-150.105-153.042-125.949-244.4C302.577,158.316,423.3,98.908,500,132.4"
              transform="translate(287.812 -270.761) rotate(39)"
              fill="#de350b"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="blobs__blue"
            width="319.71"
            height="293.016"
            viewBox="0 0 319.71 293.016">
            <path
              id="Path_4"
              data-name="Path 4"
              d="M310.742,197.755c24.686,6.55,29.46,40.926,51.009,54.633,24.137,15.353,61.16,5.556,78.9,28,19.018,24.065,23.823,59.925,13.378,88.765-10.349,28.573-39.969,44.444-66.8,58.721-23.67,12.6-50.716,24.935-76.488,17.535-24.159-6.937-29.419-39.568-50.083-53.879-21.522-14.905-55.333-8.461-70.619-29.715-16.362-22.75-17.819-54.763-9.349-81.475,8.5-26.8,30.943-46.415,54.677-61.487,22.577-14.337,49.523-27.958,75.374-21.1"
              transform="translate(-204.094 -121.642) rotate(-9)"
              fill="#0052cc"
            />
          </svg>
        </div>
        <div className="container">
          <h1 className="relative inline-block">
            Brice Christian
            <span className="absolute -top-6 -right-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33.18"
                height="33.183"
                viewBox="0 0 33.18 33.183">
                <g
                  id="Group_2"
                  data-name="Group 2"
                  transform="translate(-1051.91 -292.159)">
                  <rect
                    id="Rectangle_2"
                    data-name="Rectangle 2"
                    width="33.18"
                    height="12"
                    transform="translate(1051.91 303)"
                    fill="#fff"
                  />
                  <rect
                    id="Rectangle_3"
                    data-name="Rectangle 3"
                    width="33.183"
                    height="12"
                    transform="translate(1062.5 325.342) rotate(-90)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </span>
          </h1>
          <h2>Frontend developer</h2>
        </div>
      </main>
    </>
  );
}
