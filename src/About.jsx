const About = () => {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-2xl rounded-md bg-white px-4 py-6 text-center shadow-lg lg:px-10 lg:text-left"
    >
      <h2 className="font-700 text-lg/6">About this project</h2>
      <div className="my-5">
        <p className="font-500 text-custom-gray-500 text-sm/6">
          {" "}
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className="font-500 text-custom-gray-500 pt-3 text-sm/6">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </div>
      <div className="border-custom-gray-500/30 mb-4 rounded-md border px-4 py-3">
        <div className="flex items-center justify-between">
          <h3 className="font-700 text-lg/6 tracking-tight">Bamboo Stand</h3>
          <p className="text-custom-green-400 text-sm/6">Pledge $25 or more</p>
        </div>

        <p className="font-500 text-custom-gray-500 my-5 text-sm/6">
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you’ll be added to a special
          Backer member list.
        </p>
        <div className="flex items-center justify-between">
          <p className="font-700 flex items-center gap-1 text-2xl/6">
            101{" "}
            <span className="text-custom-gray-500 font-500 text-xs/6">
              left
            </span>
          </p>
          <button className="bg-custom-green-400 font-500 cursor-pointer rounded-full px-4 py-3 text-sm/6 text-gray-100">
            Selected Reward
          </button>
        </div>
      </div>

      <div className="border-custom-gray-500/30 mb-4 rounded-md border px-4 py-3">
        <div className="flex items-center justify-between">
          <h3 className="font-700 text-lg/6 tracking-tight">
            Black Edition Stand
          </h3>
          <p className="text-custom-green-400 text-sm/6">Pledge $75 or more</p>
        </div>

        <p className="font-500 text-custom-gray-500 my-5 text-sm/6">
          You get a Black Special Edition computer stand and a personal thank
          you. You’ll be added to our Backer member list. Shipping is included.
        </p>
        <div className="flex items-center justify-between">
          <p className="font-700 flex items-center gap-1 text-2xl/6">
            64{" "}
            <span className="text-custom-gray-500 font-500 text-xs/6">
              left
            </span>
          </p>
          <button className="bg-custom-green-400 font-500 cursor-pointer rounded-full px-4 py-3 text-sm/6 text-gray-100">
            Selected Reward
          </button>
        </div>
      </div>

      <div className="border-custom-gray-500/30 mb-4 rounded-md border px-4 py-3 bg-gray-500/10 pointer-events-none opacity-20">
        <div className="flex items-center justify-between">
          <h3 className="font-700 text-lg/6 tracking-tight">
            Mahogany Special Edition
          </h3>
          <p className="text-custom-green-400 text-sm/6">Pledge $200 or more</p>
        </div>

        <p className="font-500 text-custom-gray-500 my-5 text-sm/6">
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You’ll be added to our Backer member list.
          Shipping is included.
        </p>
        <div className="flex items-center justify-between">
          <p className="font-700 flex items-center gap-1 text-2xl/6">
            0{" "}
            <span className="text-custom-gray-500 font-500 text-xs/6">
              left
            </span>
          </p>
          <button className="bg-custom-gray-500 font-500 cursor-pointer rounded-full px-4 py-3 text-sm/6 text-gray-100">
            Out of Stock
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
