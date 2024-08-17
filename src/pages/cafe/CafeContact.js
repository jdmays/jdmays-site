const CafeContact = () => {
  return (
    <div className="bg-purple-100 text-gray-800 min-h-screen">
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold mb-5">The List</h1>
        <div className="border-t border-purple-900 my-4 w-full"></div>
        <p className="text-2xl font-semibold text-gray-600 my-2">
          Did you make the List?
        </p>
        <p className="text-lg text-gray-600 my-2">
          We send out a reminder the week of the Café and also if there are any
          changes in the location or meeting date. But we can't do that unless
          we have your contact information. Please fill out the contact form at
          the link below so we have you on the list.
        </p>
        <p className="text-2xl text-purple-800 my-2 hover:text-green-400">
          <a target="_new" href="https://docs.google.com/forms/d/e/1FAIpQLSe39oETr9r8Tf2yO9nYIG1i0wVUZVmpUVdUegYnWCgornGpeg/viewform">
            Contact Form
          </a>
        </p>

        <div className="border-t border-purple-900 my-4 w-full"></div>
      </div>
    </div>
  );
};
export default CafeContact;
