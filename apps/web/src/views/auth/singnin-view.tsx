import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@payroll/ui/components/card/card";
import { Input } from "@payroll/ui/components/input/input";
import { Button } from "@payroll/ui/components/button/button";
import { Label } from "@payroll/ui/components/label/label";
import { Separator } from "@payroll/ui/components/separator/separator";

export function SignInView() {
  return (
    <div className="min-h-svh flex items-center justify-center bg-muted px-4 py-12">
      <Card className="w-full max-w-md shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-center font-bold tracking-tight">
            Connexion à votre espace
          </CardTitle>
          <CardDescription className="text-center">
            Accédez à l'outil de validation de paie conforme à la législation
            française.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Adresse e-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </div>
            <Button type="submit" className="w-full mt-2">
              Se connecter
            </Button>
          </form>
        </CardContent>
        <Separator className="my-2" />
        <CardFooter className="flex flex-col gap-2 text-center">
          <span className="text-xs text-muted-foreground">
            En accédant, vous acceptez les{" "}
            <a href="#" className="underline hover:text-primary">
              conditions d'utilisation
            </a>
            .
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}
