// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'My Library',
      path: '/apps/invoice/list',
      children: [
        {
          title: 'My Library',
          path: '/apps/invoice/list'
        },
        {
          title: 'My Library',
          path: '/apps/invoice/preview'
        },
        {
          title: 'My Library',
          path: '/apps/invoice/edit'
        },
        {
          title: 'My Library',
          path: '/apps/invoice/add'
        }
      ]
    },
    {
      title: 'My history',
      children: [
        {
          title: 'My history',
          path: '/apps/user/list'
        },
        {
          title: 'My history'

          // children: [
          //   {
          //     title: 'Overview',
          //     path: '/apps/user/view/overview'
          //   },
          //   {
          //     title: 'Security',
          //     path: '/apps/user/view/security'
          //   },
          //   {
          //     title: 'Billing & Plans',
          //     path: '/apps/user/view/billing-plan'
          //   },
          //   {
          //     title: 'Notifications',
          //     path: '/apps/user/view/notification'
          //   },
          //   {
          //     title: 'Connection',
          //     path: '/apps/user/view/connection'
          //   }
          // ]
        }
      ]
    },
    {
      title: 'Recycle bin',
      children: [
        {
          title: 'Recycle bin',
          path: '/apps/roles'
        },
        {
          title: 'Recycle bin',
          path: '/apps/permissions'
        },
        {
          title: 'Recycle bin',
          path: '/apps/permissions'
        }
      ]
    },
    {
      title: 'Settings',
      children: [
        {
          title: 'Settings',
          path: '/pages/faq'
        },
        {
          title: 'Settings',
          path: '/pages/help-center'
        },
        {
          title: 'Settings',
          path: '/pages/pricing'
        }
      ]
    },
    {
      title: 'Notifications',
      children: [
        {
          title: 'Notifications',
          path: '/pages/faq'
        },
        {
          title: 'Notifications',
          path: '/pages/help-center'
        },
        {
          title: 'Notifications',
          path: '/pages/pricing'
        }
      ]
    }
  ]
}

export default navigation
