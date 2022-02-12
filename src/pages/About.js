import React from "react";

const About = () => {
  return (
    <div className="md:flex flex-col h-screen">
      <div className="flex flex-col justify-center items-center h-1/2 p-10">
        <h2 className="text-slate-500 text-5xl md:6xl mb-2">THE JOURNEY</h2>
        <p className="text-slate-900 text-2xl text-center">
          I know React. In fact I wrote a bunch of websites using it
        </p>
      </div>
      <div className="text-xl text-center h-1/2 bg-slate-200">
        <section className= "bg-slate-200 p-10 text-2xl">
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
        </section>
      </div>
    </div>
  );
};

export default About;
