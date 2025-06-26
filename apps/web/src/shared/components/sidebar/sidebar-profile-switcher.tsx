import { ProfileSwitcher } from "@payroll/ui/composites/profile-switcher";

const profiles = [
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
];

export function SidebarProfileSwitcher() {
  return <ProfileSwitcher profiles={profiles} />;
}
