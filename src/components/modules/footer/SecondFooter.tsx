import Image from 'next/image';
import secondFooter from './images/second-footer.png';

export default async function SecondFooter() {
  return (
    <footer role='footer' className='h-auto w-full bg-grayy dark:bg-dark_mode_main1'>
      <Image
        src={secondFooter}
        priority={true}
        alt='peaple wait bus'
        placeholder='empty'
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </footer>
  );
}
