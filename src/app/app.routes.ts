import { Routes } from '@angular/router';

import { HomeComponents } from './pages/home/home.components';

import { ServicesComponents } from './pages/services/services.components';

import { ContactComponents } from './pages/contact/contact.components';

import { MissionComponents } from './pages/about/mission.components';

import { Solutions } from './pages/about/solutions';
import { Partners } from './pages/about/partners';
import { Gallery } from './pages/about/gallery';
import { Program } from './pages/about/program';
import { Social } from './pages/about/social';
import { Games } from './pages/about/games';
import { Blog } from './pages/about/blog';
import { Who } from './pages/about/who';

import { Contests } from './pages/videos/contests';
import { Message } from './pages/videos/message';
import { Network } from './pages/videos/network';
import { Product } from './pages/videos/product';
import { Weather } from './pages/videos/weather';
import { Puppet } from './pages/videos/puppet';
import { Realty } from './pages/videos/realty';
import { Video } from './pages/videos/video';
import { Song } from './pages/videos/song';


import { Matters } from './pages/involvement/matters';

export const routes: Routes = [
  { path: 'services', component: ServicesComponents },
  { path: 'mission', component: MissionComponents },
  { path: 'contact', component: ContactComponents },
  { path: 'solutions', component: Solutions },
  { path: 'partners', component: Partners },
  { path: 'program', component: Program },
  { path: 'gallery', component: Gallery },
  { path: '', component: HomeComponents },
  { path: 'social', component: Social },
  { path: 'games', component: Games },
  { path: 'blog', component: Blog },
  { path: 'who', component: Who },

  { path: 'contests', component: Contests },
  { path: 'message', component: Message },
  { path: 'network', component: Network },
  { path: 'product', component: Product },
  { path: 'weather', component: Weather },
  { path: 'matters', component: Matters },
  { path: 'puppet', component: Puppet },
  { path: 'realty', component: Realty },
  { path: 'video', component: Video },
  { path: 'song', component: Song }

];
