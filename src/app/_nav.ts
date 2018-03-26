import { LoggedInAuthGuard } from "./authguardservices";

export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Profile',
    url: '/profile/company-welcome',
    icon: 'icon-drop',
    canActivate: [LoggedInAuthGuard]
    
  },
  {
    name: 'Assets',
    url: '/assets',
    icon: 'icon-pencil',
    canActivate: [LoggedInAuthGuard]
  },
  {
    name: 'Policy Corner',
    url: '/base',
    icon: 'icon-puzzle',
    canActivate: [LoggedInAuthGuard]
  },
  {
    name: 'Open Items',
    url: '/buttons',
    icon: 'icon-cursor',
    canActivate: [LoggedInAuthGuard]
  },
  {

    name: 'Data Exchange',
    url: '/buttons',
    icon: 'icon-cursor',
    canActivate: [LoggedInAuthGuard]
  },
  {
    name: 'Contact Agent',
    url: '/notifications',
    icon: 'icon-bell',
    canActivate: [LoggedInAuthGuard]
  },
  {
    name: 'Messages',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'danger',
      text: '7'
    }
  }
];
