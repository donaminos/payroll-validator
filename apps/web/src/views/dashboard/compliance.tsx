import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@payroll/ui/components/card/card";

export function Compliance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vue d'ensemble de la conformité</CardTitle>
        <CardDescription>
          Résumé des validations selon la législation française
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">SMIC 2024</span>
              <span className="text-sm text-muted-foreground">1398,69€</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: "98.5%" }}
              ></div>
            </div>
            <p className="text-xs text-muted-foreground">98,5% de conformité</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Heures légales</span>
              <span className="text-sm text-muted-foreground">35h/semaine</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-yellow-500 h-2 rounded-full"
                style={{ width: "92%" }}
              ></div>
            </div>
            <p className="text-xs text-muted-foreground">92% de conformité</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                Heures supplémentaires
              </span>
              <span className="text-sm text-muted-foreground">
                Max 48h/semaine
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
            <p className="text-xs text-muted-foreground">85% de conformité</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
