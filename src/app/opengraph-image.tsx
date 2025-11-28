import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

// Remove edge runtime to allow fs usage
// export const runtime = 'edge';

export const alt = 'know I edge';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    // Read the background image from the filesystem to avoid network round-trips/timeouts
    const imagePath = path.join(process.cwd(), 'public', 'og-bg.jpg');
    const imageBuffer = await fs.promises.readFile(imagePath);
    const imageBase64 = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;

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
                    src={imageBase64}
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
                    {/* Logo */}
                    <div
                        style={{
                            width: '80px',
                            height: '80px',
                            background: 'black',
                            borderRadius: '20px',
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                        }}
                    >
                        <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '50%' }} />
                    </div>

                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 900,
                            color: '#2C3E50', // Match the new dark slate color
                            letterSpacing: '-0.02em',
                            marginBottom: '20px',
                            textShadow: '0 2px 10px rgba(255,255,255,0.5)',
                            display: 'flex',
                            gap: '20px',
                            alignItems: 'center',
                            fontFamily: '"Times New Roman", serif', // Ensure serif font is used
                        }}
                    >
                        <span style={{ opacity: 0.9 }}>know</span>
                        <span style={{ fontSize: '100px' }}>I</span>
                        <span style={{ opacity: 0.9 }}>edge</span>
                    </div>

                    <div
                        style={{
                            fontSize: 32,
                            color: '#333',
                            textAlign: 'center',
                            maxWidth: '600px', // Constrain width for mobile/square crop safety
                            fontWeight: 'bold',
                            lineHeight: 1.4,
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
