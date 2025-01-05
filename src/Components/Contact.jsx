import React, { useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';

// Note: This is not secure for production use
const RESEND_API_KEY = 're_9RPhnQPP_6SJCaXie6tiS49b9eDWf292g';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const message = formData.get('message');

    const toastId = toast.loading('Sending message...');

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: 'Contact Form <onboarding@resend.dev>',
          to: 'ishanklalwani@gmail.com',
          subject: 'New Contact Form Submission',
          text: `
            Name: ${fullName}
            Email: ${email}
            Message: ${message}
          `
        })
      });

      if (response.ok) {
        toast.success('Message sent successfully!', { id: toastId });
        event.target.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-[#F2EDE6] md:px-20 md:py-10 md:flex-row items-center min-h-screen gap-28 flex flex-col px-10 py-5'>
      <Toaster position="top-center" reverseOrder={false} />
      <div className='max-h-screen hidden md:block'>
        <img src="/images/contact.png" alt="" className='max-h-[650px]'/>
      </div>
      <div className="flex flex-col min-h-[650px] justify-center p-4 md:p-8">
      <div className="flex flex-col gap-8 md:gap-12">
        <p className="text-5xl md:text-7xl text-[#00054B] md:tracking-wider font-serif">
          Contact Me
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row lg:gap-52">
          <div className="flex flex-col gap-8 md:gap-10 mb-12 lg:mb-0">
            <input 
              type="text"  
              name="fullName"
              placeholder="Full Name *" 
              className="bg-transparent border-b-2 border-solid border-[#00054B] p-4 md:p-5 text-black outline-none w-full md:w-72"
              required
            />
            <input 
              type="email"  
              name="email"
              placeholder="Email *" 
              className="bg-transparent border-b-2 border-solid border-[#00054B] p-4 md:p-5 text-black outline-none w-full md:w-72"
              required
            />
            <textarea
              name="message"
              placeholder="Message *"
              rows={4}
              className="bg-transparent border-b-2 border-solid border-[#00054B] p-4 md:p-5 text-black outline-none w-full md:w-72 resize-none h-32"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-3 bg-[#00054B] text-white text-lg md:text-xl rounded-full w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Contact Me'}
            </button>
          </div>

          <div className="flex flex-col gap-12 md:gap-20">
            <div> 
              <p className="font-bold text-[#00054B] text-lg md:text-xl">Contact</p>
              <p className="font-normal text-[#00054B] text-lg md:text-xl">hi@green.com</p>
            </div>
            <div>
              <p className="font-bold text-[#00054B] text-lg md:text-xl">Based in</p>
              <p className="font-normal text-[#00054B] text-lg md:text-xl">Dehradun, India</p>
            </div>
            <div className="flex flex-col justify-end h-full">
              <div className="flex gap-8 md:gap-12 lg:justify-between">
                <Instagram size={28} color="#00054B"/>
                <Facebook size={28} color="#00054B"/>
                <Twitter size={28} color="#00054B"/>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

