import React from "react";
import Lottie from "lottie-react";
import Contact from "./Contact.json"

const ContactSec = () => {
  return (
    <div className="max-w-6xl mx-auto mt-6">
      <div className="text-center space-y-4">
        <h2 className="text-xl md:text-3xl font-bold">Contact Us</h2>
      </div>
      <div>
        <div>
            <Lottie animationData={Contact} />
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default ContactSec;
