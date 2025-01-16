import Link from "next/link";
import { QuestionsMobileList } from "./QuestionsMobileList";
import { QuestionsLaptopList } from "./QuestionsLaptopList";
import { QuestionsTabletList } from "./QuestionsTabletList";
 import { Container } from "@/components/shared/Container";
import initTranslations from "@/app/i18n";
import { Button } from "@/components/ui/button";

export default async function  Questions ({ locale }: { locale: string })  {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <section className="py-6 bg-background_card laptop:py-8 dark:bg-dark_mode_main1">
      <Container size="m">
        <h3 className="mb-4 text-white h3 laptop:h1 laptop:mb-8 dark:text-garyy">
          {t("questions_title")}
        </h3>

        <QuestionsMobileList />
        <QuestionsTabletList />
        <QuestionsLaptopList />

        <div className="text-left">
          <Link href={"/faq"}>
            <Button
              variant={"link"}
              className="h6 text-black bg-primary_2 focus:bg-light_primary hover:bg-light_primary disabled:bg-primary_2 disabled:text-primary_1 min-w-[159px] px-6 tablet:py-[14px]"
            >
              {t("questions_button")}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
