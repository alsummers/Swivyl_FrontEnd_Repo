import { LoggedInAuthGuard } from "./authguardservices";

export const navigation = [
  {
    CanActivate: [LoggedInAuthGuard],
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Profile',
    url: '/profile/company-welcome',
    icon: 'icon-drop',
    CanActivate: [LoggedInAuthGuard]
    
  },
  {
    name: 'Assets',
    url: '/assets',
    icon: 'icon-pencil',
    canActivate: [LoggedInAuthGuard]
  },
  {
    name: 'Policy Corner',
    url: '/policy-corner',
    icon: 'icon-puzzle',
    canActivate: [LoggedInAuthGuard]
  },
  {
    name: 'Open Items',
    url: '/open-items',
    icon: 'icon-cursor',
    canActivate: [LoggedInAuthGuard]
  },
  {

    name: 'Data Exchange',
    url: '/data-exchange',
    icon: 'icon-cursor',
    canActivate: [LoggedInAuthGuard]
  },
  {
    name: 'Contact Agent',
    url: '/contact-agent',
    icon: 'icon-bell',
    canActivate: [LoggedInAuthGuard]
  },
  {
    name: 'Messages',
    url: '/messages',
    icon: 'icon-calculator',
    badge: {
      variant: 'danger',
      text: null
    }
  }
];
