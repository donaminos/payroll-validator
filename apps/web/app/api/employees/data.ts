/**
 * Employee data for French payroll validation system
 * Contains 1000 sample employee records with realistic French names and payroll data
 */

export interface Employee {
  id: string;
  slug: string; // UUID for secure referencing without exposing database ID
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  hireDate: string;
  contractType: "CDI" | "CDD" | "Interim" | "Stage";
  salary: number;
  weeklyHours: number;
  status: "active" | "inactive" | "on_leave";
  managerId?: string;
  employeeNumber: string;
  socialSecurityNumber: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  lastUpdated: string;
}

const DEPARTMENTS = [
  "Ressources Humaines",
  "Comptabilité",
  "Informatique",
  "Marketing",
  "Ventes",
  "Production",
  "Logistique",
  "Qualité",
  "Recherche & Développement",
  "Service Client",
  "Juridique",
  "Finance",
  "Communication",
  "Maintenance",
  "Sécurité",
] as const;

const POSITIONS = [
  "Directeur Général",
  "Directeur RH",
  "Responsable Comptabilité",
  "Développeur Full Stack",
  "Chef de Projet",
  "Commercial",
  "Responsable Marketing",
  "Ingénieur Production",
  "Responsable Qualité",
  "Juriste",
  "Contrôleur de Gestion",
  "Responsable Communication",
  "Technicien Maintenance",
  "Agent de Sécurité",
  "Assistant RH",
  "Comptable",
  "Développeur Frontend",
  "Développeur Backend",
  "Chef d'Équipe",
  "Vendeur",
  "Chargé de Communication",
  "Opérateur Production",
  "Contrôleur Qualité",
  "Assistant Juridique",
  "Analyste Financier",
  "Chargé de Marketing",
  "Électricien",
  "Garde",
  "Stagiaire RH",
  "Stagiaire Comptabilité",
  "Stagiaire Informatique",
] as const;

const CITIES = [
  { city: "Paris", postalCode: "75001" },
  { city: "Lyon", postalCode: "69001" },
  { city: "Marseille", postalCode: "13001" },
  { city: "Toulouse", postalCode: "31000" },
  { city: "Nice", postalCode: "06000" },
  { city: "Nantes", postalCode: "44000" },
  { city: "Strasbourg", postalCode: "67000" },
  { city: "Montpellier", postalCode: "34000" },
  { city: "Bordeaux", postalCode: "33000" },
  { city: "Lille", postalCode: "59000" },
  { city: "Rennes", postalCode: "35000" },
  { city: "Reims", postalCode: "51100" },
  { city: "Le Havre", postalCode: "76600" },
  { city: "Saint-Étienne", postalCode: "42000" },
  { city: "Toulon", postalCode: "83000" },
  { city: "Angers", postalCode: "49000" },
  { city: "Grenoble", postalCode: "38000" },
  { city: "Dijon", postalCode: "21000" },
  { city: "Nîmes", postalCode: "30000" },
  { city: "Saint-Denis", postalCode: "93200" },
] as const;

const FIRST_NAMES = [
  "Jean",
  "Pierre",
  "Michel",
  "André",
  "Philippe",
  "Claude",
  "Jacques",
  "François",
  "Daniel",
  "Robert",
  "Marie",
  "Sophie",
  "Isabelle",
  "Nathalie",
  "Catherine",
  "Françoise",
  "Monique",
  "Christine",
  "Martine",
  "Brigitte",
  "Thomas",
  "Nicolas",
  "David",
  "Christophe",
  "Stéphane",
  "Laurent",
  "Eric",
  "Olivier",
  "Sébastien",
  "Vincent",
  "Julie",
  "Céline",
  "Sandrine",
  "Valérie",
  "Caroline",
  "Aurélie",
  "Delphine",
  "Émilie",
  "Audrey",
  "Stéphanie",
  "Alexandre",
  "Romain",
  "Guillaume",
  "Antoine",
  "Maxime",
  "Baptiste",
  "Hugo",
  "Lucas",
  "Paul",
  "Arthur",
  "Camille",
  "Léa",
  "Emma",
  "Chloé",
  "Manon",
  "Sarah",
  "Laura",
  "Clara",
  "Jade",
  "Louise",
  "Louis",
  "Jules",
  "Gabriel",
  "Raphaël",
  "Léo",
  "Adam",
  "Hector",
  "Victor",
  "Antonin",
  "Théo",
  "Alice",
  "Inès",
  "Eva",
  "Zoé",
  "Agathe",
  "Lola",
  "Nina",
  "Mia",
  "Léna",
  "Eden",
  "Ethan",
  "Noah",
  "Liam",
  "Mason",
  "William",
  "James",
  "Benjamin",
  "Lucas",
  "Henry",
  "Alexander",
] as const;

