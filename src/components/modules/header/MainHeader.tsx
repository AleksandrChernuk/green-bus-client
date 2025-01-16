import { Container } from '@/components/shared/Container';
import SelectLocale from '@/components/shared/LanguageChanger';
import Logo from '@/components/shared/Logo'
import { ProfileLink } from '@/components/shared/ProfileLink';
import { Support } from '@/components/shared/Support';
import { SwitchTheme } from '@/components/shared/SwitchTheme';
import { MobileMenu } from '../mobile-menu/MobileMenu';
 
export default async function MainHeader({ locale }: {locale:string}) {
   return (
     <header className="bg-white border-b-2 dark:bg-dark_mode_main1">
       <Container size="l" className="flex items-center justify-between py-4">
         <Logo />
         {/* <div className="flex items-center gap-4">
           <SelectLocale />
           <SwitchTheme />
         </div> */}
         <nav>
           <ul className="items-center hidden tablet:flex tablet:gap-6 laptop:gap-8">
             <li className="laptop:hidden">
               <Support />
             </li>
             <li>
               <SelectLocale />
             </li>
             <li>
               <SwitchTheme />
             </li>

             <li className="hidden laptop:block">
               <Support />
             </li>

             <li>
               <ProfileLink locale={locale} />
             </li>
           </ul>
         </nav>
         <MobileMenu />
       </Container>
     </header>
   );
}