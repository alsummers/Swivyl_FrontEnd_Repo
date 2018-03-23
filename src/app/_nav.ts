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
    icon: 'icon-pencil'
  },
  {
    name: 'Policy Corner',
    url: '/base',
    icon: 'icon-puzzle'
  },
  {
    name: 'Open Items',
    url: '/buttons',
    icon: 'icon-cursor'
  },
  {

    name: 'Data Exchange',
    url: '/buttons',
    icon: 'icon-cursor'
  },
  {
    name: 'Contact Agent',
    url: '/notifications',
    icon: 'icon-bell'
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
