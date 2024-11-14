import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThumbsUp } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="items-center justify-center">
          <ThumbsUp className="size-12" />
        </CardHeader>

        <CardContent className="text-balance text-center">
          <CardTitle>Gostou deste site?</CardTitle>
          <CardDescription>
            Entre em contato comigo e vamos tirar seus planos do papel hoje!
          </CardDescription>
        </CardContent>

        <CardFooter className="items-center justify-center">
          <Button
            className="bg-green-600 hover:bg-green-700"
            aria-label="botão para chamada no whatsapp"
          >
            <a
              href="https://wa.me/5528999763920"
              target="_blank"
              rel="noreferrer noopener"
              className="h-full w-full"
            >
              Me chame no Whatsapp
            </a>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
