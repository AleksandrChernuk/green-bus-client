import MainSearch from "@/components/modules/main-search";
import { Container } from "@/components/shared/Container";
import { ResultList } from "./modules/ResultList";
import DateTabs from "./modules/DatePicker";
import DestopFilter from './modules/DesctopFilter';
import { Information } from "./modules/Information";
 
 export default async function SearchModule() {
 
   return (
     <section>
       <h1 className="sr-only">SearchPage</h1>
       <search className="pb-8 bg-background_card dark:bg-background_black_mode">
         <Container size="l" className="py-5 tablet:pt-8 ">
           <MainSearch />
         </Container>
       </search>

       <search className="bg-background_card dark:bg-background_black_mode">
         <Container size="l">
           <DateTabs />
         </Container>
       </search>

       <Container size="l">
         <div className="items-start justify-between my-5 tablet:flex gap-9 laptop:gap-12">
           <div className="hidden min-w-80 max-w-80 laptop:block">
             <DestopFilter />
           </div>
           <div className="w-full space-y-4">
             <Information />
             <ResultList />
           </div>
         </div>
       </Container>
     </section>
   );
 }
