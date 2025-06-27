import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@payroll/ui/components/card/card";
import { Button } from "@payroll/ui/components/button/button";

import { stats } from "./data";

export function QuickActions() {
  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle>Actions rapides</CardTitle>
        <CardDescription>
          Accédez rapidement aux fonctionnalités principales
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {stats.quickActions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full justify-start h-auto p-4"
            asChild
          >
            <a href={action.href}>
              <action.icon className="mr-3 h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">{action.title}</div>
                <div className="text-sm text-muted-foreground">
                  {action.description}
                </div>
              </div>
            </a>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
