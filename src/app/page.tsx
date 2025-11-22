'use client'

import { useState, useMemo } from 'react'
import { User } from '@/types'
import marketplaceData from '../../marketplace_data.json'

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('')

    const users = marketplaceData as User[]

    // Enhanced search that looks through ALL fields in the JSON
    const filteredUsers = useMemo(() => {
        if (!searchTerm.trim()) return users

        const searchTermLower = searchTerm.toLowerCase()

        return users.filter(user => {
            // Convert the entire user object to searchable text
            const searchableText = [
                user.name,
                user.services,
                user.location,
                user.emoji,
                user.telegram_handle,
                user.telegram_link,
                user.contact_link,
                user.twitter,
                user.instagram
            ]
                .filter(Boolean) // Remove empty/null values
                .join(' ') // Join all text together
                .toLowerCase()

            // Check if search term appears anywhere in the combined text
            return searchableText.includes(searchTermLower)
        })
    }, [users, searchTerm])

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            <div className="container mx-auto px-6 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        🚀 Pulsechain Community Marketplace
                    </h1>
                    <p className="text-pulse-blue text-lg mb-4">Find amazing services from the Pulsechain community</p>
                    <a
                        href="/join"
                        className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
                    >
                        ➕ Add yourself
                    </a>
                </div>
                {/* Search Section */}
                <div className="mb-8 space-y-4">
                    <div className="max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search anything... (name, service, location, telegram, etc.)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-pulse-blue/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-pulse-blue focus:ring-2 focus:ring-pulse-blue/20 text-lg"
                        />
                    </div>
                    <div className="text-center">
                        <div className="text-pulse-blue text-sm">
                            {searchTerm ? (
                                <>Found {filteredUsers.length} result{filteredUsers.length !== 1 ? 's' : ''} for "{searchTerm}"</>
                            ) : (
                                <>Showing all {filteredUsers.length} service provider{filteredUsers.length !== 1 ? 's' : ''}</>
                            )}
                        </div>
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="text-gray-400 hover:text-white text-sm mt-1 underline"
                            >
                                Clear search
                            </button>
                        )}
                    </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredUsers.map((user, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md border border-pulse-blue/30 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                        >
                            {/* User Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">{user.emoji}</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{user.name}</h3>
                                    <p className="text-pulse-blue text-sm">{user.location}</p>
                                </div>
                            </div>

                            {/* Services */}
                            <div className="mb-4">
                                <h4 className="text-pulse-blue font-medium text-sm mb-2">SERVICES OFFERED:</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">{user.services}</p>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-3">
                                <h4 className="text-pulse-blue font-medium text-sm">HOW TO CONNECT:</h4>

                                <div className="flex flex-wrap gap-2">
                                    {/* Telegram Link */}
                                    {user.telegram_link && (
                                        <a
                                            href={user.telegram_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 px-3 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30 transition-colors border border-blue-500/30"
                                            title={'Telegram: ' + (user.telegram_handle || 'Contact')}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                            </svg>
                                            Telegram
                                        </a>
                                    )}

                                    {/* Contact Link - Smart Detection for Linktree, Email, LinkedIn, etc. */}
                                    {user.contact_link && (
                                        <a
                                            href={user.contact_link.startsWith('http') ? user.contact_link : 'mailto:' + user.contact_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={'flex items-center gap-1 px-3 py-2 rounded-lg text-sm transition-colors border ' + (
                                                user.contact_link.includes('@')
                                                    ? 'bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30'
                                                    : (user.contact_link.includes('linktr.ee') || user.contact_link.includes('linktree'))
                                                        ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/30'
                                                        : user.contact_link.includes('linkedin')
                                                            ? 'bg-blue-600/20 text-blue-300 border-blue-600/30 hover:bg-blue-600/30'
                                                            : 'bg-gray-500/20 text-gray-400 border-gray-500/30 hover:bg-gray-500/30'
                                            )}
                                            title={user.contact_link}
                                        >
                                            {user.contact_link.includes('@') ? (
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                                </svg>
                                            ) : (user.contact_link.includes('linktr.ee') || user.contact_link.includes('linktree')) ? (
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                                                    <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.897.606 0 1.053-.486 1.053-1.083 0-.081 0-.163-.08-.243L12.438 9.5l2.54 5.623c-.08.08-.08.162-.08.243 0 .597.447 1.083 1.053 1.083.524 0 .972-.38 1.052-.897 0-.162 0-.323-.08-.486L14.41 8.783C14.33 8.542 14.09 8.38 13.809 8.38c-.283 0-.524.162-.605.403L11.68 12.69 10.156 8.783C10.075 8.542 9.835 8.38 9.554 8.38c-.282 0-.524.162-.604.403L7.953 15.066zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                                </svg>
                                            ) : user.contact_link.includes('linkedin') ? (
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            ) : (
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                                                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                                </svg>
                                            )}
                                            {user.contact_link.includes('@') ? 'Email' :
                                                (user.contact_link.includes('linktr.ee') || user.contact_link.includes('linktree')) ? 'Linktree' :
                                                    user.contact_link.includes('linkedin') ? 'LinkedIn' :
                                                        'Website'}
                                        </a>
                                    )}

                                    {/* X (Twitter) */}
                                    {user.twitter && (
                                        <a
                                            href={user.twitter.startsWith('http') ? user.twitter : 'https://twitter.com/' + user.twitter.replace('@', '')}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 px-3 py-2 bg-black/60 text-white rounded-lg text-sm hover:bg-black/80 transition-colors border border-gray-500/50"
                                            title={'X (Twitter): ' + user.twitter}
                                        >
                                            {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg> */}
                                            X
                                        </a>
                                    )}

                                    {/* Instagram */}
                                    {user.instagram && (
                                        <a
                                            href={user.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-400 rounded-lg text-sm hover:from-purple-500/30 hover:to-pink-500/30 transition-colors border border-pink-500/30"
                                            title={'Instagram: ' + user.instagram}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                            Instagram
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredUsers.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl text-white mb-2">No services found</h3>
                        <p className="text-gray-400">Try adjusting your search terms or category filter</p>
                    </div>
                )}
            </div>
        </div>
    )
}