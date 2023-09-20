/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    nextConfig,
    webpack: (config, options) =>
    {
        config.module.rules.push({
            test: /\.pdf$/i,
            type: 'asset/source'
        })

        return config
    },
}
