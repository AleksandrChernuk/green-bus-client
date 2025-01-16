// import { CustomButton } from "@/components/shared/CustomButton";
// import { useSearchParams } from "next/navigation";

// type Props = {
//   price: number;
// };

// export const MobileDetailsFooter = ({ price }: Props) => {
//   const params = useSearchParams();
//   const adult = Number(params.get("adult") || 0);
//   const children = Number(params.get("children") || 0);
//   return (
//     <div className="flex items-center justify-between gap-2">
//       <div className="w-full text-center">
//         <div className="small_text text-text_seconddary_color">{`${adult + children} Пасажир`}</div>
//         <div className="main_text text-text-text_prymery_color">{`${price} грн`}</div>
//       </div>

//       <CustomButton variant={"primery"} className="w-full button_mobile">
//         Придбати
//       </CustomButton>
//     </div>
//   );
// };
