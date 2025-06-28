import { Avatar, AvatarFallback } from "@payroll/ui/components/avatar/avatar";

export const BrandLogo = ({ activeTeam }: { activeTeam: { name: string } }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
        <Avatar>
          <AvatarFallback className="text-primary bg-[#E6F4FF] font-bold text-lg">
            {activeTeam.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="grid flex-1 text-left text-base leading-tight font-semibold">
        <span className="truncate">{activeTeam.name}</span>
      </div>
    </div>
  );
};
