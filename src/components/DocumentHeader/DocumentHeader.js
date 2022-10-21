import Head from 'next/head';
import React from 'react';

function DocumentHeader({
    title = 'Property Bhaijaan',
    image = '',
    shortDesc = 'the must trustered property advisor platform in web',
    keywords = "Property Bhaijaan, Property bhai ,where to buy  a property, how to buy"

}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon.png" />
                <meta name="theme-color" content="#fff" />
                <meta name="description" content={shortDesc} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content="Property Bhaijaan" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="" />
                <meta property="og:image" content={image} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={shortDesc} />
                <meta name="twitter:image" content={image} />
                <meta name="twitter:card" content={shortDesc} />
            </Head>
        </>
    );
}

export default DocumentHeader;
