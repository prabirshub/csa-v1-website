import { FooterLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

type ColumnProps = {
  title: string
  links: Array<string>
}

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className='footer_column'>
    <h4 className='font-semibold'>{title}</h4>
    <ul className='flex flex-col gap-2 font-normal'>
      {links.map((link) => (
        <Link href='/' key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
)
const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className='flex flex-col gap-12 w-full'>
        <div className='flex items-start flex-col'>
          <Link href='/'>
            <Image
              src='/main-logo-black.svg'
              alt='black main logo'
              width={125}
              height={33}
              className='md:h-9 md:w-40'
            />
          </Link>
          <p className='text-start text-sm font-normal mt-4 max-w-xs'>
            Confident Speakers Academy is a public speaking training platform
            that helps people overcome their fear of public speaking.
          </p>
        </div>
        <div className='flex flex-wrap gap-12'>
          <FooterColumn
            title={FooterLinks[0].title}
            links={FooterLinks[0].links}
          />
          <FooterColumn
            title={FooterLinks[1].title}
            links={FooterLinks[1].links}
          />
          <div className='flex-1 flex flex-col gap-4'>
            <FooterColumn
              title={FooterLinks[2].title}
              links={FooterLinks[2].links}
            />
          </div>

          <FooterColumn
            title={FooterLinks[3].title}
            links={FooterLinks[3].links}
          />
          <div className='flex-1 flex flex-col gap-4'>
            <FooterColumn
              title={FooterLinks[4].title}
              links={FooterLinks[4].links}
            />
            <FooterColumn
              title={FooterLinks[5].title}
              links={FooterLinks[5].links}
            />
          </div>
          <FooterColumn
            title={FooterLinks[6].title}
            links={FooterLinks[6].links}
          />
        </div>
      </div>
      <div className='flexBetween footer_copyright'>
        <p>@ 2023 Confident Speakers Academy. All rights reserved</p>
        <p className='text-gray'>
          Designed & Developed by
          <Link href='https://fivexfast.com/'>
            <span className='text-black font-semibold'> fivexfast</span>{' '}
          </Link>
        </p>
      </div>
    </footer>
  )
}
export default Footer
