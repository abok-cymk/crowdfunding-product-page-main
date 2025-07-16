import ProductsList from '../components/ProductsList';

const AboutandProducts = () => {
  return (
    <section
      id="discover"
      className="relative mx-auto -translate-y-12 md:-translate-y-10 lg:max-w-3xl md:max-w-2xl bg-white rounded-md shadow px-9 py-10 w-full"
    >
      <div>
        <div>
          <h2 className='font-bold text-black text-2xl'>About this project</h2>
          <p className='text-Gray-500 py-4 font-medium'>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className='text-Gray-500 font-medium'>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
        <ProductsList />
      </div>
    </section>
  );
}

AboutandProducts.displayName = "AboutandProducts";

export default AboutandProducts;
