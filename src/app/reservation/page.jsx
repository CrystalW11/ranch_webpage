// src/app/reservation.jsx



export default function Reservation() {
  return (
    <div>

      <div className="min-h-screen bg-white text-gray-800 p-8">
        <h1 className="text-4xl font-bold mb-4">Make a Reservation</h1>
        <p className="text-lg leading-relaxed">
          Book your stay with us and enjoy a peaceful countryside retreat.
        </p>
      </div>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="input-style" />
        <input type="email" placeholder="Email" className="input-style" />
        <input type="date" placeholder="Check-in" className="input-style" />
        <input type="date" placeholder="Check-out" className="input-style" />
        <button type="submit" className="btn-primary">Book Now</button>
      </form>

    </div>
  );
}
