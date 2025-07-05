import ServicesSection from '../../components/ServicesSection';

export default function ServicesPage() {
  return (
    <main className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Our Services</h1>
        <ServicesSection />
      </div>
    </main>
  )
}
