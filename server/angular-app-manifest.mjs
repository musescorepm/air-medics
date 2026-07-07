
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/services"
  },
  {
    "renderMode": 2,
    "route": "/mission"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/solutions"
  },
  {
    "renderMode": 2,
    "route": "/partners"
  },
  {
    "renderMode": 2,
    "route": "/program"
  },
  {
    "renderMode": 2,
    "route": "/gallery"
  },
  {
    "renderMode": 2,
    "route": "/social"
  },
  {
    "renderMode": 2,
    "route": "/games"
  },
  {
    "renderMode": 2,
    "route": "/blog"
  },
  {
    "renderMode": 2,
    "route": "/who"
  },
  {
    "renderMode": 2,
    "route": "/contests"
  },
  {
    "renderMode": 2,
    "route": "/message"
  },
  {
    "renderMode": 2,
    "route": "/network"
  },
  {
    "renderMode": 2,
    "route": "/product"
  },
  {
    "renderMode": 2,
    "route": "/weather"
  },
  {
    "renderMode": 2,
    "route": "/matters"
  },
  {
    "renderMode": 2,
    "route": "/puppet"
  },
  {
    "renderMode": 2,
    "route": "/realty"
  },
  {
    "renderMode": 2,
    "route": "/video"
  },
  {
    "renderMode": 2,
    "route": "/song"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 434, hash: '6ae30b80bc23d780de22617ae4ba10c1c0b8df7c30692da1de28ed33e0e0a3fa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 947, hash: 'c34395a09193d744b75f1168651a3647f9051589e42ac34c684588304bbf8980', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14364, hash: 'cce8fafe8e2aa4d11abfd3b69399753cdca19b95ef9f6908a858ec5927aa89b2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'mission/index.html': {size: 11423, hash: '315426cf7b9ae3d04c0ec8d833b00a61af7997b7957580e1860294c16218d4f9', text: () => import('./assets-chunks/mission_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 10108, hash: 'a8ed080b290b5dae8d8d97a3b499002d3610678c2afeb3b5c5585657cf46485e', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'program/index.html': {size: 6774, hash: '93875bd26f8abce9f2db7d55427987441ca3b581393f6ef27c70fef2f9e9b72b', text: () => import('./assets-chunks/program_index_html.mjs').then(m => m.default)},
    'contests/index.html': {size: 6776, hash: '3e150c8532ad1482dcc7333e39f1287fa022835df6bcbeebb8b664c4c42ad6be', text: () => import('./assets-chunks/contests_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 6768, hash: '9d94d67a28f318bc8c752c8326ea106cf56153700a800b6cbb1939c296e32b9d', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'social/index.html': {size: 6772, hash: '2f9768da8a7bbf950252045be3747e91b1450ef7513efe5799c5a1a53d9c8f27', text: () => import('./assets-chunks/social_index_html.mjs').then(m => m.default)},
    'network/index.html': {size: 6773, hash: '870b7355dfeb02cd67b6abedcb9b0e1e8e9bc54b346bac33f49df98fd99980b8', text: () => import('./assets-chunks/network_index_html.mjs').then(m => m.default)},
    'puppet/index.html': {size: 6772, hash: 'be26765c10546dd0cbb8244f328663dca47af7c1fc54b65e7c852dd4123301a6', text: () => import('./assets-chunks/puppet_index_html.mjs').then(m => m.default)},
    'weather/index.html': {size: 6773, hash: 'aabd46f5ddf9dcd6c588b3ff468539c774f8942180a7c1f9c412a532fc93722a', text: () => import('./assets-chunks/weather_index_html.mjs').then(m => m.default)},
    'video/index.html': {size: 6770, hash: '561ec59b38f58813b7f79a47aad9dd0bdc6b20a4a8403c70a55631ec9a4cafc0', text: () => import('./assets-chunks/video_index_html.mjs').then(m => m.default)},
    'partners/index.html': {size: 8864, hash: '8bc3926a5b40920c178d1e4264c2c8ac96646d074f1b90208c2eb59cfc6f37ed', text: () => import('./assets-chunks/partners_index_html.mjs').then(m => m.default)},
    'games/index.html': {size: 6770, hash: 'c02be6d2828f8330b8d2c6bcc77405b95115f66e8e301329ccd5186a81b87024', text: () => import('./assets-chunks/games_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 11093, hash: '72a42100032f02eb7db1820eafb46c8b0261b17285cfe0d013fec84015631e7d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'message/index.html': {size: 6774, hash: '9700edd9939eef6816bdd61ae9b43184aec48582d1c2434b16987f3a78a73dfd', text: () => import('./assets-chunks/message_index_html.mjs').then(m => m.default)},
    'matters/index.html': {size: 6773, hash: '4396a4072a390434434ac4e8b0e70cdce3edcf2be4737a7f05f5e60dea950e49', text: () => import('./assets-chunks/matters_index_html.mjs').then(m => m.default)},
    'song/index.html': {size: 6768, hash: '48b8e7bcbc7fd7f6557439147888ad1937b251f845bbad2040d763d1d5ac1dd2', text: () => import('./assets-chunks/song_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 9248, hash: 'ef2c39441048004ae3a3ed5fdd14defae81a477b2ad24c1ee0a2d6715b807898', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'product/index.html': {size: 6773, hash: '94c3dff2323785e15f7b5928d050e99a436d9017cf8aa99ead79c8cd37cd70ae', text: () => import('./assets-chunks/product_index_html.mjs').then(m => m.default)},
    'realty/index.html': {size: 6772, hash: '4af372a7953f814488d900eddee5fa16c83805d3b630239089578e4c4238a5dc', text: () => import('./assets-chunks/realty_index_html.mjs').then(m => m.default)},
    'solutions/index.html': {size: 10468, hash: 'f8cd16a8906dc93696bf59b60a3da92e7a2f9749644c36be2802e26cc62fa45d', text: () => import('./assets-chunks/solutions_index_html.mjs').then(m => m.default)},
    'who/index.html': {size: 20367, hash: '468b98382d82e1bfe20ee79243bf90946148748a672660d07b0d4dd6cfe5db2f', text: () => import('./assets-chunks/who_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
