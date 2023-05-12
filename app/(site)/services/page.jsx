import React from "react";

function page() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Services I Offer
            </h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <center>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://tse3.mm.bing.net/th?id=OIP.4isuFGXe-4dR6QIncLQryAHaFE&pid=Api&P=0"
                  alt="content"
                />
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Web Development
                </h2>
                <p class="leading-relaxed text-base">
                  I Create flexible and responsive websites for both frontend as
                  well as backend.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://tse2.mm.bing.net/th?id=OIP.q8UKRnlu1_res0eBSF5JGgHaFC&pid=Api&P=0"
                  alt="content"
                />
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  App Development
                </h2>
                <p class="leading-relaxed text-base">
                  Create beautiful app UI using the trending technology i.e
                  Flutter.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://tse2.mm.bing.net/th?id=OIP.Cs63t4amxCnSLq1xEezt_AHaD7&pid=Api&P=0"
                  alt="content"
                />
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Teaching
                </h2>
                <p class="leading-relaxed text-base">
                  Teaches tech related things.
                </p>
              </div>
            </div>
          </div>
        </center>
      </div>
    </section>
  );
}

export default page;
