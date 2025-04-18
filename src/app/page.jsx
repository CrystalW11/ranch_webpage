import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Logo at top */}
      <div className="block mb-8">
      </div>
      
      <div className="min-h-screen bg-white text-gray-800 p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Ranch Webpage</h1>
        <p className="text-lg leading-relaxed">
          Discover the perfect countryside getaway, offering comfort and charm in every corner.
        </p>
      </div>
    </div>
  );
}
