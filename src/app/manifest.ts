import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VemPlanejar App',
    short_name: 'VemPlanejar',
    description:
      'Vem Planejar a sua vida financeira, e tenha controle do seu dinheiro.',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
