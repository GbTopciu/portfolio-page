import React from "react";

const About = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center h-1/2">
        <h2 className="text-pink-500 text-5xl mb-5">THE JOURNEY</h2>
        <p className="text-lime-500 text-xl text-center ">
          I Know React. In Fact I Wrote A Bunch Of Websites Using It
        </p>
      </div>
      <div className="flex justify-center items-center h-1/2 bg-gray-300">
        <section className="text-xl text-center bg-gray-300 p-10">
          It all began when I was required to create my first Excel report on a
          daily basis. This is getting boring, I thought... There must be a
          better way. Then I taught myself to code with VBA. Not only did I end
          up automating that report, but also a slew of others. It carried on
          when I had to set up accounts for my current job. This is tedious and
          time-consuming, I thought... There must be a better way. Then I taught
          myself to code with Powershell. The entire onboarding process was
          eventually automated by me. After going through some HTML, CSS, and
          Javascript courses and attempting to code with them... there has to be
          a better way, right? That's when I came across React.
          <h3 className="flex justify-center mt-5 text-2xl text-bold">
            WELCOME TO MY REACT JOURNEY
          </h3>
        </section>
      </div>
    </div>
  );
};

export default About;
