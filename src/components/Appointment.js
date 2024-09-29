"use client";
import React from 'react';
import { InlineWidget } from 'react-calendly';

const Appointment = () => {
  return (
    <div id='contact' className='w-full md:px-24 px-5 py-24'>
        <h1 className='text-4xl font-semibold mb-5 text-center'>Let's get started</h1>
        <p></p>
        <InlineWidget className="w-[320px] h-[920px]" url="https://calendly.com/rolandazim/30min?hide_gdpr_banner=1" />
    </div>
  )
}

export default Appointment
