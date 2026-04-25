import { useState } from 'react';
import { MailOpen, DollarSign, Copy, Check } from 'lucide-react';

type Screen = 'login' | 'signup' | 'dashboard' | 'deposit';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [copied, setCopied] = useState(false);

  const walletAddress = '1PyyCBQ39xntcx3yZTx5FYjaeU2cVbJ7NK';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setScreen('dashboard');
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password && fullName) {
      setEmail('');
      setPassword('');
      setFullName('');
      setScreen('login');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Login Screen
  if (screen === 'login') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-lime-50">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <MailOpen className="w-12 h-12 text-[#9dbb6f]" />
              <h1 className="text-5xl font-bold">
                <span className="text-[#9dbb6f]">PCH</span>
              </h1>
            </div>
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <MailOpen className="w-4 h-4" />
              Your Gateway to Grand Prizes
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9dbb6f]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter any password"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9dbb6f]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#9dbb6f] hover:bg-[#8aaa5f] text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Sign In
            </button>

            <p className="text-center text-gray-600 text-sm">
              Don't have an account?{' '}
              <span
                onClick={() => setScreen('signup')}
                className="text-[#9dbb6f] cursor-pointer hover:underline font-semibold"
              >
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    );
  }

  // Signup Screen
  if (screen === 'signup') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-lime-50">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <MailOpen className="w-12 h-12 text-[#9dbb6f]" />
              <h1 className="text-5xl font-bold">
                <span className="text-[#9dbb6f]">PCH</span>
              </h1>
            </div>
            <p className="text-gray-600">Create your account</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9dbb6f]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9dbb6f]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9dbb6f]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#9dbb6f] hover:bg-[#8aaa5f] text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Sign Up
            </button>

            <p className="text-center text-gray-600 text-sm">
              Already have an account?{' '}
              <span
                onClick={() => setScreen('login')}
                className="text-[#9dbb6f] cursor-pointer hover:underline font-semibold"
              >
                Sign in
              </span>
            </p>
          </form>
        </div>
      </div>
    );
  }

  // Deposit Screen
  if (screen === 'deposit') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-lime-50 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MailOpen className="w-10 h-10 text-[#9dbb6f]" />
                <h1 className="text-4xl font-bold text-[#9dbb6f]">PCH</h1>
              </div>
              <button
                onClick={() => setScreen('dashboard')}
                className="text-gray-600 hover:text-gray-800 font-medium"
              >
                ← Back to Dashboard
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Deposit Coins to Claim Prize</h2>

            <div className="bg-gradient-to-r from-[#9dbb6f] to-[#8aaa5f] rounded-xl p-6 text-white mb-6">
              <p className="text-lg mb-2">Prize Amount</p>
              <p className="text-5xl font-bold">$20,000</p>
              <p className="text-green-100 mt-2">Toyota Hybrid Corolla</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-800 mb-4 text-lg">Deposit Wallet Address</h3>
              <div className="bg-white border-2 border-[#9dbb6f] rounded-lg p-4 break-all font-mono text-sm mb-4">
                {walletAddress}
              </div>
              <button
                onClick={handleCopy}
                className="w-full bg-[#9dbb6f] hover:bg-[#8aaa5f] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copy Wallet Address
                  </>
                )}
              </button>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Important Instructions</h4>
              <ul className="space-y-2 text-yellow-700 text-sm">
                <li>• Send your coins to the wallet address above</li>
                <li>• After depositing, the admin will review and approve your transaction</li>
                <li>• Once approved, your prize will be processed and delivered</li>
                <li>• Keep your transaction receipt for verification</li>
              </ul>
            </div>

            <div className="mt-6 text-center text-gray-600">
              <p className="text-sm">Need help? Contact our support team</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-lime-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MailOpen className="w-10 h-10 text-[#9dbb6f]" />
              <h1 className="text-4xl font-bold text-[#9dbb6f]">PCH</h1>
            </div>
            <div className="text-right">
              <p className="text-gray-600 text-sm">Welcome back,</p>
              <p className="text-2xl font-bold text-gray-800">William</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9dbb6f] to-[#8aaa5f] rounded-2xl shadow-2xl p-8 mb-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-8 h-8" />
            <h2 className="text-2xl font-semibold">Your Balance</h2>
          </div>
          <p className="text-6xl font-bold mb-2">$50,000</p>
          <p className="text-green-100">Available Prize Balance</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <MailOpen className="w-8 h-8 text-[#9dbb6f]" />
            <h2 className="text-3xl font-bold text-gray-800">Featured Prize</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
              <img
                src="/src/imports/WhatsApp_Image_2026-04-25_at_1.30.19_PM.jpeg"
                alt="Toyota Hybrid Corolla"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Toyota Hybrid Corolla</h3>
              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <p className="text-gray-600 text-sm mb-2">Prize Value</p>
                <p className="text-5xl font-bold text-[#9dbb6f]">$20,000</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-[#9dbb6f] rounded-full"></div>
                  Hybrid Technology
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-[#9dbb6f] rounded-full"></div>
                  Full warranty coverage
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-[#9dbb6f] rounded-full"></div>
                  Delivery to your door
                </li>
              </ul>

              <button
                onClick={() => setScreen('deposit')}
                className="w-full bg-[#9dbb6f] hover:bg-[#8aaa5f] text-white font-bold py-4 rounded-lg transition-colors"
              >
                Claim Your Prize
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
