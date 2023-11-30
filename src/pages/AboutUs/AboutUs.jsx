



const AboutUs = () => {
  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="text-gray-700 mb-4">
        Welcome to our Matrimony platform, where we help people find their life partners. Our mission
        is to create meaningful connections that lead to lasting relationships.
      </p>
      <p className="text-gray-700 mb-4">
        At Matrimony, we understand the importance of finding the right life partner. Our platform
        provides a safe and secure environment for individuals to explore and connect with potential
        matches based on their preferences and values.
      </p>
      <h2 className="text-2xl font-bold mb-4">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
        <div className="bg-white p-4 rounded-md shadow-md">
          <img
            src="https://plus.unsplash.com/premium_photo-1701206896247-b681c55160d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
            alt="Team Member 1"
            className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">John Doe</h3>
          <p className="text-gray-600">Founder & CEO</p>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <img
            src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNlb3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Team Member 2"
            className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
          <p className="text-gray-600">Product Manager</p>
        </div>
       
        <div className="bg-white p-4 rounded-md shadow-md">
          <img
            src="https://plus.unsplash.com/premium_photo-1670884522719-d7f4bcdfcbeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNlb3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Team Member 3"
            className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Alex Johnson</h3>
          <p className="text-gray-600">Lead Developer</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
