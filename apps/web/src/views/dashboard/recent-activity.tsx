import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@payroll/ui/components/card/card";
import { Badge } from "@payroll/ui/components/badge/badge";
import { Button } from "@payroll/ui/components/button/button";
import { FileText, CheckCircle, Clock, Download } from "lucide-react";

type RecentUpload = {
  id: string;
  name: string;
  records: number;
  date: string;
  status: string;
};

type RecentActivityProps = {
  recentUploads: Array<RecentUpload>;
};

export function RecentActivity({ recentUploads }: RecentActivityProps) {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Activité récente</CardTitle>
        <CardDescription>Derniers fichiers importés et validés</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentUploads.map((upload) => (
            <div key={upload.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {upload.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {upload.records} enregistrements •{" "}
                    {new Date(upload.date).toLocaleDateString("fr-FR")}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={
                    upload.status === "validated" ? "default" : "secondary"
                  }
                  className="flex items-center gap-1"
                >
                  {upload.status === "validated" ? (
                    <>
                      <CheckCircle className="h-3 w-3" />
                      Validé
                    </>
                  ) : (
                    <>
                      <Clock className="h-3 w-3" />
                      En attente
                    </>
                  )}
                </Badge>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
