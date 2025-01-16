import { Button } from '@/components/ui/button';
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Button size={"sm"} variant={"default"}>
        <Link href="/" replace>
          Return Home
        </Link>
      </Button>
    </div>
  );
}
