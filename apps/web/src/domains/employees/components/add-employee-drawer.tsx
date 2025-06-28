"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@payroll/ui/components/sheet/sheet";
import { Input } from "@payroll/ui/components/form/input/input";
import { Label } from "@payroll/ui/components/label/label";
import { Button } from "@payroll/ui/components/button/button";

const CONTRACT_TYPES = ["CDI", "CDD", "Interim", "Stage"];
const STATUS_TYPES = [
  { value: "active", label: "Actif" },
  { value: "inactive", label: "Inactif" },
  { value: "on_leave", label: "Congé" },
];

export function AddEmployeeDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="w-fit rounded-full" onClick={() => setOpen(true)}>
          Ajouter un employé
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-[600px] px-0 sm:max-w-[600px] bg-[#f8fafc] border-l flex flex-col h-full">
        <div className="flex-1 flex flex-col justify-center">
          <div className="px-8 pb-2 mb-8">
            <SheetHeader>
              <SheetTitle className="text-3xl font-semibold tracking-tight text-gray-900 text-center">Ajouter un employé</SheetTitle>
            </SheetHeader>
          </div>
          <form className="overflow-y-auto px-8 flex flex-col gap-0 bg-[#f8fafc]">
            <div className="divide-y divide-gray-200 border rounded-xl bg-white">
              <FormRow label="Prénom" htmlFor="firstName">
                <Input id="firstName" name="firstName" required autoComplete="given-name" className="bg-white" />
              </FormRow>
              <FormRow label="Nom" htmlFor="lastName">
                <Input id="lastName" name="lastName" required autoComplete="family-name" className="bg-white" />
              </FormRow>
              <FormRow label="Email" htmlFor="email">
                <Input id="email" name="email" type="email" required autoComplete="email" className="bg-white" />
              </FormRow>
              <FormRow label="Type de contrat" htmlFor="contractType">
                <select id="contractType" name="contractType" className="input border rounded-md w-full h-9 px-3 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition hover:border-primary/60">
                  {CONTRACT_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </FormRow>
              <FormRow label="Salaire brut (€)" htmlFor="salary">
                <Input id="salary" name="salary" type="number" step="0.01" min="0" required className="bg-white" />
              </FormRow>
              <FormRow label="Statut" htmlFor="status">
                <select id="status" name="status" className="input border rounded-md w-full h-9 px-3 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition hover:border-primary/60">
                  {STATUS_TYPES.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </FormRow>
            </div>
          </form>
        </div>
        <div className="sticky bottom-0 z-10 bg-white border-t px-8 py-4 flex justify-center gap-x-4">
          <SheetClose asChild>
            <Button type="button" variant="secondary" className="rounded-full px-8 py-3">
              Annuler
            </Button>
          </SheetClose>
          <Button type="submit" form="add-employee-form" className="rounded-full px-8 py-3">
            Ajouter
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function FormRow({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 items-center py-4 px-6">
      <Label htmlFor={htmlFor} className="col-span-5 text-[15px] font-medium text-gray-700">
        {label}
      </Label>
      <div className="col-span-7">{children}</div>
    </div>
  );
} 