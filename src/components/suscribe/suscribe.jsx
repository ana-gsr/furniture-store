import React, { useState } from "react";

const Suscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setSuccess("");
      return;
    }

    console.log("Email submitted:", email);
    setError("");
    setSuccess("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className="px-8 py-20 text-center bg-[#F2F5FF]">
      <h2 className="text-2xl font-bold text-[#333333]">Join Our Mailing List</h2>
      <p className="text-sm text-[#666666]">
        Sign up to receive inspiration, product updates, and special offers from our team.
      </p>
      <br />
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 w-64 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
        />
        <button
          type="submit"
          className="bg-[#054C73] text-white text-xs px-9 py-3 hover:bg-blue-600 transition rounded-r-md">Subscribe</button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-600 font-medium mt-3">{success}</p>}
    </div>
  );
};

export default Suscribe