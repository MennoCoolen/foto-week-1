export default function TermsOfAgreement() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-8 py-20 flex justify-center">

      <div className="max-w-3xl w-full">

        <h1 className="text-4xl font-light mb-8">Terms of Agreement</h1>

        <p className="mb-10 text-neutral-400">
          Please read these Terms of Agreement carefully before using our website or services.
          By accessing or using our site, you agree to comply with these terms and conditions.
        </p>

        <div className="space-y-6">

          <div className="p-6 bg-neutral-900 rounded-lg">
            <h2 className="text-xl mb-2">Acceptance of Terms</h2>
            <p className="text-neutral-400">
              By using our website, you agree to be bound by these Terms of Agreement,
              as well as any additional terms or policies posted on the site.
            </p>
          </div>

          <div className="p-6 bg-neutral-900 rounded-lg">
            <h2 className="text-xl mb-2">User Responsibilities</h2>
            <p className="text-neutral-400">
              Users must provide accurate information and refrain from unlawful use
              of the website.
            </p>
          </div>

          <div className="p-6 bg-neutral-900 rounded-lg">
            <h2 className="text-xl mb-2">Account Registration</h2>
            <p className="text-neutral-400">
              Some features require account registration. Users are responsible
              for maintaining the confidentiality of their credentials.
            </p>
          </div>

          <div className="p-6 bg-neutral-900 rounded-lg">
            <h2 className="text-xl mb-2">Intellectual Property</h2>
            <p className="text-neutral-400">
              All content on this website is protected by intellectual property laws.
            </p>
          </div>

          <div className="p-6 bg-neutral-900 rounded-lg">
            <h2 className="text-xl mb-2">Limitation of Liability</h2>
            <p className="text-neutral-400">
              We are not liable for damages arising from the use of this website.
            </p>
          </div>

        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <button className="flex-1 bg-white text-black py-3 rounded-lg hover:bg-neutral-300 transition">
            Accept Terms
          </button>

          <button className="flex-1 border border-neutral-600 py-3 rounded-lg hover:bg-neutral-800 transition">
            Decline
          </button>

        </div>

      </div>

    </div>
  );
}