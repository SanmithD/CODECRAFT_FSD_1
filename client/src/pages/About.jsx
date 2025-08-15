function About() {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-6">
      <section className="max-w-5xl mx-auto bg-base-100 shadow-xl rounded-2xl p-8 border border-base-300 mb-12">
        <h1 className="text-4xl font-bold text-primary text-center mb-6">
          About ShopVerse
        </h1>
        <p className="text-lg text-base-content/80 leading-relaxed mb-6 text-center">
          At <span className="font-semibold text-secondary">ShopVerse</span>, we believe
          that shopping should be exciting, affordable, and effortless. Since
          our launch in 2024, we’ve served thousands of happy customers by
          offering carefully curated products that blend style, quality, and
          value.
        </p>
        <p className="text-lg text-base-content/80 leading-relaxed text-center">
          Whether you’re looking to refresh your home, upgrade your tech, or
          elevate your style, we’ve got something for everyone — all at prices
          you’ll love.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-12 grid md:grid-cols-2 gap-8">
        <div className="bg-base-100 p-6 rounded-xl shadow-lg border border-base-300">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
          <p className="text-base-content/80 leading-relaxed">
            Our mission is to make high-quality products accessible to everyone,
            no matter where they are. We aim to bridge the gap between premium
            design and everyday affordability while ensuring a smooth shopping
            experience from start to finish.
          </p>
        </div>
        <div className="bg-base-100 p-6 rounded-xl shadow-lg border border-base-300">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Values</h2>
          <ul className="space-y-2 text-base-content/80">
            <li>✅ Customer satisfaction comes first</li>
            <li>✅ Quality without compromise</li>
            <li>✅ Sustainable and ethical sourcing</li>
            <li>✅ Innovation in every product line</li>
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-12 grid sm:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-base-100 rounded-lg shadow-md border border-base-300">
          <h2 className="text-3xl font-bold text-primary">500+</h2>
          <p className="text-sm text-base-content/70">Products in Stock</p>
        </div>
        <div className="p-6 bg-base-100 rounded-lg shadow-md border border-base-300">
          <h2 className="text-3xl font-bold text-primary">10k+</h2>
          <p className="text-sm text-base-content/70">Happy Customers</p>
        </div>
        <div className="p-6 bg-base-100 rounded-lg shadow-md border border-base-300">
          <h2 className="text-3xl font-bold text-primary">24/7</h2>
          <p className="text-sm text-base-content/70">Customer Support</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto bg-base-100 p-8 rounded-2xl shadow-lg border border-base-300">
        <h2 className="text-2xl font-semibold text-primary mb-4">Our Story</h2>
        <p className="text-base-content/80 leading-relaxed mb-4">
          What started as a small online shop run by two friends has now grown
          into a trusted e-commerce destination serving thousands of customers
          nationwide. In our early days, we hand-packed every order from a tiny
          garage. Today, we operate from multiple warehouses, ensuring that your
          purchases reach you quickly and safely.
        </p>
        <p className="text-base-content/80 leading-relaxed">
          Through the years, our commitment to quality and customer satisfaction
          has remained the same. We continue to innovate, expand our product
          range, and look for ways to make your shopping journey more enjoyable.
        </p>
      </section>
    </div>
  );
}

export default About;
