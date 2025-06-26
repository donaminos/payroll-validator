import {
  Home,
  User2,
  FileText,
  CreditCard,
  DollarSign,
  HeartHandshake,
  Check,
} from "lucide-react";

export const data = {
  profiles: [
    {
      name: "Payroll",
      plan: "Admin",
    },
    {
      name: "Payroll",
      plan: "GP",
    },
    {
      name: "Payroll",
      plan: "HR",
    },
  ],
  navigation: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      title: "Payroll",
      url: "#",
      isActive: true,
      items: [
        {
          title: "Employees",
          url: "/employees",
          icon: User2,
        },
        {
          title: "Benefits",
          url: "#",
          icon: HeartHandshake,
        },
        {
          title: "Payslips",
          url: "#",
          icon: FileText,
        },
      ],
    },
    {
      title: "Billing",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Invoices",
          url: "#",
          icon: DollarSign,
        },
        {
          title: "Payments",
          url: "#",
          icon: CreditCard,
        },
        {
          title: "Validation",
          url: "#",
          icon: Check,
        },
      ],
    },
  ],
};
