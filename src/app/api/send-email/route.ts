import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, services, location, telegram, website, twitter, instagram, emoji, jsonCode } = body

        // Create the email content
        const emailHTML = `
      <h2>🚀 New PulsechainMarketplace Profile Submission</h2>
      
      <h3>Profile Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Emoji:</strong> ${emoji || '🤝'}</li>
        <li><strong>Services:</strong> ${services}</li>
        <li><strong>Location:</strong> ${location}</li>
        <li><strong>Telegram:</strong> @${telegram}</li>
        <li><strong>Website:</strong> ${website || 'None'}</li>
        <li><strong>Twitter:</strong> ${twitter || 'None'}</li>
        <li><strong>Instagram:</strong> ${instagram || 'None'}</li>
      </ul>

      <h3>Ready-to-paste JSON:</h3>
      <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto; border: 1px solid #ddd;">
${jsonCode}
      </pre>

      <h3>🔧 How to add this profile:</h3>
      <ol>
        <li>Go to: <a href="https://github.com/Lefgk/PulsechainMarketplace/edit/main/marketplace_data.json" style="color: #0066cc;">Edit JSON File</a></li>
        <li>Paste the JSON code above before the final <code>]</code> bracket</li>
        <li>Add a commit message like "Add ${name} to marketplace"</li>
        <li>Click "Propose changes"</li>
        <li>Merge the pull request</li>
      </ol>

      <p style="margin-top: 30px; padding: 10px; background: #e7f3ff; border-left: 4px solid #0066cc;">
        <strong>💡 Tip:</strong> The website will automatically update within a few minutes after merging!
      </p>

      <hr style="margin: 30px 0;">
      <p style="color: #666; font-size: 12px;"><em>Sent from PulsechainMarketplace submission form</em></p>
    `

        // Use a simple email service like EmailJS or implement with nodemailer
        // For now, let's simulate the email being sent

        // You can implement actual email sending here with services like:
        // - Resend (resend.com)
        // - SendGrid
        // - Nodemailer with Gmail

        console.log('📧 Email would be sent to lefgiak@gmail.com:')
        console.log(`Subject: New Marketplace Profile: ${name}`)
        console.log('Content:', emailHTML)

        // For development, we'll just return success
        // In production, you'd actually send the email

        return NextResponse.json({
            message: 'Profile submission received! You will be added within 24 hours.',
            success: true
        })

    } catch (error) {
        console.error('Email API Error:', error)
        return NextResponse.json(
            { message: 'Failed to process submission', success: false },
            { status: 500 }
        )
    }
}
