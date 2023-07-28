export interface IMenuItems {
   title: string;
   url: string;
   submenu?:IMenuItems[]
}


export const menuItems:IMenuItems[] = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Services',
      url: '/services',
      submenu:[
        {
          title: 'web design',
          url: 'web-design',
        },
        {
          title: 'web development',
          url: 'web-dev',
          submenu: [
            {
              title: 'NodeJS',
              url: 'node',
            },
            {
              title: 'PHP',
              url: 'php',
            },
          ],
    
        },
        {
          title: 'SEO',
          url: 'seo',
        },
      ],
    },
    {
      title: 'About',
      url: '/about',
      submenu: [
        {
          title: 'NodeJS',
          url: 'node',
        },
        {
          title: 'PHP',
          url: 'php',
        },
      ],
    },
  ];