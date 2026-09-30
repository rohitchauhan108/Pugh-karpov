import '../src/index.css';

export const metadata = {
  title: 'Pugh & Karpov Law, PC | Virginia Trial Attorneys',
  description:
    'Premier Virginia law firm specializing in Civil Litigation, Personal Injury, Bankruptcy, and Criminal & Traffic Defense. Over 50 years combined experience in Virginia Beach and Tidewater courts.',
  keywords: [
    'Virginia Beach Attorney',
    'Civil Litigation Virginia',
    'Personal Injury Hampton Roads',
    'Bankruptcy Chapter 7 Virginia Beach',
    'Criminal Defense Attorney',
    'Traffic Defense Tidewater',
    'Gregory Pugh',
    'Anton Karpov',
  ],
  authors: [{ name: 'Pugh & Karpov Law, PC' }],
  icons: {
    icon: '/assets/logo-Ds7Cltmw.png',
  },
  openGraph: {
    title: 'Pugh & Karpov Law, PC | Virginia Trial Attorneys',
    description:
      'Premier Virginia law firm specializing in Civil Litigation, Personal Injury, Bankruptcy, and Criminal & Traffic Defense.',
    url: 'https://pughkarpov.com/',
    siteName: 'Pugh & Karpov Law, PC',
    images: [
      {
        url: '/assets/logo-Ds7Cltmw.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#1e3a8a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/assets/logo-Ds7Cltmw.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-800 font-['Poppins'] text-base antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
