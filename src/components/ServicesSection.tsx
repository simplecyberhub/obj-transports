export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50 px-4" id="services">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Road Transport</h3>
            <p>Safe and comfortable intercity and interstate passenger transport across Nigeria.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Logistics</h3>
            <p>Efficient delivery and movement of goods for businesses and individuals.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Supply Chain Management</h3>
            <p>Comprehensive solutions for your supply chain needs, from planning to execution.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
