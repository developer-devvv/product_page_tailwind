import {
  Footer,
  Hero,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality
} from './sections';

import Nav from './components/Nav';


const App = () => (
  <main className="relative">
    <Nav />
    <section>
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-coral-red padding-x padding-t pb-8">
     <Footer />
    </section>
  </main>
);

export default App;