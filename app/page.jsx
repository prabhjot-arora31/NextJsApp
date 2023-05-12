import Image from "next/image";
// import "./Home.css";
// import HomePage from "./components/Home/Home";
export default function Home() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <center>
            <div
              class="rounded-lg h-64 overflow-hidden"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <img
                alt="Profile Pic"
                class="object-cover object-center h-full w-1/2"
                src="https://movieflix31.netlify.app/profile.jpg"
              />
            </div>
          </center>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2
                  id="myname"
                  class="font-medium title-font mt-4 text-gray-900 text-lg"
                >
                  Prabhjot Arora
                </h2>
                <div
                  style={{ fontFamily: "sans-serif" }}
                  class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"
                ></div>
                <p class="text-base" id="tag">
                  Web/app Developer.
                </p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-lg mb-4" id="info">
                Hello Everyone. I am Prabhjot Arora pursuing Bachelor's in
                Computer Applocation. I am a self-taught developer and looking
                for opportunities so that I can develop the skills to an greater
                extent.
              </p>
              <p
                style={{ fontWeight: "600", textDecoration: "underline" }}
                class="leading-relaxed text-lg mb-4"
                id="info"
              >
                Tech Skills:
              </p>
              <ul style={{ fontFamily: "monospace", fontSize: "1.1rem" }}>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJs</li>
                <li>NodeJs</li>
                <li>Flutter</li>
                <li>PHP</li>
                <li>Java</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
