# Skye Hills Neighbors

A homeowner-led initiative website for gathering community support and petition signatures for HOA design guideline changes. Built with SvelteKit and Tailwind CSS.

## About

This website was created to help Skye Hills homeowners organize and demonstrate support for proposed changes to HOA design guidelines. It features:

- **Petition Sign-up Form** - Integrated Mailchimp form for collecting homeowner signatures
- **Real-time Counter** - Displays the current number of supporters via Mailchimp API
- **Timeline** - Visual timeline of the proposal process
- **Privacy Policy** - Transparent privacy policy explaining data handling
- **Responsive Design** - Mobile-friendly interface built with Tailwind CSS

## Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Email Service**: [Mailchimp](https://mailchimp.com/)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Mailchimp account with:
  - An API key
  - A mailing list
  - An embedded form URL

### Installation

1. Clone the repository:
```bash
git clone https://github.com/stevestrebl/skyehills.git
cd skyehills
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your Mailchimp credentials:
```env
MAILCHIMP_API_KEY=your_api_key_here
MAILCHIMP_SERVER=us18
```

**Getting your Mailchimp credentials:**
- **API Key**: Mailchimp Account → Extras → API keys
- **Server**: The server prefix from your Mailchimp account (usually `us18`, `us19`, etc.)
- **List ID**: Found in your Mailchimp list settings (currently hardcoded as `0d6d2e67e7` in the code)

4. Update the Mailchimp form:
   - Replace the form action URL in `src/routes/+page.svelte` with your own Mailchimp embedded form URL
   - Update the list ID in `src/routes/api/count/+server.ts` if using a different list

5. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:5173` to see the site.

## Project Structure

```
├── src/
│   ├── lib/
│   │   └── Footer.svelte          # Reusable footer component
│   ├── routes/
│   │   ├── +page.svelte           # Main homepage
│   │   ├── privacy/
│   │   │   └── +page.svelte       # Privacy policy page
│   │   ├── thank-you/
│   │   │   └── +page.svelte       # Thank you page after signup
│   │   └── api/
│   │       └── count/
│   │           └── +server.ts     # API endpoint for Mailchimp count
│   └── app.css                    # Global styles with Tailwind
├── static/                         # Static assets (images, etc.)
└── .env.example                    # Environment variables template
```

## Configuration

### Mailchimp Integration

The site uses Mailchimp for:
- **Form Submissions**: Embedded Mailchimp form for collecting signatures
- **Member Count**: API endpoint that fetches the current subscriber count

To configure:
1. Get your Mailchimp API key and server prefix
2. Add them to `.env`
3. Update the form action URL in the main page component
4. Update the list ID in the API route if needed

### Customization

- **Content**: Edit `src/routes/+page.svelte` for main content
- **Styling**: Tailwind classes throughout components, or edit `src/app.css`
- **Images**: Add images to `static/` and reference as `/filename.jpg`
- **Privacy Policy**: Edit `src/routes/privacy/+page.svelte`

## Building for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment

This project can be deployed to:
- **Vercel** (recommended for SvelteKit)
- **Netlify**
- **Cloudflare Pages**
- Any platform that supports Node.js

Make sure to:
1. Set environment variables in your hosting platform
2. Configure your Mailchimp form redirect URL to point to your deployed thank-you page

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source. See the repository for license details.

## Security

- Never commit `.env` files
- API keys are stored in environment variables only
- The Mailchimp list ID and form IDs in the code are public identifiers (safe to expose)

## Support

For questions or issues, please open an issue on GitHub.

---

**Note**: This is a homeowner-led initiative, independent from the HOA and management company.
