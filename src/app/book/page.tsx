import BookingForm from '../../components/BookingForm'

export default function BookPage() {
  return (
    <main className="py-16 px-4 bg-blue-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">Book a Ride</h1>
        <BookingForm />
      </div>
    </main>
  )
}
