import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <main className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Contact Us</h1>
        <ContactForm />
      </div>
    </main>
  )
}
