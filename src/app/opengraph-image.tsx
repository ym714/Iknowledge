import { ImageResponse } from 'next/og';

// Remove edge runtime to allow fs usage
// export const runtime = 'edge';

export const alt = 'Iknowledge';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    // Use absolute URL for the background image to ensure it works in Vercel
    // Note: In a real production app, you might want to use process.env.VERCEL_URL
    const imageUrl = 'https://iknowledge-xyz.vercel.app/og-bg.jpg';

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Times New Roman", serif',
                    position: 'relative',
                }}
            >
                {/* Background Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={imageUrl}
                    alt="Background"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />

                {/* Overlay Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                    }}
                >
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 900,
                            color: '#111', // Dark text as requested, or maybe white if bg is dark?
                            // The uploaded image is light/beige, so dark text is better.
                            letterSpacing: '-0.02em',
                            marginBottom: '20px',
                            textShadow: '0 2px 10px rgba(255,255,255,0.5)', // Add subtle glow for readability
                        }}
                    >
                        Iknowledge
                    </div>

                    <div
                        style={{
                            fontSize: 32,
                            color: '#333',
                            textAlign: 'center',
                            maxWidth: '800px',
                            fontWeight: 'bold',
                        }}
                    >
                        An ecosystem woven by organized Agents.
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
