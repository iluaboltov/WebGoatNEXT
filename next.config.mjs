import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'fr', 'nl', 'ge'],
        defaultLocale: 'en',
    },
};

export default withNextIntl(nextConfig);