const LAST_NAMES = [
  "Martin",
  "Bernard",
  "Dubois",
  "Thomas",
  "Robert",
  "Richard",
  "Petit",
  "Durand",
  "Leroy",
  "Moreau",
  "Simon",
  "Laurent",
  "Lefebvre",
  "Michel",
  "Garcia",
  "David",
  "Bertrand",
  "Roux",
  "Vincent",
  "Fournier",
  "Morel",
  "Girard",
  "Andre",
  "Lefevre",
  "Mercier",
  "Dupont",
  "Lambert",
  "Bonnet",
  "Francois",
  "Martinez",
  "Legrand",
  "Garnier",
  "Faure",
  "Rousseau",
  "Blanc",
  "Guerin",
  "Muller",
  "Henry",
  "Roussel",
  "Nicolas",
  "Perrin",
  "Morin",
  "Mathieu",
  "Clement",
  "Gauthier",
  "Dumont",
  "Lopez",
  "Fontaine",
  "Chevalier",
  "Robin",
  "Masson",
  "Sanchez",
  "Gerard",
  "Nguyen",
  "Boyer",
  "Denis",
  "Lemaire",
  "Duval",
  "Joly",
  "Gautier",
  "Roger",
  "Roche",
  "Roy",
  "Noel",
  "Meyer",
  "Lucas",
  "Meunier",
  "Jean",
  "Perez",
  "Marchand",
  "Carre",
  "Leclerc",
  "Colin",
  "Vidal",
  "Caron",
  "Picard",
  "Gaillard",
  "Philippe",
  "Leroux",
  "Giraud",
  "Bonnet",
  "Schmitt",
  "Lemoine",
  "Riviere",
  "Lucas",
  "Brun",
  "Gauthier",
  "Barbier",
  "Arnaud",
  "Dumas",
] as const;

const STREETS = [
  "Rue de la Paix",
  "Avenue des Champs-Élysées",
  "Boulevard Saint-Germain",
  "Rue de Rivoli",
  "Avenue Montaigne",
  "Rue du Faubourg Saint-Honoré",
  "Boulevard Haussmann",
  "Rue de la Bourse",
  "Avenue de l'Opéra",
  "Rue Saint-Denis",
  "Boulevard de la Madeleine",
  "Rue de la Pompe",
  "Avenue Victor Hugo",
  "Rue de Passy",
  "Boulevard Malesherbes",
  "Rue de Sèvres",
  "Avenue des Ternes",
  "Boulevard de Courcelles",
  "Rue de Rome",
  "Avenue de Wagram",
  "Rue de la Fayette",
  "Boulevard de Magenta",
  "Avenue de la République",
  "Rue du Temple",
  "Boulevard du Temple",
  "Rue de Bretagne",
  "Avenue Parmentier",
  "Boulevard de Belleville",
  "Rue de Belleville",
  "Avenue Gambetta",
  "Rue des Pyrénées",
  "Boulevard de Charonne",
  "Avenue de la Porte de Montreuil",
  "Rue de Bagnolet",
  "Boulevard de la Villette",
] as const;

function generatePhoneNumber(): string {
  const prefixes = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const number = Math.floor(Math.random() * 90000000) + 10000000;
  return `${prefix}${number}`;
}

function generateSocialSecurityNumber(): string {
  const gender = Math.random() > 0.5 ? 1 : 2;
  const year = Math.floor(Math.random() * 50) + 50; // 1950-1999
  const month = Math.floor(Math.random() * 12) + 1;
  const department = Math.floor(Math.random() * 95) + 1;
  const cityCode = Math.floor(Math.random() * 999) + 1;
  const order = Math.floor(Math.random() * 999) + 1;

  return `${gender}${year.toString().padStart(2, "0")}${month.toString().padStart(2, "0")}${department.toString().padStart(2, "0")}${cityCode.toString().padStart(3, "0")}${order.toString().padStart(3, "0")}`;
}

function generateEmployeeNumber(): string {
  const year = new Date().getFullYear();
  const number = Math.floor(Math.random() * 9999) + 1;
  return `EMP${year}${number.toString().padStart(4, "0")}`;
}

