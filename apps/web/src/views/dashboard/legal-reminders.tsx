import { AlertTriangle, Clock, Euro, Calendar } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@payroll/ui/components/card/card";

export function LegalReminders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rappels légaux</CardTitle>
        <CardDescription>
          Points importants de la législation française
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Euro className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium">SMIC 2024</h4>
                <p className="text-sm text-muted-foreground">
                  Salaire minimum interprofessionnel de croissance fixé à
                  1398,69€ brut mensuel
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-medium">Durée légale</h4>
                <p className="text-sm text-muted-foreground">
                  35 heures par semaine, maximum 48h avec accord d'entreprise
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Calendar className="h-5 w-5 text-orange-600 mt-0.5" />
              <div>
                <h4 className="font-medium">Heures supplémentaires</h4>
                <p className="text-sm text-muted-foreground">
                  Majoration de 25% pour les 8 premières heures, 50% au-delà
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <h4 className="font-medium">Sanctions</h4>
                <p className="text-sm text-muted-foreground">
                  Non-respect du SMIC : amende de 1500€ par salarié concerné
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
