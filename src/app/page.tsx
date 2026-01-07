'use client'

import { useState, useMemo } from 'react'
import { User } from '@/types'
import marketplaceData from '../../marketplace_data.json'

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('')

    const users = marketplaceData as User[]

    const filteredUsers = useMemo(() => {
        if (!searchTerm.trim()) return users

        const searchTermLower = searchTerm.toLowerCase()

        return users.filter(user => {
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
                .filter(Boolean)
                .join(' ')
                .toLowerCase()

            return searchableText.includes(searchTermLower)
        })
    }, [users, searchTerm])

    return (
        <div className="min-h-screen bg-neutral-950">
            <div className="container mx-auto px-6 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Pulsechain Community Marketplace
                    </h1>
                    <p className="text-neutral-400 text-lg mb-4">Find services from the Pulsechain community</p>
                    <a
                        href="/join"
                        className="inline-block bg-white hover:bg-neutral-200 text-neutral-900 px-8 py-4 rounded-lg font-semibold transition-all"
                    >
                        + Add your service
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
                            className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 text-lg"
                        />
                    </div>
                    <div className="text-center">
                        <div className="text-neutral-500 text-sm">
                            {searchTerm ? (
                                <>Found {filteredUsers.length} result{filteredUsers.length !== 1 ? 's' : ''} for "{searchTerm}"</>
                            ) : (
                                <>Showing all {filteredUsers.length} service provider{filteredUsers.length !== 1 ? 's' : ''}</>
                            )}
                        </div>
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="text-neutral-500 hover:text-white text-sm mt-1 underline"
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
                            className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-all"
                        >
                            {/* User Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">{user.emoji}</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{user.name}</h3>
                                    <p className="text-neutral-500 text-sm">{user.location}</p>
                                </div>
                            </div>

                            {/* Services */}
                            <div className="mb-4">
                                <h4 className="text-neutral-500 font-medium text-xs uppercase tracking-wider mb-2">Services</h4>
                                <p className="text-neutral-300 text-sm leading-relaxed">{user.services}</p>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-3">
                                <h4 className="text-neutral-500 font-medium text-xs uppercase tracking-wider">Contact</h4>

                                <div className="flex flex-wrap gap-2">
                                    {user.telegram_link && (
                                        <a
                                            href={user.telegram_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 px-3 py-2 bg-neutral-800 text-neutral-300 rounded-md text-sm hover:bg-neutral-700 transition-colors"
                                            title={'Telegram: ' + (user.telegram_handle || 'Contact')}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                            </svg>
                                            Telegram
                                        </a>
                                    )}

                                    {user.contact_link && (
                                        <a
                                            href={user.contact_link.startsWith('http') ? user.contact_link : 'mailto:' + user.contact_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 px-3 py-2 bg-neutral-800 text-neutral-300 rounded-md text-sm hover:bg-neutral-700 transition-colors"
                                            title={user.contact_link}
                                        >
                                            {user.contact_link.includes('@') ? (
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
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

                                    {user.twitter && (
                                        <a
                                            href={user.twitter.startsWith('http') ? user.twitter : 'https://twitter.com/' + user.twitter.replace('@', '')}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 px-3 py-2 bg-neutral-800 text-neutral-300 rounded-md text-sm hover:bg-neutral-700 transition-colors"
                                            title={'X (Twitter): ' + user.twitter}
                                        >
                                            X
                                        </a>
                                    )}

                                    {user.instagram && (
                                        <a
                                            href={user.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 px-3 py-2 bg-neutral-800 text-neutral-300 rounded-md text-sm hover:bg-neutral-700 transition-colors"
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
                        <p className="text-neutral-500">Try adjusting your search terms</p>
                    </div>
                )}
            </div>
        </div>
    )
}
