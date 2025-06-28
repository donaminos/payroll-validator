"use client";

import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { toast } from "@payroll/ui/components/sonner/sonner";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@payroll/ui/components/sheet/sheet";
import { Button } from "@payroll/ui/components/button/button";
import { EmployeeForm } from "./employee-form";
import { createEmployee } from "../actions";

export function AddEmployeeDrawer() {
  const [open, setOpen] = useState(false);
  const formId = "add-employee-form";

  const handleFormAction = async (formData: FormData) => {
    const result = await createEmployee(formData);
    if (result.success) {
      setOpen(false);
      toast.success("Employé créé avec succès");
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="w-fit rounded-full" onClick={() => setOpen(true)}>
          Ajouter un employé
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-[600px] px-0 sm:max-w-[600px] bg-[#f8fafc] border-l flex flex-col h-full"
      >
        <div className="flex-1 flex flex-col justify-center">
          <div className="px-8 pb-2 mb-12">
            <SheetHeader>
              <SheetTitle className="text-3xl font-semibold tracking-tight text-gray-900 text-center">
                Ajouter un employé
              </SheetTitle>
            </SheetHeader>
          </div>
          <ErrorBoundary
            fallback={
              <p className="text-red-500">
                Une erreur est survenue lors de la création de l&apos;employé
              </p>
            }
          >
            <EmployeeForm formAction={handleFormAction} formId={formId} />
          </ErrorBoundary>
        </div>
        <div className="sticky bottom-0 z-10 bg-white border-t px-8 py-4 flex justify-center gap-x-4">
          <SheetClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="rounded-full px-8 py-3"
            >
              Annuler
            </Button>
          </SheetClose>
          <Button
            type="submit"
            form={formId}
            className="rounded-full px-8 py-3"
          >
            Ajouter
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