function generateSalary(position: string): number {
  const baseSalaries: Record<string, number> = {
    "Directeur Général": 8000,
    "Directeur RH": 6500,
    "Responsable Comptabilité": 5500,
    "Développeur Full Stack": 4800,
    "Chef de Projet": 5200,
    Commercial: 3500,
    "Responsable Marketing": 5000,
    "Ingénieur Production": 4500,
    "Responsable Qualité": 4800,
    Juriste: 5200,
    "Contrôleur de Gestion": 4800,
    "Responsable Communication": 4500,
    "Technicien Maintenance": 2800,
    "Agent de Sécurité": 2200,
    "Assistant RH": 2800,
    Comptable: 3200,
    "Développeur Frontend": 4200,
    "Développeur Backend": 4200,
    "Chef d'Équipe": 3800,
    Vendeur: 2800,
    "Chargé de Communication": 3200,
    "Opérateur Production": 2400,
    "Contrôleur Qualité": 2800,
    "Assistant Juridique": 2800,
    "Analyste Financier": 3800,
    "Chargé de Marketing": 3200,
    Électricien: 2600,
    Garde: 2000,
    "Stagiaire RH": 1200,
    "Stagiaire Comptabilité": 1200,
    "Stagiaire Informatique": 1200,
  };

  const baseSalary = baseSalaries[position] || 3000;
  const variation = (Math.random() - 0.5) * 0.4; // ±20% variation
  return Math.round(baseSalary * (1 + variation) * 100) / 100;
}

function generateHireDate(): string {
  const start = new Date(2014, 0, 1);
  const end = new Date();
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
  return randomDate.toISOString().split("T")[0] ?? "";
}

function generateWeeklyHours(contractType: string): number {
  switch (contractType) {
    case "CDI":
    case "CDD":
      return Math.random() > 0.3 ? 35 : Math.random() > 0.5 ? 39 : 40;
    case "Interim":
      return Math.floor(Math.random() * 20) + 20; // 20-40 hours
    case "Stage":
      return Math.floor(Math.random() * 15) + 20; // 20-35 hours
    default:
      return 35;
  }
}

function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function generateEmployees(): Employee[] {
  const employees: Employee[] = [];

  for (let i = 1; i <= 1000; i++) {
    const firstName =
      FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    const department =
      DEPARTMENTS[Math.floor(Math.random() * DEPARTMENTS.length)];
    const position = POSITIONS[Math.floor(Math.random() * POSITIONS.length)];
    const contractType = ["CDI", "CDD", "Interim", "Stage"][
      Math.floor(Math.random() * 4)
    ] as Employee["contractType"];
    const city = CITIES[Math.floor(Math.random() * CITIES.length)];
    const street = STREETS[Math.floor(Math.random() * STREETS.length)];
    const streetNumber = Math.floor(Math.random() * 200) + 1;

    const employee: Employee = {
      id: `emp_${i.toString().padStart(4, "0")}`,
      slug: generateUUID(),
      firstName: firstName ?? "",
      lastName: lastName ?? "",
      email: `${firstName?.toLowerCase()}.${lastName?.toLowerCase()}@entreprise.fr`,
      phone: generatePhoneNumber(),
      department: department ?? "",
      position: position ?? "",
      hireDate: generateHireDate(),
      contractType,
      salary: generateSalary(position ?? ""),
      weeklyHours: generateWeeklyHours(contractType),
      status:
        Math.random() > 0.1
          ? "active"
          : Math.random() > 0.5
            ? "inactive"
            : "on_leave",
      managerId:
        i > 50 ? `emp_${Math.floor(Math.random() * 50) + 1}` : undefined,
      employeeNumber: generateEmployeeNumber(),
      socialSecurityNumber: generateSocialSecurityNumber(),
      address: {
        street: `${streetNumber} ${street}`,
        city: city?.city ?? "",
        postalCode: city?.postalCode ?? "",
        country: "France",
      },
      emergencyContact: {
        name: `${FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)]} ${LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)]}`,
        relationship:
          ["Conjoint", "Parent", "Enfant", "Ami"][
            Math.floor(Math.random() * 4)
          ] ?? "",
        phone: generatePhoneNumber(),
      },
      lastUpdated: new Date().toISOString(),
    };

    employees.push(employee);
  }

  return employees;
}

export const employeesData: Employee[] = generateEmployees();
