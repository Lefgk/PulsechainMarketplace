'use client'

export default function JoinPage() {

    return (
        <div className="min-h-screen bg-neutral-950 p-6">
            <div className="max-w-4xl mx-auto pt-8">
                {/* Back Button */}
                <div className="mb-8">
                    <a
                        href="/"
                        className="inline-flex items-center gap-3 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white px-6 py-3 rounded-lg transition-all"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5m0 0l7 7m-7-7l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-medium">Back to Marketplace</span>
                    </a>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-4">Join PulsechainMarketplace</h1>
                    <p className="text-neutral-400 text-lg">Follow these simple steps to add yourself to the marketplace:</p>
                </div>

                {/* GitHub Instructions */}
                <div id="github-instructions" className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-2">GitHub Direct Edit Method</h2>
                    <p className="text-neutral-400 mb-6">Follow these steps to add yourself instantly to the marketplace:</p>

                    <div className="space-y-6">
                        {/* Step 1 */}
                        <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-white text-neutral-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                                <h3 className="text-lg font-bold text-white">Go to the GitHub Repository</h3>
                            </div>
                            <p className="text-neutral-400 mb-4">
                                Click the button below to open the marketplace data file directly in GitHub's editor:
                            </p>
                            <a
                                href="https://github.com/Lefgk/PulsechainMarketplace/edit/main/marketplace_data.json"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white hover:bg-neutral-200 text-neutral-900 px-6 py-3 rounded-lg transition-colors font-semibold"
                            >
                                Edit marketplace_data.json on GitHub
                            </a>
                            <p className="text-neutral-500 text-sm mt-3">
                                You'll need to be logged into GitHub for this to work
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-white text-neutral-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                                <h3 className="text-lg font-bold text-white">Edit the File</h3>
                            </div>
                            <p className="text-neutral-400 mb-4">
                                In the GitHub editor, scroll down to the bottom of the file. You'll see a closing bracket <code className="bg-neutral-800 px-2 py-1 rounded text-white">]</code>.
                            </p>
                            <p className="text-neutral-400">
                                Add a comma <code className="bg-neutral-800 px-2 py-1 rounded text-white">,</code> after the last entry, then add your profile data.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-white text-neutral-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                                <h3 className="text-lg font-bold text-white">Add Your Profile</h3>
                            </div>
                            <p className="text-neutral-400 mb-4">
                                Copy and paste this template, then fill in your information:
                            </p>
                            <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
                                <pre className="text-sm text-neutral-300 overflow-x-auto whitespace-pre-wrap">{`  {
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
                        <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-white text-neutral-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                                <h3 className="text-lg font-bold text-white">Commit Your Changes</h3>
                            </div>
                            <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 mb-4">
                                <p className="text-neutral-400 mb-4">
                                    After editing the file, scroll down and you'll see the commit dialog:
                                </p>

                                {/* GitHub Commit Dialog Mockup */}
                                <div className="bg-neutral-900 rounded-lg border border-neutral-700 p-4 mb-4">
                                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-700">
                                        <h3 className="text-white font-semibold">Commit changes</h3>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-neutral-400 text-sm block mb-2">Commit message</label>
                                            <div className="bg-neutral-800 border border-neutral-600 rounded-lg p-3">
                                                <span className="text-white">added my info!</span>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
                                                </div>
                                                <span className="text-neutral-300 text-sm">Commit directly to the main branch</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-4 h-4 bg-neutral-700 rounded-full border border-neutral-600"></div>
                                                <span className="text-neutral-500 text-sm">Create a new branch for this commit</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-3 pt-4">
                                            <button className="bg-neutral-700 text-white px-4 py-2 rounded-md text-sm">Cancel</button>
                                            <button className="bg-white text-neutral-900 px-6 py-2 rounded-md font-semibold text-sm">Commit changes</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-neutral-400 text-sm">
                                    <p className="mb-2 text-white">Steps:</p>
                                    <p className="mb-1">1. Type your commit message (like "added my info!")</p>
                                    <p className="mb-1">2. Make sure the first option is selected</p>
                                    <p>3. Click "Commit changes"</p>
                                </div>
                            </div>
                            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-3">
                                <p className="text-neutral-300">
                                    That's it! Your profile appears instantly on the marketplace.
                                </p>
                            </div>
                        </div>

                        <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4 text-center">
                            <p className="text-neutral-400">
                                Need help? Contact <a href="https://t.me/Lefkk" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">@Lefkk on Telegram</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
