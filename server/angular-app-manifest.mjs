
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/air-medics/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/air-medics"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/services"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/mission"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/contact"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/solutions"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/partners"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/program"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/gallery"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/social"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/games"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/blog"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/who"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/contests"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/message"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/network"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/product"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/weather"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/matters"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/puppet"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/realty"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/video"
  },
  {
    "renderMode": 2,
    "route": "/air-medics/song"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 445, hash: 'aecb89da241161aeebcef7775e36ebc25610c11216859e0c056aaf643edaa618', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 958, hash: 'e4812b481f7852fc9b64393b239708e8290b2faa74d19d656e1196f194b2fab2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14628, hash: '7e5aed29848a7658b7f5d891fa2b895c9d842b0cb8ce6d0e5b928a8f8b14d146', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 10361, hash: '83e60b859d9e90bafa3f5025c55ffa75c63c9b1b91eff1f63f9c9027952860f7', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'social/index.html': {size: 7025, hash: '038b12656c4c58e35622b04ab9308853550f9b803e25a62fbe9541dd76d83693', text: () => import('./assets-chunks/social_index_html.mjs').then(m => m.default)},
    'program/index.html': {size: 7027, hash: 'f34bd958a5cf4c25379753eb3e30e62be00566b025aeb1064fe2edd4d2f3ffce', text: () => import('./assets-chunks/program_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 7021, hash: 'e045c648c9df9d3251d546407fb83d6fc032452f2833fd18f9670112a7c18642', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'contests/index.html': {size: 7029, hash: '21284482e4197c8fb38f0596fe4d43fb1559205fbc8498e98c810b27239c2762', text: () => import('./assets-chunks/contests_index_html.mjs').then(m => m.default)},
    'weather/index.html': {size: 7026, hash: '1f33502f175ea22f94664bbca8cf511430de1d0d44279cfc0f014eef357ae027', text: () => import('./assets-chunks/weather_index_html.mjs').then(m => m.default)},
    'network/index.html': {size: 7026, hash: 'c882272c617f3c1ed8c7d74e39a68df933b4f9c87c7d7d47cd0b5a12f160bb9d', text: () => import('./assets-chunks/network_index_html.mjs').then(m => m.default)},
    'mission/index.html': {size: 11676, hash: 'c732ced177dcff521713e5c404a1f7269399b8625b146c90ff74452f2f274727', text: () => import('./assets-chunks/mission_index_html.mjs').then(m => m.default)},
    'video/index.html': {size: 7023, hash: '2b10af5317f9b02b1c2b3269729f27ed7cbc5bcdf5aac0a12b6b5b979c1b5f2b', text: () => import('./assets-chunks/video_index_html.mjs').then(m => m.default)},
    'puppet/index.html': {size: 7025, hash: '5be995d5775925cc4d6f0043392e539549b81f2fc1b092c29264ad12046f9de8', text: () => import('./assets-chunks/puppet_index_html.mjs').then(m => m.default)},
    'games/index.html': {size: 7023, hash: 'd5eefb6654c4827e0cd9bffd5e3f6d71d1d2a1150342907e6db2852933108f29', text: () => import('./assets-chunks/games_index_html.mjs').then(m => m.default)},
    'partners/index.html': {size: 9117, hash: '89f79940e4f518bac39aeea7347306e66de2c0e9599b021386ed2279c6d7675f', text: () => import('./assets-chunks/partners_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 11346, hash: '9a20807d08f2adee1fa5e4d8aa537fd7d800bd4fb41673f27246db5a0d3300fd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'matters/index.html': {size: 7026, hash: '054364302ee3b106c98d9e6b712a8b1b856d3688d4015a83a87aa14b9eee6eba', text: () => import('./assets-chunks/matters_index_html.mjs').then(m => m.default)},
    'message/index.html': {size: 7027, hash: '35fb9f0c0fa852a19e5cdf7a3f33d3ef6e3e68060dbab9d0fea73f4b20aee207', text: () => import('./assets-chunks/message_index_html.mjs').then(m => m.default)},
    'song/index.html': {size: 7021, hash: 'beb4e66f0cf5760c885d420b78b2dbd72341b3e68486d29f4c026f2d6d1ff4ef', text: () => import('./assets-chunks/song_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 9501, hash: 'dac1d19e1fab68c32ad7bc79aed4d97b0a438ceaea82d63869c2912bc853609b', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'solutions/index.html': {size: 10721, hash: 'e575e40d2f35d6a1b80d6b1a952e03af21106edb8d283dea3633b474e15f2e9f', text: () => import('./assets-chunks/solutions_index_html.mjs').then(m => m.default)},
    'product/index.html': {size: 7026, hash: '6c3647dcf8089fa42a857ab0108df8766acab2910130994b01b9b151e281ee26', text: () => import('./assets-chunks/product_index_html.mjs').then(m => m.default)},
    'realty/index.html': {size: 7025, hash: '8d9412195d528e1aab15a349da55e8b0960a456103cb4142c47cd7d44e14b254', text: () => import('./assets-chunks/realty_index_html.mjs').then(m => m.default)},
    'who/index.html': {size: 20620, hash: '68c71fd26d82ea675927d0dfd211c3db9c8b51fdb898c16504018f2e2be42660', text: () => import('./assets-chunks/who_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
