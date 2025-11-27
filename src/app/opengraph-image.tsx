import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Iknowledge';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    // We can load fonts here if needed, but for simplicity we'll use system fonts or fetch them.
    // For a truly premium look matching the site, we would load the Merriweather font.
    // However, loading fonts in edge runtime can be tricky without a fetchable URL.
    // We will use a standard serif font stack that approximates it.

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
                    fontFamily: '"Merriweather", "Times New Roman", serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {/* Logo / Icon representation */}
                    <div
                        style={{
                            width: '80px',
                            height: '80px',
                            background: 'black',
                            borderRadius: '20px', // Soft rounded corners like the favicon
                            marginBottom: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* Abstract shape inside */}
                        <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '50%' }} />
                    </div>

                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 900,
                            color: '#111',
                            letterSpacing: '-0.02em',
                            marginBottom: '20px',
                        }}
                    >
                        Iknowledge
                    </div>

                    <div
                        style={{
                            fontSize: 32,
                            color: '#666',
                            textAlign: 'center',
                            maxWidth: '800px',
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
