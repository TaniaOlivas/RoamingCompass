const ContactForm = ({ contactBlurb }) => {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-4">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12 lg:text-left text-center ">
                        <h1 className="text-2xl font-bold text-indigo-600">We'd Love to Hear from You!</h1>
                        <p className="text-lg mt-4">{contactBlurb}
                        </p>
                    </div>
                    <div className="rounded-lg bg-indigo-100 p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="#" className="space-y-5">
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-4 text-md"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-4 text-md"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone Number</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-4 text-md"
                                        placeholder="Phone Number"
                                        type="tel"
                                        id="phone"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>
                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-4 text-md"
                                    placeholder="Message"
                                    rows="8"
                                    id="message"
                                ></textarea>
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-gray-600 px-5 py-3 font-medium text-white sm:w-auto hover:bg-gray-500"
                                >
                                    Send Inquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;