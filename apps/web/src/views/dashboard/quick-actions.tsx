import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@payroll/ui/components/card/card";
import { Button } from "@payroll/ui/components/button/button";

import { stats } from "./data";
import Link from "next/link";

type Action = (typeof stats.quickActions)[0];

const Action = ({ action }: { action: Action }) => {
  return (
    <Button
      variant="outline"
      className="w-full justify-start h-auto p-4"
      asChild
    >
      <Link href={action.href}>
        <action.icon className="mr-3 h-5 w-5" />
        <div className="text-wrap">
          <div className="font-medium">{action.title}</div>
          <div className="text-sm text-muted-foreground">
            {action.description}
          </div>
        </div>
      </Link>
    </Button>
  );
};

export function QuickActions() {
  return (
    <Card className="overflow-hidden h-fit">
      <CardHeader>
        <CardTitle>Actions rapides</CardTitle>
        <CardDescription>
          Accédez rapidement aux fonctionnalités principales
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {stats.quickActions.map((action, index) => (
          <Action key={index} action={action} />
        ))}
      </CardContent>
    </Card>
  );
}
