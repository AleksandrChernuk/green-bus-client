"use client";

 import { useCallback, useState } from "react";

 export const usePassengers = () => {
   const [open, setOpen] = useState<boolean>(false);

   const handleBlur = useCallback((event: React.FocusEvent<HTMLDivElement>) => {
     if (!event.currentTarget.contains(event.relatedTarget)) {
       setOpen(false);
     }
   }, []);

   const toggleOpen = useCallback(() => {
     setOpen((prev) => !prev);
   }, []);

   return {
     toggleOpen,
     handleBlur,
     open,
   };
 };
