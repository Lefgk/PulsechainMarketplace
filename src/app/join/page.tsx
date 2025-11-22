'use client'

export default function JoinPage() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 p-6">
            <div className="max-w-4xl mx-auto pt-8">
                {/* Back Button */}
                <div className="mb-8">
                    <a
                        href="/"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/40 hover:border-purple-400/60 text-gray-200 hover:text-white px-6 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 group shadow-lg hover:shadow-purple-500/25"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="group-hover:-translate-x-1 transition-transform duration-300">
                            <path d="M19 12H5m0 0l7 7m-7-7l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-medium">Back to Marketplace</span>
                    </a>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-4">Join PulsechainMarketplace</h1>
                    <p className="text-gray-300 text-lg">Follow these simple steps to add yourself to the marketplace:</p>
                </div>

                {/* GitHub Instructions - Always Visible */}
                {/* <div className="max-w-2xl mx-auto mb-8">
                    <div className="p-8 border-2 border-purple-500 bg-gradient-to-r from-purple-600/30 to-pink-600/30 ring-2 ring-purple-500/50 rounded-2xl backdrop-blur-sm shadow-2xl">
                        <div className="text-center">
                            <div className="text-6xl mb-4 animate-pulse">⚡</div>
                            <h3 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">GitHub Direct Edit</h3>
                            <p className="text-gray-200 mb-4 text-lg">Edit the marketplace file directly on GitHub - your profile appears instantly!</p>
                            <div className="text-purple-300 font-medium text-lg">🚀 Instant Results • 👨‍💻 GitHub Account Required</div>
                        </div>
                    </div>
                </div> */}

                {/* GitHub Instructions */}
                <div id="github-instructions" className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 animate-in slide-in-from-bottom-4 duration-500 shadow-2xl">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">⚡ GitHub Direct Edit Method</h2>
                    <p className="text-purple-200 mb-6 text-lg">Follow these steps to add yourself instantly to the marketplace:</p>

                    <div className="space-y-6">
                        {/* Step 1 */}
                        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/40 rounded-xl p-6 backdrop-blur-sm shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                <h3 className="text-xl font-bold text-white">Go to the GitHub Repository</h3>
                            </div>
                            <p className="text-gray-300 mb-4">
                                Click the big button below to open the marketplace data file directly in GitHub's editor:
                            </p>
                            <a
                                href="https://github.com/Lefgk/PulsechainMarketplace/edit/main/marketplace_data.json"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors transform hover:scale-105 font-bold text-lg shadow-lg"
                            >
                                📂 CLICK HERE: Edit marketplace_data.json on GitHub →
                            </a>
                            <p className="text-yellow-300 text-sm mt-2">
                                ⚠️ You'll need to be logged into GitHub for this to work
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-400/40 rounded-xl p-6 backdrop-blur-sm shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                <h3 className="text-xl font-bold text-white">Edit the File</h3>
                            </div>
                            <p className="text-gray-300 mb-4">
                                In the GitHub editor, scroll down to the bottom of the file. You'll see a closing bracket <code className="bg-gray-800 px-2 py-1 rounded text-yellow-300">]</code>.
                            </p>
                            <p className="text-gray-300">
                                Add a comma <code className="bg-gray-800 px-2 py-1 rounded text-yellow-300">,</code> after the last entry, then add your profile data.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-400/40 rounded-xl p-6 backdrop-blur-sm shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                <h3 className="text-xl font-bold text-white">Add Your Profile in the end of the json file</h3>
                            </div>
                            <p className="text-gray-300 mb-4">
                                Copy and paste this template, then fill in your information:
                            </p>
                            <div className="bg-black/60 border border-purple-500/30 rounded-xl p-4 backdrop-blur-sm shadow-inner">
                                <pre className="text-sm text-purple-300 overflow-x-auto whitespace-pre-wrap">{`  {
    "emoji": "🤝",
    "services": "Your services here",
    "name": "Your Name",
    "location": "Your Location",
    "telegram_handle": "@yourtelegram",
    "telegram_link": "https://t.me/yourtelegram",
    "contact_link": "your-email@example.com or https://linktr.ee/yourname",
    "twitter": "https://twitter.com/yourhandle",
    "instagram": "https://instagram.com/yourhandle"
  }`}</pre>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/40 rounded-xl p-6 backdrop-blur-sm shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                <h3 className="text-xl font-bold text-white">Commit Your Changes</h3>
                            </div>
                            {/* <p className="text-gray-300 mb-4">
                                After adding your profile data, scroll down to the bottom of the GitHub page:
                            </p> */}
                            <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-4 mb-4">
                                <p className="text-gray-300 mb-4">
                                    After editing the file, scroll down and you'll see this commit dialog. Here's exactly what it looks like:
                                </p>

                                {/* GitHub Commit Dialog Mockup */}
                                <div className="bg-black/80 rounded-xl border border-purple-500/40 p-4 mb-4 backdrop-blur-sm shadow-2xl">
                                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-500/40">
                                        <h3 className="text-white text-lg font-semibold">Commit changes</h3>
                                        <button className="text-gray-400 hover:text-white">✕</button>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-white text-sm font-medium block mb-2">Commit message</label>
                                            <div className="bg-black/60 border-2 border-blue-400 rounded-lg p-3 backdrop-blur-sm">
                                                <span className="text-blue-200">added my info!</span>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-white text-sm font-medium block mb-3">Extended description</label>
                                            <div className="bg-black/40 border border-purple-400/30 rounded-lg p-3 h-24 backdrop-blur-sm">
                                                <span className="text-gray-400 text-sm">Add an optional extended description...</span>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center border-2 border-blue-400">
                                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                                <span className="text-white text-sm">Commit directly to the main branch</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-4 h-4 bg-gray-600 rounded-full border-2 border-gray-500"></div>
                                                <span className="text-gray-400 text-sm">Create a new branch for this commit and start a pull request</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-3 pt-4">
                                            <button className="bg-gray-600 text-white px-4 py-2 rounded-md">Cancel</button>
                                            <button className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold">Commit changes</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-yellow-300 text-sm">
                                    <p className="mb-2">📝 <strong>Steps:</strong></p>
                                    <p className="mb-1">1. Type your commit message (like "added my info!")</p>
                                    <p className="mb-1">2. Make sure the first radio button is selected (blue dot)</p>
                                    <p>3. Click the green "Commit changes" button</p>
                                </div>
                            </div>
                            <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-3">
                                <p className="text-green-300 font-medium">
                                    ✅ <strong>That's it!</strong> Your profile appears instantly on the marketplace - no waiting for approval!
                                </p>
                            </div>
                        </div>                            <div className="bg-pulse-blue/10 border border-pulse-blue/30 rounded-lg p-4 text-center">
                            <p className="text-pulse-blue font-medium">
                                💡 <strong>Need help?</strong> Contact @Lefkk on Telegram below for assistance!
                            </p>
                        </div>
                    </div>
                </div>

                {/* {!method && (
                    <div className="text-center">
                        <p className="text-gray-400">👆 Select a method above to get started</p>
                    </div>
                )} */}
                {/* Contact Info */}
                {/* <div className="bg-gradient-to-r from-pulse-blue/10 to-purple-500/10 border border-pulse-blue/30 rounded-xl p-6 mb-8 text-center">
                    <h3 className="text-lg font-bold text-white mb-3">📞 Need Help or Have Questions?</h3>
                    <p className="text-gray-300 mb-4">Feel free to reach out directly on Telegram for assistance!</p>
                    <div className="flex justify-center">
                        <a
                            href="https://t.me/Lefkk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-blue-500/20 text-blue-300 px-6 py-3 rounded-lg hover:bg-blue-500/30 transition-colors border border-blue-500/30 font-medium"
                        >
                            <span>📱</span>
                            Contact @Lefkk on Telegram
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
