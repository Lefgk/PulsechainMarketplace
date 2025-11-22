'use client'

import { useState, useMemo } from 'react'
import { User } from '@/types'
import marketplaceData from '../../marketplace_data.json'

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')

    const users = marketplaceData as User[]

    // Extract unique service categories
    const categories = useMemo(() => {
        const allCategories = users.map(user =>
            user.services.toLowerCase().split(' ')[0]
        ).filter(Boolean)
        return ['all', ...Array.from(new Set(allCategories))]
    }, [users])

    // Filter users based on search term and category
    const filteredUsers = useMemo(() => {
        return users.filter(user => {
            const matchesSearch =
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.services.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.location.toLowerCase().includes(searchTerm.toLowerCase())

            const matchesCategory =
                selectedCategory === 'all' ||
                user.services.toLowerCase().includes(selectedCategory)

            return matchesSearch && matchesCategory
        })
    }, [users, searchTerm, selectedCategory])

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            {/* Header */}
            <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            <span className="bg-gradient-to-r from-pulse-pink to-pulse-blue bg-clip-text text-transparent">
                                PulseChain
                            </span>{' '}
                            Marketplace
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Discover goods and services from the PulseChain community. Connect with talented individuals building the future.
                        </p>
                    </div>
                </div>
            </header>

            {/* Search and Filter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <span className="absolute left-3 top-3 text-gray-400">🔍</span>
                            <input
                                type="text"
                                placeholder="Search by name, service, or location..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pulse-pink focus:border-transparent"
                            />
                        </div>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pulse-pink focus:border-transparent"
                        >
                            {categories.map(category => (
                                <option key={category} value={category} className="bg-gray-800">
                                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-gray-300 text-lg">
                        Showing {filteredUsers.length} {filteredUsers.length === 1 ? 'person' : 'people'}
                    </p>
                </div>

                {/* User Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredUsers.map((user, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                        >
                            {/* User Header */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="text-3xl">{user.emoji || '👤'}</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white mb-1">
                                        {user.name || 'Anonymous'}
                                    </h3>
                                    {user.location && (
                                        <div className="flex items-center gap-1 text-gray-300 text-sm">
                                            <span>📍</span>
                                            {user.location}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Services */}
                            <div className="mb-4">
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    {user.services || 'No services listed'}
                                </p>
                            </div>

                            {/* Contact Links */}
                            <div className="flex flex-wrap gap-2">
                                {user.telegram_link && (
                                    <a
                                        href={user.telegram_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 px-3 py-2 bg-pulse-blue/20 text-pulse-blue rounded-lg text-sm hover:bg-pulse-blue/30 transition-colors"
                                    >
                                        <span>📱</span>
                                        Telegram
                                    </a>
                                )}
                                {user.twitter && (
                                    <a
                                        href={user.twitter.startsWith('http') ? user.twitter : `https://twitter.com/${user.twitter.replace('@', '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 px-3 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm hover:bg-blue-500/30 transition-colors"
                                    >
                                        <span>🐦</span>
                                        Twitter
                                    </a>
                                )}
                                {user.instagram && (
                                    <a
                                        href={user.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 px-3 py-2 bg-pink-500/20 text-pink-400 rounded-lg text-sm hover:bg-pink-500/30 transition-colors"
                                    >
                                        <span>📷</span>
                                        Instagram
                                    </a>
                                )}
                                {user.contact_link && (
                                    <a
                                        href={user.contact_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 px-3 py-2 bg-gray-500/20 text-gray-400 rounded-lg text-sm hover:bg-gray-500/30 transition-colors"
                                    >
                                        <span>🔗</span>
                                        Website
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredUsers.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-semibold text-white mb-2">No results found</h3>
                        <p className="text-gray-400 max-w-md mx-auto">
                            Try adjusting your search terms or selecting a different category to find what you're looking for.
                        </p>
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <p className="text-gray-400">
                            Built for the PulseChain community 💜 | Connect, Trade, Grow
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
