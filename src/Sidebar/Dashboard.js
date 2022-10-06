import {
  Square3Stack3DIcon,
  CubeTransparentIcon,
  TableCellsIcon,
  LockOpenIcon,
  MapPinIcon,
  ShareIcon,
  SparklesIcon,
  ChatBubbleBottomCenterIcon,
  DocumentIcon,
  GiftTopIcon,
  ComputerDesktopIcon,
  CreditCardIcon,
  CubeIcon,
  DocumentChartBarIcon,
  DocumentMinusIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import Items from './Items'
import MainItems from './MainItems'
function Dashboard({ btn_hend }) {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://abdur-shobur.github.io/menu-json/data.json')
      .then((res) => res.json())
      .then((newData) => setData(newData))
  }, [data])
  const NavItems = [
    {
      id: 1,
      name: 'Dashboard',
      icon: Square3Stack3DIcon,
      subItems: ['Analytics', 'CRM', 'Ecommerce', 'Crypto', 'Projects', 'NFT'],
    },
    {
      id: 2,
      name: 'Apps',
      icon: CubeTransparentIcon,
      subItems: ['Analytics', 'CRM', 'Ecommerce', 'Crypto', 'Projects', 'NFT'],
    },
    {
      id: 3,
      name: 'Layout',
      icon: TableCellsIcon,
      subItems: ['Analytics', 'CRM', 'Ecommerce', 'Crypto', 'Projects', 'NFT'],
    },
    {
      id: 4,
      name: 'Authentication',
      icon: LockOpenIcon,
      subItems: ['Analytics', 'CRM', 'Ecommerce', 'Crypto', 'Projects', 'NFT'],
    },
    {
      id: 5,
      name: 'Maps',
      icon: MapPinIcon,
      subItems: ['Analytics', 'CRM', 'Ecommerce', 'Crypto', 'Projects', 'NFT'],
    },
    {
      id: 6,
      name: 'Multi Level',
      icon: ShareIcon,
      subItems: ['Analytics', 'CRM', 'Ecommerce', 'Crypto', 'Projects', 'NFT'],
    },
    {
      id: 7,
      name: 'Icons',
      icon: SparklesIcon,
      subItems: ['Analytics', 'CRM', 'Ecommerce', 'Crypto', 'Projects', 'NFT'],
    },
    {
      id: 8,
      name: 'Charts',
      icon: ChatBubbleBottomCenterIcon,
      subItems: ['Analytics', 'CRM', 'Ecommerce', 'Crypto', 'Projects', 'NFT'],
    },
    {
      id: 9,
      name: 'Tables',
      icon: TableCellsIcon,
      subItems: ['Analytics', 'CRM', 'Ecommerce', 'Crypto', 'Projects', 'NFT'],
    },
    {
      id: 10,
      name: 'Forms',
      icon: DocumentIcon,
      subItems: ['Analytics', 'CRM', 'Ecommerce', 'Crypto', 'Projects', 'NFT'],
    },
    {
      id: 11,
      name: 'Widgets',
      icon: GiftTopIcon,
      subItems: ['Analytics', 'CRM', 'Ecommerce', 'Crypto', 'Projects', 'NFT'],
    },
    {
      id: 12,
      name: 'Advance UI',
      icon: ComputerDesktopIcon,
      subItems: ['Analytics', 'CRM', 'Ecommerce', 'Crypto', 'Projects', 'NFT'],
    },
    {
      id: 13,
      name: 'Base UI',
      icon: CreditCardIcon,
      subItems: ['Analytics', 'CRM', 'Ecommerce', 'Crypto', 'Projects', 'NFT'],
    },
    {
      id: 14,
      name: 'COMPONENTS',
      icon: CubeIcon,
      subItems: ['Analytics', 'CRM', 'Ecommerce', 'Crypto', 'Projects', 'NFT'],
    },
    {
      id: 15,
      name: 'Landing',
      icon: DocumentChartBarIcon,
      subItems: ['Analytics', 'CRM', 'Ecommerce', 'Crypto', 'Projects', 'NFT'],
    },
    {
      id: 16,
      name: 'Pages',
      icon: DocumentMinusIcon,
      subItems: ['Analytics', 'CRM', 'Ecommerce', 'Crypto', 'Projects', 'NFT'],
    },
  ]
  return (
    <div className="relative ">
      <h1 className="center font-bold text-3xl text-white mb-2">Any_lic</h1>
      <p className="mb-1">Menu</p>
      <button className="absolute right-0 top-0 hover:text-red-500">
        <XMarkIcon className="w-10 h-10" onClick={() => btn_hend(false)} />
      </button>
      <hr className="mb-3" />
      <Accordion allowZeroExpanded={true}>
        {NavItems.map((e, id) => {
          return (
            <AccordionItem key={id}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <MainItems allitems={e} />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Items allitems={e} />
              </AccordionItemPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default Dashboard
