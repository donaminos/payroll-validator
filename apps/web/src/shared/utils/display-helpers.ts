export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  }).format(amount);
};

export const getDaysUntilText = (days: number) => {
  if (days === 0) return "Aujourd'hui";
  if (days === 1) return "Demain";
  if (days < 7) return `Dans ${days} jours`;
  if (days < 30) return `Dans ${Math.floor(days / 7)} semaines`;
  return `Dans ${Math.floor(days / 30)} mois`;
};
